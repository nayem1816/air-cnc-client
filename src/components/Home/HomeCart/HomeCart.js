import React from "react";
import { useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";

const HomeCart = () => {
  const [arrivalValue, setArrivalValue] = useState(new Date());
  const [departureValue, setDepartureValue] = useState(new Date());
  return (
    <div className="">
      <h2>Where do you want to go</h2>
      <div className="pl-3 mt-10">
        {/* location part start */}
        <div className="">
          <div className="shadow-md py-5 px-4 rounded">
            <h2>Location</h2>
            <input
              className="w-full"
              placeholder="Add city, Landmark or address"
              type="text"
            />
          </div>
        </div>
        {/* location part end */}

        {/* date picker start */}
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className=" shadow-md rounded py-5 px-4">
              <h2>Arrival</h2>
              <DatePicker onChange={setArrivalValue} value={arrivalValue} />
            </div>
            <div className="shadow-md rounded py-5 px-4">
              <h2>Departure</h2>
              <DatePicker onChange={setDepartureValue} value={departureValue} />
            </div>
          </div>
        </div>
        {/* date picker end */}

        {/* main cart start */}
        <div className="mt-4">
          <div className="shadow-md py-5 rounded">
            <div className="mb-4 px-4">
              <h2>Guests</h2>
              <h1>2 Adults, 1 Chields</h1>
            </div>
            <hr />
            <div className="px-4 mt-4">
              <div className="grid grid-cols-1 gap-10">
                <div className="grid grid-cols-2 gap-4 flex items-center">
                  <div className="">
                    <h2>Adults</h2>
                  </div>
                  <div className="flex justify-end">
                    <button className="w-8">-</button>
                    <button className="w-8">5</button>
                    <button className="w-8">+</button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex items-center">
                  <div className="">
                    <h2>Adults</h2>
                  </div>
                  <div className="flex justify-end">
                    <button className="w-8">-</button>
                    <button className="w-8">5</button>
                    <button className="w-8">+</button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex items-center">
                  <div className="">
                    <h2>Adults</h2>
                  </div>
                  <div className="flex justify-end">
                    <button className="w-8">-</button>
                    <button className="w-8">5</button>
                    <button className="w-8">+</button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link to="/" className="bg-green-400 py-2 px-4 rounded-2xl">
                    <h2>Apply</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main cart end */}
        <Link
          to="/"
          className="mt-5 shadow-md bg-indigo-600 bg-opacity-100 flex justify-center py-5 px-4 rounded"
        >
          <h2>Search</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomeCart;
