import React from "react";
import Hero from "../pages/Hero";
import Feature from "../pages/Feature";
import Banner from "../pages/Baner";
import BestSellerProducts from "../pages/BestSellerProducts";
import NewProducts from "../pages/NewProducts";
import BannerBottom from "../pages/BanerBottom";
import Newsletter from "../pages/Newsletter";



function Home(props) {
    return (
        <div>
            <Hero/>
            <Feature/>
            <BestSellerProducts/>
            <Banner/>
            <NewProducts/>
            <BannerBottom/>
            <Newsletter/>
        </div>
    );
}
export default Home