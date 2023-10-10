import { Layout } from '@src/components';
import React from 'react';

import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import signInWithGooglePopup from '@features/authentication/sign-in-with-google-popup';
import { login } from '@src/api/user';
import { AxiosError } from 'axios';
import { loginSchema } from '@src/features/validator/type-schema';

const se = {
  input: `p-2 rounded-lg border-2 border-sky-300 shadow-sm text-slate-900`,
};

// TODO
// 1. add the login logic - done
// 2. add the login with google logic - done
// 5. create the validation logic with zod - done

// PRIORITY 1
// 15. create EC2 instance for the backend - most important
// 11. add the forgot password logic
// 12. add the find id logic
// 13. add the find password logic
// 14. add the sign up logic - 50% / backend done

// PRIORITY 2
// 6. add the error handling logic - 50%
// 7. add the loading logic
// 9. add the refresh token logic

// PRIORITY 3
// 3. add the login with github logic
// 4. add the login with linkedin logic
// 10. add the remember me logic

const Login: React.FC = () => {
  const [loginInput, setLoginInput] = React.useState('');
  const [pwdInput, setPwdInput] = React.useState('');

  const onChangeLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(e.target.value);
  };

  const onChangePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdInput(e.target.value);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.stopPropagation();
    if (!loginInput || !pwdInput) return window.alert('the login & pwd value is must filled up!');

    const data = {
      email: loginInput,
      password: pwdInput,
    };

    const validatedLoginSchema = loginSchema.safeParse(data);
    if (!validatedLoginSchema.success) {
      const err = validatedLoginSchema.error.flatten().fieldErrors;
      return window.alert(err.email || err.password);
    }

    try {
      const result = await login(validatedLoginSchema.data);
      console.log(result);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          if (err.response.data.error === 'INVALID_CREDENTIALS') {
            if (err.response.data.occurred === 'email') {
              return window.alert('이메일을 확인해주세요');
            } else if (err.response.data.occurred === 'password') {
              return window.alert('비밀번호를 확인해주세요');
            }
          }
        }
      } else {
        return console.error(err);
      }
    }
  };

  const onKeydownLoginForm = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') return handleSubmit();
  };

  return (
    <Layout>
      <h1 className="text-green-500 text-2xl font-bold lg:my-6 mt-2 max-w-sm italic lg:text-4xl">Shall we dance?</h1>
      <section className="min-w-[340px] max-w-[1660px] w-[60%] mx-auto min-h-[40%] max-h-[860px] py-8">
        <form
          className="bg-slate-100 rounded-lg flex flex-col lg:gap-3 px-6 pt-12 pb-6 shadow-lg mix-blend-normal"
          onKeyDown={onKeydownLoginForm}>
          <label htmlFor="login-id-input" className="lg:text-lg font-bold text-slate-700 mb-1">
            Don't worry, I'm not a hacker :)
          </label>
          <input
            value={loginInput}
            onChange={onChangeLoginInput}
            id="login-id-input"
            type="text"
            placeholder="email"
            className={se.input}
          />
          <label htmlFor="login-pwd-input" className="lg:text-lg font-bold text-slate-700 lg:mt-8 mt-4 mb-1">
            Would you?
          </label>
          <input
            value={pwdInput}
            onChange={onChangePwdInput}
            id="login-pwd-input"
            placeholder="password"
            type="password"
            className={se.input}
          />

          <div className="flex items-center justify-between lg:mt-4 mt-2">
            <div className="flex lg:gap-3 gap-2">
              <div className="rounded-full cursor-pointer" onClick={signInWithGooglePopup}>
                <AiOutlineGooglePlus size={30} color="hotpink" />
              </div>
              <div className="rounded-full cursor-pointer">
                <AiOutlineLinkedin size={30} color="#1989fa" />
              </div>
              <div className="rounded-full cursor-pointer">
                <AiOutlineGithub size={30} color="black" />
              </div>
            </div>

            <input
              type="button"
              onClick={handleSubmit}
              className="rounded px-4 py-2 font-semibold bg-blue-300 self-end m-2 hover:bg-rose-400 transition-colors"
              value="Login"
            />
          </div>
          <div className="under-box flex justify-between mt-2 text-xs">
            <div className="find-id-password">
              <span className="text-slate-700 pointer-events-none">Forget your</span>
              <div>
                <a href="forget#id" className="hover:text-rose-400 transition-colors font-semibold text-slate-500">
                  ID
                </a>
                <span className="text-slate-700 pointer-events-none">/</span>
                <a href="forget#pwd" className="hover:text-rose-400 transition-colors font-semibold text-slate-500">
                  Password?
                </a>
              </div>
            </div>

            <div className="sign-up flex flex-col text-end">
              <div className="text-slate-700">Don't have an account?</div>
              <a href="#" className="text-blue-600 hover:text-rose-400 transition-colors font-bold p-0">
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Login;
