import React from "react";

function Footer() {
  return (
    <footer className="border-t-2 py-14 px-40 h-96 shadow-md z-10 flex justify-content-center items-center">
      <div className="px-4">
        <h1 className="text-5xl font-semibold font-inter">aBit</h1>
        <p className="text-lg py-2 font-serif">
          Changing The Way In Which <br />
          Creators And Fans Interact.
        </p>
      </div>
      <div className="flex items-center ml-auto gap-6">
        <div className="border-l-2 border-gray-400 h-24"></div>
        <nav className="flex flex-col gap-4 text-sm font-bold font-inter">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Are you a Creator?
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
