import React from 'react'

export const Navbar = () => {
  return (
    <div>
         <nav className="bg-green-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-white text-2xl font-bold">
              NapTol
            </a>
          </div>
          {/* Navigation Links */}
          <div className="flex">
            <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
              Home
            </a>
            <a href="/products" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
              Products
            </a>
            <a href="/cart" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
              Cart
            </a>
            
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
