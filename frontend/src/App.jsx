import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Orders from './Pages/Orders';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Delivery from "./Components/Delivery";
 
import i18n from './Components/I18n';
i18n


const App = () => {
  

  return (
    <div className=" ">
      <ToastContainer/>
      

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
      </Routes>
      <hr className="border-gray-400 flex items-center " />
      <Footer/>
    </div>
  );
}

export default App;