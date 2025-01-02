import React from "react";

const BookPopup = ({ book, onClose }) => {
  const { volumeInfo } = book;
  const { title, authors, description, imageLinks } = volumeInfo;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Book Thumbnail */}
        <div className="flex justify-center mb-4">
          <img
            src={imageLinks?.thumbnail || "https://via.placeholder.com/128x200"}
            alt={title}
            className="w-40 h-60 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Book Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
          {title}
        </h2>

        {/* Authors */}
        <p className="text-lg text-gray-600 text-center italic mb-4">
          {authors?.join(", ") || "Unknown Author"}
        </p>

        {/* Book Description */}
        <div className="text-gray-700 text-sm overflow-auto max-h-40 mb-4 px-2">
          {description || "No description available for this book."}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            onClick={() => window.open(volumeInfo.infoLink, "_blank")}
          >
            More Details
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookPopup;
