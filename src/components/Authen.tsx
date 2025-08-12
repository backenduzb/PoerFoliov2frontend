import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from '../auth/auth';

axios.defaults.withCredentials = true;

const LoginRegisterPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [visible, setVisible] = useState(false);
  const [registerData, setRegisterData] = useState({
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    
  });

const { t } = useTranslation();
const navigate = useNavigate();

const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setLoginData((prev) => ({ ...prev, [name]: value }));
};

const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setRegisterData((prev) => ({ ...prev, [name]: value }));
};

const handleLoginSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const { username, password } = loginData;

    if (!username || !password) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }
    const response = await axios.post(
      'http://localhost:8000/users/login',
      loginData,
      { withCredentials: true }
    );
    navigate('/')
    const token = response.data?.access_token || response.data?.token;
    if (token) {
      console.log(token)
    }
    else {
      console.log("error blet token yo");
    }
    console.log('Login muvaffaqiyatli:', response.data);
    login()
  } catch (error) {
    console.error('Login xatosi:', error);
    alert("Login muvaffaqiyatsiz. Username yoki parol noto'g'ri.");
  }
};

const handleRegisterSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const { first_name, last_name, username, password } = registerData;

    if (!first_name || !last_name || !username || !password) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }
    localStorage.setItem("activeNavItem", '/')
    const response = await axios.post(
      'http://localhost:8000/users/register',
      registerData,
      { withCredentials: true }
    );
    console.log('Ro‘yxatdan o‘tish muvaffaqiyatli:', response.data);
    navigate('/auth');
  } catch (error) {
    console.error('Ro‘yxatdan o‘tish xatosi:', error);
    alert("Ro‘yxatdan o‘tish muvaffaqiyatsiz. Ma'lumotlarni tekshiring.");
  }
};
useEffect(() => {
  const timeout = setTimeout(() => {
    setVisible(true);
  }, 100);

  return () => clearTimeout(timeout);
}, []);
return (
  <div className="flex justify-center items-center h-screen px-4 overflow-hidden relative bg-black">
    <div className="neon-orb orb-green top-[10%] left-[5%] animate-pulse-slow"></div>
    <div className="neon-orb orb-cyan top-[40%] left-[50%] animate-ping"></div>
    <div className="neon-orb orb-light top-[20%] left-[20%] animate-pulse"></div>
    <div className="neon-orb orb-green top-[70%] right-[10%] animate-bounce"></div>
    <div className="neon-orb orb-cyan top-[80%] left-[30%] animate-pulse-slow"></div>
    <div className="absolute w-32 h-32 border-4 border-[var(--green-border)] rounded-full top-10 right-10 animate-spin-slow blur-md opacity-70"></div>
    <div className="absolute w-20 h-20 border-t-4 border-[var(--green-text)] rounded-lg bottom-20 left-10 blur-sm opacity-20"></div>
    <div className="absolute w-48 h-48 border-l-4 border-[var(--green-border)] rotate-45 top-[60%] right-[30%] opacity-25 animate-float"></div>
    <div className="absolute w-24 h-24 border-2 border-[var(--green-border)] rounded-md top-[75%] right-[5%] animate-spin-slow opacity-40"></div>

    <div className={`transition-all duration-700 ease-out transform mt-10 rounded-lg bg-black bg-opacity-30 border border-[var(--green-border)] shadow-xl w-full max-w-md p-8 overflow-hidden relative ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
      <div className="flex justify-center items-center mb-6 h-10 ">
        <h1 className="text-2xl font-bold text-[var(--green-text)]">Login or Signup</h1>
      </div>

      <div className="flex justify-between mb-6 border-b border-[var(--green-border)]">
        <button
          onClick={() => setActiveTab('login')}
          className={`py-2 px-1 font-medium ${activeTab === 'login'
              ? 'text-[var(--green-text)] border-b-2 border-[var(--green-text)] text-shadow'
              : 'text-[var(--green-text)]'
            }`}
        >
          {t('login')}
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`py-2 px-1 font-medium ${activeTab === 'register'
              ? 'text-[var(--green-text)] border-b-2 border-[var(--green-text)] text-shadow'
              : 'text-[var(--green-text)]'
            }`}
        >
          {t('signup')}
        </button>
      </div>

      {activeTab === 'login' && (
        <>
          <h2 className="text-lg font-semibold mb-4 text-[var(--green-text)]">{t('enter_account')}</h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-[var(--green-text)] font-medium">{t('username')}</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                placeholder={t('username')}
                className="w-full mt-1 px-4 py-2
           border border-[var(--green-border)] rounded-lg
           bg-black bg-opacity-30 text-white
           focus:outline-none focus:ring-[0.5px] focus:ring-[var(--green-text)]
           focus:shadow-md  focus:shadow-[var(--green-border)]
           transition duration-300"

              />
            </div>
            <div>
              <label className="text-sm text-[var(--green-text)] font-medium">{t('password')}</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder={t('password')}
                className="w-full mt-1 px-4 py-2
           border border-[var(--green-border)] rounded-lg
           bg-black bg-opacity-30 text-white
           focus:outline-none focus:ring-[0.5px] focus:ring-[var(--green-text)]
           focus:shadow-md  focus:shadow-[var(--green-border)]
           transition duration-300"/>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember" className="text-sm text-[var(--green-text)]">{t('remember')}</label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded-lg transition duration-300"
            >
              {t('login')}
            </button>
          </form>
        </>
      )}

      {activeTab === 'register' && (
        <>
          <h2 className="text-lg font-semibold mb-4 text-[var(--green-text)]">{t('signup')}</h2>
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div className="flex justify-items-center items-center w-full gap-2">
              <div className="flex flex-col w-auto">
                <label className="text-sm text-[var(--green-text)] font-medium ml-1">{t('first_name')}</label>
                <input
                  type="text"
                  name="first_name"
                  value={registerData.first_name}
                  onChange={handleRegisterChange}
                  placeholder={t('first_name')}
                  className="w-full mt-1 px-4 py-2
           border border-[var(--green-border)] rounded-lg
           bg-black bg-opacity-30 text-white
           focus:outline-none focus:ring-[0.5px] focus:ring-[var(--green-text)]
           focus:shadow-md  focus:shadow-[var(--green-border)]
           transition duration-300"
                />
              </div>
              <div className="flex flex-col w-auto">
                <label className="text-sm text-[var(--green-text)] font-medium ml-1">{t('last_name')}</label>
                <input
                  type="text"
                  name="last_name"
                  value={registerData.last_name}
                  onChange={handleRegisterChange}
                  placeholder={t('last_name')}
                  className="w-full mt-1 px-4 py-2
           border border-[var(--green-border)] rounded-lg
           bg-black bg-opacity-30 text-white
           focus:outline-none focus:ring-[0.5px] focus:ring-[var(--green-text)]
           focus:shadow-md  focus:shadow-[var(--green-border)]
           transition duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm text-[var(--green-text)] font-medium ml-1">{t('username')}</label>
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                placeholder={t('username')}
                className="w-full mt-1 px-4 py-2
           border border-[var(--green-border)] rounded-lg
           bg-black bg-opacity-30 text-white
           focus:outline-none focus:ring-[0.5px] focus:ring-[var(--green-text)]
           focus:shadow-md  focus:shadow-[var(--green-border)]
           transition duration-300"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-[var(--green-text)] font-medium ml-1">{t('password')}</label>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder={t('password')}
                className="w-full mt-1 px-4 py-2
           border border-[var(--green-border)] rounded-lg
           bg-black bg-opacity-30 text-white
           focus:outline-none focus:ring-[0.5px] focus:ring-[var(--green-text)]
           focus:shadow-md  focus:shadow-[var(--green-border)]
           transition duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded-lg transition duration-300"
            >
              {t('signup')}
            </button>
          </form>
        </>
      )}
    </div>
  </div>
);
};

export default LoginRegisterPage;
