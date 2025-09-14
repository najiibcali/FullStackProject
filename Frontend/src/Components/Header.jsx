import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const getCustomer = localStorage.getItem("customer"); // read customer from localStorage

  const handleLogout = () => {
    localStorage.removeItem("customer"); // kaliya customer remove
    window.location.reload(); // refresh si header u update gareeyo
  };

  return (
    <header className="w-full bg-white shadow-md px-6 md:px-48 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-yellow-600 cursor-pointer">
          Moto<span className="text-gray-800">Go</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium  text-gray-600 ">
        <Link to="/"><li className='hover:text-yellow-600 transition'>Home</li></Link> 
        <Link to="/About"><li className='hover:text-yellow-600 transition'>About</li></Link> 
        <Link to="/Shop"><li className='hover:text-yellow-600 transition'>Shop</li></Link>
        <Link to="/Contact"><li className='hover:text-yellow-600 transition'>Contact</li></Link>
      </nav>

      {/* Right side buttons */}
      {getCustomer ? (
        <div className='flex gap-4 items-center'>
          <div className='bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full'>
          <h1 className='text-2xl font-semibold text-center'>
          {JSON.parse(getCustomer)?.data?.customer?.name?.[0]}
          </h1>
        </div>
          <button 
            onClick={handleLogout} 
            className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-yellow-600 transition border mt-2 border-yellow-500 px-3 py-1 rounded"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className='flex gap-4 items-center'>
          <Link to="/CustomerLogin">
            <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-yellow-600 transition">
              <FaUser /> Login
            </button>
          </Link>
          <Link to='/register'>
            <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-yellow-600 transition border border-yellow-500 px-3 py-1 rounded">
              Register Customer
            </button>
          </Link>
        </div>
      )}

      {/* Cart */}
      <div className="flex items-center gap-4">
        <Link to="/CartPage">
          <button className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded text-sm shadow hover:bg-yellow-600 transition">
            <FaShoppingCart /> Cart
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
