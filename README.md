

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    img: "./images/book-1.jpg",
    title: "Stone Maidens",
    author: "Lloyd Devereux Richards",
    id: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 2,
  },
];

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples/>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  }
  const handleButtonClick = () => {
    alert('handle button click');
  }
  return <section>
    <form>
      <h2>typical form</h2>
      <input type="text" name="example" onChange={handleFormInput} style={{margin: '1rem 0'}} />
    </form>
    <button onClick={handleButtonClick}>click me</button>
  </section>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);






https://www.amazon.com/gp/bestsellers/2023/books/ref=zg_bs_tab_t_bsar/ref=zg_bs_tab_t_bsar