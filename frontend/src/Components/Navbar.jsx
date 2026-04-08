import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next'; 
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
  <>
    <div className="flex items-center justify-around font-medium h-28 bg-customGray ">
      <Link to='/'><img src={assets.logo} alt="" className="w-40 bg-transparent" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>{t('home')}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>{t('collection')}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>{t('about')}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>{t('contact')}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <div className="group relative">
          <Link to='/login'>
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">{t('account')}</p>
              <Link to='/orders'>
                <p className="cursor-pointer hover:text-black">{t('orders')}</p>
              </Link>
              <p className="cursor-pointer hover:text-black">{t('login')}</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>

      
      <div className="flex flex-col gap-2">
        <button onClick={() => changeLanguage('fa')} className="text-gray-700 ">فارسی</button>
        <button onClick={() => changeLanguage('en')} className="text-gray-700">English</button>
      </div>
    

   
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-5 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} className="h-2 rotate-180" alt="" />
            <p>{t('close')}</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'>
            {t('home')}
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'>
            {t('collection')}
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'>
            {t('about')}
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'>
            {t('contact')}
          </NavLink>
          
        </div>
       
      </div>
      
    </div>
     <hr className="border-gray-400 w-full" />
     </>
  );
};

export default Navbar;