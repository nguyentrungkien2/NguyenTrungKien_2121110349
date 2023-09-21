import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./Home";
import Products from "../pages/AllProducts/Products";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";



const Main =()=>(
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/all-products" element={<Products/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </main>
)
export default Main;