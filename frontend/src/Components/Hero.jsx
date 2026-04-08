
import { assets } from "../assets/assets";
import { useTranslation } from 'react-i18next'; 

const Hero = () => {
  const { t } = useTranslation(); 

  return (
    <div className="relative w-full h-screen">
      <img
        className="min-h-full max-h-full min-w-full overflow-wrap-anywhere object-cover object-center rounded-inherit"
        src={assets.hero_img}
        alt={t('hero_light_and_fragrance')} 
      />

      <div className="py-2 relative overflow-hidden whitespace-nowrap w-full bg-customGray">
        <div className="flex animate-scroll">
          <div className="space-x-12 flex">
            <p className="text-s px-10">✺</p>
            <p className="text-s">{t('hero_art_and_peace')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_beauty_in_details')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_light_and_fragrance')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_art_and_peace')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_beauty_in_details')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_light_and_fragrance')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_art_and_peace')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_beauty_in_details')}</p>
            <p className="text-s">✺</p>
            <p className="text-s">{t('hero_light_and_fragrance')}</p>
            <p className="text-s">✺</p>
          </div>
        </div>
        <hr className="border-gray-400 mt-4" />
      </div>
    </div>
  );
};

export default Hero;