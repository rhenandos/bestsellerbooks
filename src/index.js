import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const img = 'https://m.media-amazon.com/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg';
const title = 'Spare';
const author = 'Prince Harry The Duke of Sussex';



const BookList = () => {
  return <section>
    <Book/>
    <Book/>
  </section>
};


const Book = () => {
  return <article>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>
};







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);
