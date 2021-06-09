import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-2 items-center">
        <div className="">
          <Link to='/'>
            <h2 className="py-3 text-4xl subpixel-antialiased font-mono text-green-400 font-bold">
              Aircnc
            </h2>
          </Link>
        </div>
        <div className="col-span-2 py-3 text-2xl subpixel-antialiased font-mono flex justify-end gap-x-16 items-center">
          <Link to='/admin' className='hidden md:hidden lg:block'>
            <h2>Admin</h2>
          </Link>
          <Link to='/dashboard' className='hidden md:hidden lg:block'>
            <h2>Dashboard</h2>
          </Link>
          <Link className='hidden md:hidden lg:block' to='/'>
            <h2>Help</h2>
          </Link>
          <Link to='/login' className=''>
            <h2>Login</h2>
          </Link>
          <Link to='/signup' className='bg-green-400 py-2 px-4 rounded-2xl'>
            <h2>Signup</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
