import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../Components/CartTotal";
import { useTranslation } from 'react-i18next'; 

const Cart = () => {
  const { t } = useTranslation(); 
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  console.log(cartItems); 

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: quantity,
          });
        }
      }
    }
    setCartData(tempData);
    console.log(tempData); 
  }, [cartItems]);

  return (
    <div className="bg-customGray border-t pt-14">
      <div className="flex justify-center text-2xl mb-3">
        <Title text1={t("yourCart")} text2={t("title")} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null; 

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6 ">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, Number(e.target.value))
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt={t("remove")} 
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3 mx-8"
            >
              {t("continueShopping")} 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;