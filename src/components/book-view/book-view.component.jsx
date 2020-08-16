import React from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BookView = ({ match, location }) => {
  let data = useLocation();
  console.log(data.state);

  return (
    <div className="book-view">
      <h1 className="text-center text-3xl cursive-font mt-2">
        <span className="text-blue-700 font-bold"> {data.state.title}</span>
      </h1>
      <LazyLoadImage
        className="book-img px-4 py-2 ml-24"
        effect="blur"
        alt="book"
        src={`http://books.google.com/books/content?id=${data.state.id}&printsec=frontcover&img=1&source=gbs_api`}
      />
    </div>
  );
};

export default BookView;
