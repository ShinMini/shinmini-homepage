import { Layout } from '@src/components';
import React from 'react';

import { AiOutlineGooglePlus, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import signInWithGooglePopup from '@features/authentication/sign-in-with-google-popup';
import { test } from '@src/api';

const se = {
  input: `p-2 rounded-lg border-2 border-sky-300 shadow-sm`,
};

const Login: React.FC = () => {
  const [loginInput, setLoginInput] = React.useState('');
  const [pwdInput, setPwdInput] = React.useState('');

  const onChangeLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(e.target.value);
  };

  const onChangePwdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdInput(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.stopPropagation();
    if (!loginInput || !pwdInput) return window.alert('the login & pwd value is must filled up!');

    test().then(res => console.log(res));
  };

  const onKeydownLoginForm = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') return handleSubmit();
  };

  return (
    <>
      <Layout>
        <h1 className="text-orange-400 text-4xl font-bold my-6">This is Login Page</h1>
        <section className="min-w-[360px] max-w-[1660px] w-[40%] mx-auto ">
          <form
            className="bg-slate-100 rounded-lg flex flex-col gap-3 px-4 py-10 mt-[10rem] shadow-lg"
            onKeyDown={onKeydownLoginForm}>
            <label htmlFor="login-id-input" className="text-lg font-bold text-slate-700">
              ID
            </label>
            <input
              value={loginInput}
              onChange={onChangeLoginInput}
              id="login-id-input"
              type="text"
              placeholder="ID"
              className={se.input}
            />

            <label htmlFor="login-pwd-input" className="text-lg font-bold text-slate-700">
              PWD
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
                <div className="rounded-full bg-red-300 p-2 cursor-pointer" onClick={signInWithGooglePopup}>
                  <AiOutlineGooglePlus size={24} />
                </div>
                <div className="rounded-full bg-green-300 p-2 cursor-pointer">
                  <AiOutlineGithub size={24} />
                </div>
                <div className="rounded-full bg-blue-300 p-2 cursor-pointer">
                  <AiOutlineLinkedin size={24} />
                </div>
              </div>

              <input
                type="button"
                onClick={handleSubmit}
                className="rounded px-4 py-2 font-semibold bg-rose-300 self-end m-2 hover:bg-rose-400 transition-colors"
                value="Login"
              />
            </div>
          </form>
        </section>
      </Layout>

      <footer className="flex items-center gap-4 bg-green-100 px-4 py-8">
        <h2 className="text-green-500">This is a Footer</h2>
        <div className="w-4 h-4 rounded-full bg-red-300" />
        <div className="w-4 h-4 rounded-full bg-green-300" />
        <div className="w-4 h-4 rounded-full bg-blue-300" />
        <div className="w-4 h-4 rounded-full bg-yellow-300" />
      </footer>
    </>
  );
};

export default Login;
