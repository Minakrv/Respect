import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, language } = useContext(ShopContext); // Get language from context
  const { t } = useTranslation(); // Initialize translation function
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;   
      }
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="bg-customGray border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer mx-2" alt="" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
         
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
         
          <button onClick={() => addToCart(productData._id)} className="bg-black text-white px-8 py-3 mt-4 text-sm active:bg-gray-700">
            {t('product.add_to_cart')}
          </button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>{t('product.handmade_description')}</p>
           
          </div>
        </div> 
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">{t('product.description')}</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>{t('product.handmade_description')}</p>
          <p>{t('product.products_description')}</p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product;