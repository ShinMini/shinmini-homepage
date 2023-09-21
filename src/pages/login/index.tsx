import { Layout } from '@src/components';
import React from 'react';

import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import signInWithGooglePopup from '@features/authentication/sign-in-with-google-popup';
import { login } from '@src/api/user';
import { AxiosError } from 'axios';

const se = {
  input: `p-2 rounded-lg border-2 border-sky-300 shadow-sm`,
};

// TODO
// 1. add the login logic
// 2. add the login with google logic
// 3. add the login with github logic
// 4. add the login with linkedin logic
// 5. create the validation logic with zod
// 6. add the error handling logic
// 7. add the loading logic
// 8. add the redirect logic
// 9. add the refresh token logic
// 10. add the remember me logic
// 11. add the forgot password logic
// 12. add the find id logic
// 13. add the find password logic
// 14. add the sign up logic

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

    try {
      const result = await login(data);
      // need to add the token to the local storage
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
      }
    }
  };

  const onKeydownLoginForm = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') return handleSubmit();
  };

  return (
    <Layout>
      <h1 className="text-orange-400 text-4xl font-bold mt-6">Hey you, Join on me</h1>
      <section className="min-w-[360px] max-w-[1660px] w-[60%] mx-auto min-h-[40%] max-h-[860px]">
        <form
          className="bg-slate-100 rounded-lg flex flex-col gap-3 px-6 pt-12 pb-6 mt-[10rem] shadow-lg"
          onKeyDown={onKeydownLoginForm}>
          <label htmlFor="login-id-input" className="text-lg font-bold text-slate-700">
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

          <label htmlFor="login-pwd-input" className="text-lg font-bold text-slate-700 mt-8">
            I'll keep your password secret with hashing
          </label>
          <input
            value={pwdInput}
            onChange={onChangePwdInput}
            id="login-pwd-input"
            placeholder="password"
            type="password"
            className={se.input}
          />

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-3">
              <div className="rounded-full p-2 cursor-pointer" onClick={signInWithGooglePopup}>
                <AiOutlineGooglePlus size={40} color="hotpink" />
              </div>
              <div className="rounded-full p-2 cursor-pointer">
                <AiOutlineLinkedin size={40} color="#1989fa" />
              </div>
              <div className="rounded-full p-2 cursor-pointer">
                <AiOutlineGithub size={40} />
              </div>
            </div>

            <input
              type="button"
              onClick={handleSubmit}
              className="rounded px-4 py-2 font-semibold bg-blue-300 self-end m-2 hover:bg-rose-400 transition-colors"
              value="Login"
            />
          </div>
          <div className="under-box flex justify-between px-2 mt-1">
            <div className="find-id-password">
              <a href="#" className="hover:text-rose-400 transition-colors font-semibold text-slate-500">
                Find ID
              </a>
              <span className="text-slate-700"> / </span>
              <a href="#" className="hover:text-rose-400 transition-colors font-semibold text-slate-500">
                Find Password
              </a>
            </div>

            <div className="sign-up">
              <span className="text-slate-700">Don't have an account? </span>
              <a href="#" className="text-blue-600 hover:text-rose-400 transition-colors font-bold">
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
