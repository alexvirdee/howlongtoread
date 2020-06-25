import React, { Fragment } from 'react';

import './search-result.styles.scss';

const SearchResult = ({ books }) => {
  return (
    <div className="search-result mb-6">
      {books.items !== undefined &&
        books.items !== null &&
        books.items.map((book, index) => {
          return (
            <div className="book-info mb-2">
              <li className="ml-4" key={index}>
                <div className='flex'>
                  <img
                    className="book-img px-4 py-2" 
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl">{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.description}</p>
                  </div>
                </div>
                <hr />
              </li>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResult;
