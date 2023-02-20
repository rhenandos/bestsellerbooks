import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg",
    title: "Spare",
    author: "Prince Harry The Duke of Sussex",
    id: 1,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
    <EventExamples/>
      {books.map((libro) => {
        return <Book {...libro} key={libro.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return <section>
    <form onSubmit={handleFormSubmission}>
      <h2>Typical Form</h2>
      <input type="text" name="mgalibro" onChange={handleFormInput} style={{margin: '1rem 0'}} />
    </form>
    <button onClick={handleButtonClick}>click me</button>
  </section>
}


const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
