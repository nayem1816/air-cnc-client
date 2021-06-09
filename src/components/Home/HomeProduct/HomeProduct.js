import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../../FakeData/FakeData.json";

const HomeProduct = () => {
  const [hotelData, setHotelData] = useState([]);
  useEffect(() => {
    setHotelData(fakeData);
  }, [hotelData]);
  const experiencesData = hotelData.slice(0, 4);
  const homesData = hotelData.slice(5, 9);
  return (
    <div>
      <div className="">
        <div className="flex justify-between">
          <h2 className="text-3xl">Experiences</h2>
          <Link to="/">
            <h2>See all &#62;&#62;</h2>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {experiencesData.map((hotels) => (
            <div className="">
              <Link to="/">
                <img src={hotels.img} alt="" />
                <h2>
                  {hotels.city} - {hotels.country}
                </h2>
                <h2 className=" font-bold">{hotels.title}</h2>
                <p>{hotels.price} $ per person</p>
                <p>Review: {hotels.reviews}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          <h2 className="text-3xl">Homes</h2>
          <Link to="/">
            <h2>See all &#62;&#62;</h2>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {homesData.map((home) => (
            <div className="">
              <Link to="/">
                <img src={home.img} alt="" />
                <h2>
                  {home.city} - {home.country}
                </h2>
                <h2 className=" font-bold">{home.title}</h2>
                <p>{home.price} $ per person</p>
                <p>Review: {home.reviews}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
