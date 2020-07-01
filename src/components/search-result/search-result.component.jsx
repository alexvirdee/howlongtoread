import React from 'react';

import './search-result.styles.scss';

const SearchResult = ({ books, toggleDesc }) => {

  return (
    <div className="search-result mb-6">
      {books.items !== undefined &&
        books.items !== null &&
        books.items.map((book, index) => {
          return (
            <div key={index} className="book-info mb-2">
              <li className="ml-4">
                <div className="flex">
                  <img
                    className="book-img px-4 py-2"
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl">{book.volumeInfo.title}</h3>
                    <div>
                      <p className="flex">
                        <button
                          onClick={() => toggleDesc(book.id)}
                          className="bg-blue-800 mt-2 text-gray-200 rounded hover:bg-blue-400 px-4 py-3 text-sm focus:outline-none"
                          type="button"
                        >
                          View Description
                        </button>
                      </p>
                      {book.isDescVisible &&
                           <div
                           className="block border px-4 py-3 my-2 text-gray-700 desc-content"
                         >
                           <p>{book.volumeInfo.description}</p>
                         </div>
                      }
                    </div>
                    <h3 className="text-xl text-blue-800 mt-2 p-2">
                      Average time to read:{' '}
                    </h3>
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
