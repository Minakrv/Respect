import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";
import { useTranslation } from 'react-i18next';


const Collection = () => {
  const { products , search , showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('ghalami');
  const { t } = useTranslation();





  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let productsCopy = products.slice();
  
    switch (sortType) {
      case 'ghalami':
        setFilterProducts(productsCopy.filter(item => item.subCategory === 'ghalami'));
        break;
  
      case 'sangi':
        setFilterProducts(productsCopy.filter(item => item.subCategory === 'sangi'));
        break;
  
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(()=>{
    sortProduct();

  },[sortType])

  return (
    <div className="flex flex-col bg-customGray sm:flex-row gap-1 sm:gap-10 pt-10 px-10 border-t">
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-6">
          <Title text1={t("text1")} text2={t("text2")} />
          <select onChange={(e)=> setSortType(e.target.value)} className="border-2 bg-black text-white border-black text-sm mx-12 px-4">
            <option value="ghalami">{t('categories.ghalami')}</option>
            <option value="sangi">{t('categories.sangi')}</option>
            
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Collection;
