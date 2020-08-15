import React from 'react';

const BestSellersCategory = ({ match, location }) => {
//   console.log(location);

  let theBestSellerBooks = location.state.books.map((book) => {
        return book;
  });

  console.log(theBestSellerBooks);

  return (
    <div className="bestsellers-category">
      <h1 className="text-center text-3xl cursive-font mt-2">
        Bestsellers for:
        <span className="text-blue-700 font-bold"> {location.state.title}</span>
      </h1>
      <div className="books-container flex">
        <div>
  {
      theBestSellerBooks !== undefined &&
      theBestSellerBooks !== null &&
      theBestSellerBooks.map((book, index) => {
          return (
          <p>{book.author}</p>
          )
      })
  }
        </div>
      </div>
    </div>
  );
};

export default BestSellersCategory;
