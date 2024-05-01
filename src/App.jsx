import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import bookLogo from "./assets/books.png";
import BookList from "./components/Books.jsx";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login.jsx";
import Navigations from "./components/Navigations.jsx";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
        <Navigations />
      </h1>
      <Link to="/"> Home </Link>
      <Link to="/register"> Register </Link>
      <Link to="/account"> Account </Link>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/" element={<BookList />} />
        <Route path="/books/:bookid" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
