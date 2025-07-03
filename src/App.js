import React from 'react';
import './App.css';
//import Navbar from './customer/components/Navigation/Navigation2';
import SocialMediaSidebar from './customer/pages/HomePage/SocialMediaSidebar';
import Chatbox from './customer/pages/HomePage/Chatbox';
import Navgation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import HomePage2 from './customer/pages/HomePage/HomePage2';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/ProductPage/Product';
import ContactUs from './customer/components/NavbarPages/ContactUs';
import SearchPage from './customer/components/NavbarPages/Search';
import Story from './customer/components/NavbarPages/Story';
import Login from './customer/components/Icons/Login';
import Register from './customer/components/Icons/Register';
import Cart from './customer/components/Icons/Cart';
import Suits from './customer/components/NavbarPages/suits';
import NewArrivals from './customer/components/NavbarPages/NewArrivals';
import Dupattas from './customer/components/NavbarPages/Dupattas';
import Blog from './customer/components/NavbarPages/Blog';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
     <div>
    <Router>
      <Navgation />
      <SocialMediaSidebar/>
      <Chatbox/>
    <Routes>
      <Route path="/" element ={<HomePage2/>} />
      <Route path="/contact" element ={<ContactUs/>} />
      <Route path="/Login" element ={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path="/unstitchedSuits" element ={<Suits/>} />
      <Route path="/dupattas" element ={<Dupattas/>}/>
      <Route path="/search" element ={<SearchPage/>} />
      <Route path="/AboutUS" element ={<Story/>} />
      <Route path="/newArrival" element ={<NewArrivals/>} />
      <Route path="/unstitchedSalwarSuits" element ={<Suits/>} />
      <Route path="/dupattas" element ={<Dupattas/>} />
      <Route path="ProductDetails" element={<ProductDetails/>}/>
      <Route path="ACart" element={<Cart/>}/>
      <Route path="/Blog" element={<Blog/>} />
    </Routes>
      <Footer />
    </Router>  
     </div>
   );
};   

export default App;
