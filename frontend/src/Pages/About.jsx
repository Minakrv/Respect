import Title from '../Components/Title';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import Delivery from '../Components/Delivery';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); 

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-customGray flex flex-col items-center ">
      <img src={assets.about} className="flex w-[80%] h-[550px]" />
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={t('title1')} text2={t('title2')} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-16 '>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 '>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg'
          >
            {t('description1')}
          </motion.p>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className='bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg'
          >
            {t('description2')}
          </motion.p>

          <motion.b
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className='text-gray-800 text-lg px-6 text-center'
          >
            {t('goalTitle')}
          </motion.b>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className='bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg'
          >
            {t('goalDescription')}
          </motion.p>
        </div>
      </div>

      <div className='text-xl py-4 px-6'>
        <Title text1={t('whyChoose.title1')} text2={t('whyChoose.title2')} />
      </div>

      <div className='flex flex-col gap-2 mx-4 md:flex-row text-sm mb-20'>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className='border border-gray-300 rounded-lg p-6 flex flex-col gap-5 bg-white shadow-md transform hover:scale-105 hover:shadow-lg'
        >
          <b>{t('qualityGuarantee.title')}</b>
          <p className='text-gray-600'>{t('qualityGuarantee.description')}</p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className='border border-gray-300 rounded-lg p-6 flex flex-col gap-5 bg-white shadow-md transform hover:scale-105 hover:shadow-lg'
        >
          <b>{t('convenience.title')}</b>
          <p className='text-gray-600'>{t('convenience.description')}</p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className='border border-gray-300 rounded-lg p-6 flex flex-col gap-5 bg-white shadow-md transform hover:scale-105 hover:shadow-lg'
        >
          <b>{t('excellentCustomerService.title')}</b>
          <p className='text-gray-600'>{t('excellentCustomerService.description')}</p>
        </motion.div>
      </div>
      <Delivery />
    </div>
  );
}

export default About;