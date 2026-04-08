import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import { useTranslation } from 'react-i18next';

const CartTotal = () => {
    const { currency, getCartAmount } = useContext(ShopContext);
    const { t } = useTranslation(); 
    const [shippingMethod, setShippingMethod] = useState('flat_rate15'); 
    
    const cartAmount = getCartAmount();


    const shippingOptions = {
        flat_rate15: { label: t('shippingMethod.flat_rate15'), cost: 65000 },
        flat_rate22: { label: t('shippingMethod.flat_rate22'), cost: 0 }, 
        flat_rate23: { label: t('shippingMethod.flat_rate23'), cost: 10000 } 
    };

    const handleShippingChange = (e) => {
        setShippingMethod(e.target.value);
    };

    const totalShippingCost = shippingOptions[shippingMethod].cost;

    return (
        <div className='bg-customGray w-full flex flex-col '>
            <div className='text-2xl mx-4 pt-3 text-center'>
                <Title text1={t('total')} text2={t('cart')} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm mx-6'>
                <div className='flex justify-between '>
                    <p>{t('subtotal')}</p>
                    <p>{currency} {cartAmount}.000</p>
                </div>
                <hr className='border-gray-400 mb-3 mt-2'/>

                <div className='flex flex-col gap-2'>
                    <p>{t('shipping')}</p>
                    <ul className='flex flex-col gap-5 leading-loose'>
                        {Object.keys(shippingOptions).map((method) => (
                            <li key={method} className=''>
                                <input 
                                    className='mx-2 my-2'
                                    type='radio' 
                                    name='shipping_method' 
                                    id={method} 
                                    value={method} 
                                    checked={shippingMethod === method}
                                    onChange={handleShippingChange}
                                />
                                <label htmlFor={method}>
                                    {shippingOptions[method].label}: 
                                    <span>{shippingOptions[method].cost > 0 ? `${currency} ${shippingOptions[method].cost}` : 'پس کرایه'}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className='border-gray-400 mb-3 mt-2'/>
                
                <div className='flex justify-between mb-4'>
                    <b>{t('finalTotal')}</b>
                    <b>{currency}{cartAmount + totalShippingCost}.000</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;