import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ProductItem = ({id,image,name,price}) => {


    const {currency} = useContext(ShopContext);

  return (
    
    <Link className="text-gray-700 bg-customGray cursor-pointer mb-6 pb-4" to={`/product/${id}`}>
    <div className="overflow-hidden">
        <img className="mx-auto w-60 h-60 object-cover hover:scale-110 transition ease-in-out" src={image[0]} alt="" />
    </div>
    <div className="mx-16">
         <p className=" pt-3 pb-1 text-sm">{name}</p>
    <p className="text-sm font-medium">{currency}{price}</p>
    </div>
 
  
</Link>
          );
      }
   
      

   

 

ProductItem.propTypes= {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
};


export default ProductItem;
