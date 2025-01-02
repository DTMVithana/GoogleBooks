import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition">
            Book Search App
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-gray-200 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                className="hover:underline hover:text-gray-200 transition"
              >
                Book Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
