import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BestSellersCategory = ({ match, location }) => {
  let theBestSellerBooks = location.state.books.map((book) => {
    return book;
  });

  console.log(theBestSellerBooks);

  function titleCase(string) {
      let sentence = string.toLowerCase().split(" ");
      for (let i = 0; i < sentence.length; i++) {
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
      return sentence.join(" ");
  }

  return (
    <div className="bestsellers-category">
      <h1 className="text-center text-3xl cursive-font mt-2">
        Bestsellers for:
        <span className="text-blue-700 font-bold"> {location.state.title}</span>
      </h1>
      {theBestSellerBooks !== undefined &&
        theBestSellerBooks !== null &&
        theBestSellerBooks.map((book, index) => {
          return (
            <div key={index} className="inline-flex justify-center px-2 mr-4 ml-4 mt-4">
              <div className="flex-1 wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
                <div className="bg-gray-100">
                  <LazyLoadImage
                    effect="blur"
                    className="md:h-56 lg:h-64 block w-full h-auto m-4"
                    src={book.book_image}
                    alt={book.title}
                  />
                </div>
                <div className="p-3 space-y-3">
                  <h3 className="text-blue-800 text-center font-semibold text-md">
                    {titleCase(`${book.title}`)} by {book.author}
                  </h3>
                </div>
                <button className="bg-blue-800 w-full flex justify-center py-2 text-blue-100 font-semibold transition duration-300 hover:bg-blue-500 mt-4">
                  View Book
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BestSellersCategory;
