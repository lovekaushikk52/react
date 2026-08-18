import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-8 bg-cyan-900">
      <h2 className="text-2xl font-bold" >Clothes collection</h2>
      <div className="gap-10 flex">

        <Link className="text-lg font-medium" to ='/'>Home</Link>
        <Link className="text-lg font-medium" to ='/about'>About</Link>
        <Link className="text-lg font-medium" to ='/product'>Product</Link>
        <Link className="text-lg font-medium" to ='/courses'>Courses</Link>

        {/* <a className="text-lg font-medium" href="/">Home</a>
        <a className="text-lg font-medium" href="/about">About</a>
        <a className="text-lg font-medium" href="/product">Product</a> */}

      </div>
    </div>
  );
};

export default Navbar;
