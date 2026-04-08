import { useContext, useState } from "react";
import CartTotal from "../Components/CartTotal";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import { useTranslation } from 'react-i18next'; // Importing translation hook

const PlaceOrder = () => {
  const { t } = useTranslation(); // Initialize translation
  const [method, setMethod] = useState('cod');
  const [province, setProvince] = useState(''); 
  const [city, setCity] = useState(''); 
  const { navigate } = useContext(ShopContext);

  const provinces = [
    t("provinces.0"), t("provinces.1"), t("provinces.2"),
    t("provinces.3"), t("provinces.4"), t("provinces.5"),
    t("provinces.6"), t("provinces.7"), t("provinces.8"),
    t("provinces.9"), t("provinces.10"), t("provinces.11"),
    t("provinces.12"), t("provinces.13"), t("provinces.14"),
    t("provinces.15"), t("provinces.16"), t("provinces.17"),
    t("provinces.18"), t("provinces.19"), t("provinces.20"),
    t("provinces.21"), t("provinces.22"), t("provinces.23"),
    t("provinces.24")
  ];

  const countiesOfTehran = [
    t("tehran_counties.0"), t("tehran_counties.1"), t("tehran_counties.2"),
    t("tehran_counties.3"), t("tehran_counties.4"), t("tehran_counties.5"),
    t("tehran_counties.6"), t("tehran_counties.7"), t("tehran_counties.8"),
    t("tehran_counties.9"), t("tehran_counties.10"), t("tehran_counties.11"),
    t("tehran_counties.12"), t("tehran_counties.13"), t("tehran_counties.14"),
    t("tehran_counties.15"), t("tehran_counties.16")
  ];

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setCity(''); // reset city when province changes
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  

  return (
    <div className="bg-customGray flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* اطلاعات ارسال */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[50%] bg-customGray shadow-md rounded-lg p-6 mx-2 mt-6 h-[60%]">
        <div className="text-xl text-center sm:text-2xl py-4 border-b-2 border-gray-200">
          <Title text1={t('shipping_info')} text2={t('info')} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-3">
            <input className="border border-gray-300 rounded py-2 px-4 w-full" type="text" placeholder={t('first_name')} />
            <input className="border border-gray-300 rounded py-2 px-4 w-full" type="text" placeholder={t('last_name')} />
          </div>

          <input className="border border-gray-300 rounded py-2 px-4 w-full" type="email" placeholder={t('email_address')} />
          <input className="border border-gray-300 rounded py-2 px-4 w-full" type="text" placeholder={t('full_address')} />

          <div className="flex gap-3">
            <select id='province' value={province} onChange={handleProvinceChange} className='border border-gray-300 rounded py-2 px-4 w-full'>
              <option value="">{t('select_province')}</option>
              {provinces.map((province) => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
            
            <select 
  id='city' 
  value={city} 
  onChange={handleCityChange} 
  className='border border-gray-300 rounded py-2 px-4 w-full' 
  disabled={!province} // غیرفعال بودن گزینه شهر اگر استان انتخاب نشده باشد
>
  <option value="">{t('select_city')}</option>
  {province === 'تهران' && countiesOfTehran.map((city) => (
    <option key={city} value={city}>{city}</option>
  ))}
</select>

          </div>
          <input className="border border-gray-300 rounded py-2 px-4 w-full" type="number" placeholder={t('postal_code')} />
      <input className="border border-gray-300 rounded py-2 px-4 w-full" type="number" placeholder={t('phone')} />
    </div>
  </div>

  {/* مجموع سبد خرید */}
  <div className="mt-8 w-full sm:max-w-[50%]">
    <div className="mt-8">
      <CartTotal />
    </div>
    <div className="mt-12 mx-6 flex flex-col items-start">
      <Title text1={t('payment_method')} text2={t('method')} />
      <div className="flex gap-3 flex-col lg:flex-row">
        <div onClick={() => setMethod('cod')} className="flex gap-3 border p-2 px-3 cursor-pointer">
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
          <p className="text-gray-500 text-sm font-medium mx-4">{t('secure_payment')}</p>
        </div>
      </div>

      <div className="flex items-center w-full text-end mt-8">
        <button onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm my-2">{t('place_order')}</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default PlaceOrder;