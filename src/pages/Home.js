import React from "react";
import booksImage from "../assets/images.jpg";

const Home = () => {
  return (
    <div className="home-page flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to Book Search App
        </h1>
        <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
          Discover and explore a world of books using the Google Books API.
          Search for your favorite topics, authors, or genres and find your next
          read.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img
          src={booksImage}
          alt="Books"
          className="rounded-lg shadow-lg w-80 md:w-96"
        />
      </div>

      {/* Call-to-Action */}
      <div>
        <a
          href="/books"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Start Exploring
        </a>
      </div>
    </div>
  );
};

export default Home;
