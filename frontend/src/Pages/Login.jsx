import { useState } from "react";
import { useTranslation } from 'react-i18next'; 

const Login = () => {
  const { t } = useTranslation(); 
  const [currentState, setCurrentState] = useState(t('register')); 

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-customGray">
      <form onSubmit={onSubmitHandler} className="bg-customGray flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === t('login') ? '' : (
          <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder={t('name_placeholder')} required />
        )}
        <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder={t('email_placeholder')} required />
        <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder={t('password_placeholder')} required />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">{t('forgot_password')}</p>
          {currentState === t('login') ? (
            <p onClick={() => setCurrentState(t('register'))} className="cursor-pointer">{t('create_account')}</p>
          ) : (
            <p onClick={() => setCurrentState(t('login'))} className="cursor-pointer">{t('login_to_account')}</p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4 mb-4">{currentState === t('login') ? t('login_button') : t('register_button')}</button>
      </form>
    </div>
  );
};

export default Login;