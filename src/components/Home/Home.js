import React from "react";
import HomeCart from "./HomeCart/HomeCart";
import HomeProduct from "./HomeProduct/HomeProduct";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 gap-20 mt-10">
        <div class="col-span-full lg:col-span-3 ">
          <HomeCart></HomeCart>
        </div>
        <div class="col-span-full lg:col-span-7">
          <HomeProduct></HomeProduct>
        </div>
      </div>
    </div>
  );
};

export default Home;
