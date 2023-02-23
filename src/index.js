import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {books} from './books';
import Book from './Book'; 


const BookList = () => {
  return (
    <>
    <h1>Best Selling Books</h1>
    <section className="booklist">
      {books.map((libro, bilang) => {
        return <Book {...libro} key={libro.id} bilang={bilang} />;
      })}
    </section>
    </>
  );
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
