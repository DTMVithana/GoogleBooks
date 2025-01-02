import React, { useState } from "react";
import axios from "axios";
import BookPopup from "./BookPopup";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchCache, setSearchCache] = useState({});
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    if (!apiKey) {
      console.error("API key is missing!");
      setError("API key is not defined. Please check your .env file.");
      return;
    }

    if (searchCache[query]) {
      setBooks(searchCache[query]);
      return;
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
      );
      const results = response.data.items || [];
      setBooks(results);
      setSearchCache({ ...searchCache, [query]: results });
      setError(null);
    } catch (err) {
      console.error("Error fetching books:", err);
      if (err.response?.status === 429) {
        setError("Rate limit exceeded. Please wait a moment and try again.");
      } else {
        setError("An error occurred while fetching books.");
      }
    }
  };

  return (
    <div className="book-list p-4">
      <h1 className="text-2xl font-bold mb-4">Google Books Search</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-md px-2 py-1 flex-1"
        />
        <button
          onClick={fetchBooks}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-card border rounded-md shadow-md p-4 cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedBook(book)}
          >
            <img
              src={
                book.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/128x200"
              }
              alt={book.volumeInfo.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-lg font-bold">{book.volumeInfo.title}</h3>
            <p className="text-sm text-gray-600">
              {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
            </p>
          </div>
        ))}
      </div>

      {/* Render Popup if a book is selected */}
      {selectedBook && (
        <BookPopup book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default BookList;
