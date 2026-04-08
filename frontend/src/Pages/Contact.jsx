import { assets } from "../assets/assets";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Title from "../Components/Title";
import { useTranslation } from 'react-i18next'; 

const Contact = () => {
  const { t } = useTranslation(); 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3583d874-0d8e-4ce0-ae82-7625ba069e9d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div className="bg-customGray p-8">
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={t("contact")} text2={t("us")} /> 
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-18">
        
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-md h-[500px]"
          src={assets.contact}
          alt="Store"
        />

        <div className="flex flex-col justify-center items-start gap-6 md:w-2/4">
          <p className="font-semibold text-xl text-gray-800">
            {t("customer_relationship")}
          </p>

          <h3 className="font-semibold text-xl text-gray-600">{t("contact_information")}</h3>
          <p className="text-gray-500">
            {t("tel")}
            <br /> {t("emailContact")}
          </p>
          <p className="text-gray-500">{t("response_time")}</p>

          <p className="text-gray-500">
            {t("questions")}
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/k_garden12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://telegram.org/@mkrv_candle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300"
            >
              <FaTelegram size={30} />
            </a>
            <a
              href="https://www.whatsapp.com/Mkrv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition duration-300"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-4 w-[80%] mx-auto p-6 bg-customGray"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-right font-medium text-gray-700"
          >
            {t("your_name")} 
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("enter_your_name")} 
            className="mt-1 block w-full p-2 border border-gray-300 focus:ring-black focus:border-black sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-right font-medium text-gray-700"
          >
            {t("your_email")} 
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("enter_your_email")} 
            className="mt-1 block w-full p-2 border border-gray-300 focus:ring-black focus:border-black sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-right font-medium text-gray-700"
          >
            {t("write_your_message")} 
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder={t("enter_your_message")} 
            className="mt-1 block w-full p-2 border border-gray-300 focus:ring-black focus:border-black sm:text-sm"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white font-semibold focus:outline-none "
        >
          {t("submit")} 
        </button>
      </form>
    </div>
  );
};

export default Contact;