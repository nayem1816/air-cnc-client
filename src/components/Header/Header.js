import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div class="grid grid-cols-3 gap-2 items-center">
        <div className="">
          <Link to='/'>
            <h2 className="p-3 text-4xl subpixel-antialiased font-mono text-green-400 font-bold	">
              Aircnc
            </h2>
          </Link>
        </div>
        <div className="col-span-2 p-3 text-2xl subpixel-antialiased font-mono flex justify-end gap-x-16 items-center">
          <Link className='' to='/'>
            <h2>Admin</h2>
          </Link>
          <Link className='' to='/'>
            <h2>Dashboard</h2>
          </Link>
          <Link className='' to='/'>
            <h2>Help</h2>
          </Link>
          <Link className='' to='/'>
            <h2>Login</h2>
          </Link>
          <Link className='bg-green-400 py-2 px-4 rounded-2xl' to='/'>
            <h2>Signup</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
