import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useTranslation } from 'react-i18next'; 

const AboutHome = () => {
  const { scrollToTop } = useContext(ShopContext);
  const { t } = useTranslation(); 

  return (
    <div className="flex flex-col sm:flex-row bg-customGray">
      <img className="mx-16 mt-20 mb-20 h-[500px] sm:w-1/2" src={assets.aboutHome} alt="" />
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <Link to='/about' onClick={scrollToTop}>
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">{t('about')}</p> 
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">{t('respect')}</h1> 
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">{t('home_decor')}</p> 
              <p className="w-8 md:w-11 h-[1px] bg-[#414141] "></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AboutHome;