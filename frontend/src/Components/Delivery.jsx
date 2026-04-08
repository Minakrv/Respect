import Title from "./Title";
import { useTranslation } from 'react-i18next';

const Delivery = () => {
    const { t } = useTranslation(); 

    return (
        <div className="mt-18 mb-10 p-6 bg-customGray rounded-lg shadow-2xl text-center">
            <Title text1={t('delivery.title1')} text2={t('delivery.title2')} />

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700">{t('delivery.shippingMethod.title')}</h3>
                <p className="text-gray-500 mt-2">
                    {t('delivery.shippingMethod.description')}
                </p>
            </div>
            <hr className="border-gray-400 mt-4"/>

            <div className="mt-6"> 
                <h3 className="text-xl font-semibold text-gray-700">{t('delivery.deliveryTime.title')}</h3>
                <p className="text-gray-500 mt-2">
                    {t('delivery.deliveryTime.details')}
                </p>
            </div>
            <hr className="border-gray-400 mt-4 "/>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700">{t('delivery.note.title')}</h3>
                <p className="text-gray-500 mt-2">
                    {t('delivery.note.description')}
                </p>
            </div>
        </div>
    );
}

export default Delivery;