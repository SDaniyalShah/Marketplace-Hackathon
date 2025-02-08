import Image from "next/image";
import Product from "./products/page";

import Hero from "./components/Hero";
import BrandBar from "./components/BrandBar";
import TopSell from "./components/TopSell";
import Browse from "./components/Browse";
import HappyCustomer from "./components/HappyCustomer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
       <Hero/>
       <BrandBar/>
      <Product/>
      <TopSell/>
      <Browse/>
      <HappyCustomer/>
      <Footer/>
    </div>
  );
}
