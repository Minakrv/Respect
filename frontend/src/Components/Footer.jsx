import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const { scrollToTop } = useContext(ShopContext);
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-customGray flex flex-row sm:grid grid-cols-[1fr_1fr_1fr] gap-14 text-sm">
        <div>
          <Link to='/'>
            <img onClick={scrollToTop} className="mb-2 w-60 m-1" src={assets.logo} alt="" />
          </Link>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 mt-6 text-center">{t('links')}</p>
          <hr className="border-gray-400 mb-3 w-[350px]" />

          <ul className="flex flex-col justify-center gap-1 text-gray-600 cursor-pointer">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>{t('home')}</p>
            </NavLink>

            <NavLink to="/collection" className="flex flex-col items-center gap-1">
              <p>{t('products')}</p>
            </NavLink>

            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>{t('about')}</p>
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>{t('contact')}</p>
            </NavLink>

            <NavLink to="/delivery" className="flex flex-col items-center gap-1">
              <p>{t('shipping')}</p>
            </NavLink>
          </ul>
        </div>

        <div >
          <p className="text-xl font-medium mb-5 mt-6 text-center">{t('contactInfo_footer')}</p>
          <hr className="border-gray-400 mb-3 w-[350px]" />
          <ul className="flex flex-col text-center gap-4 text-gray-600 cursor-pointer ">
            <li>{t('phone')}: 09353176649</li>
            <li>{t('email')}: mino.khosravi2025@gmail.com</li>

            <ul className="flex flex-row gap-4 justify-around text-center">
              <li>
                <a href="https://www.instagram.com/k_garden12" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition duration-300">
                  <FaInstagram size={30} />
                </a>
              </li>
              <li>
                <a href="https://telegram.org/@mkrv_candle" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition duration-300">
                  <FaTelegram size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/Mkrv" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition duration-300">
                  <FaWhatsapp size={30} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div>
        <p className="py-5 bg-customGray text-sm text-center">
          {t('rights')}
        </p>
      </div>
    </div>
  );
};

export default Footer;