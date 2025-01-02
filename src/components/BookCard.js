import React from "react";

const BookCard = ({ book, onClick }) => {
  const { volumeInfo } = book;
  const { title, authors, imageLinks } = volumeInfo;

  return (
    <div
      className="border rounded-md p-4 shadow-md cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <img
        src={imageLinks?.thumbnail || "https://via.placeholder.com/128x200"}
        alt={title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{authors?.join(", ")}</p>
    </div>
  );
};

export default BookCard;
