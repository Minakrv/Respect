import { useTranslation } from "react-i18next";

const NewsLetterBox = () => {
  const { t } = useTranslation();

  const onSubmitHandler = (event) => {
    event.preventDefault();
 
  };

  return (
    <div className="bg-customGray text-center p-6 rounded-lg shadow-md">
      <p className="text-2xl font-bold text-gray-800">{t('subscribeNow')}</p>
      <p className="text-gray-800 mt-3">
        {t('newsletterInfo')}
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border overflow-hidden">
        <input
          className="w-full flex-1 outline-none border-none px-4 py-2 focus:ring-2 focus:ring-black"
          type="email"
          placeholder={t('enterEmail')}
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-6 py-2 transition duration-300 hover:bg-gray-800"
        >
          {t('subscribe')}
        </button>
      </form>
      <p className="text-gray-800">
        {t('privacyPolicy')}
      </p>
    </div>
  );
};

export default NewsLetterBox;