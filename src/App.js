import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import BookList from "./components/BookList";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home Route */}
            <Route path="/books" element={<BookList />} />{" "}
            {/* Book Search Route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
