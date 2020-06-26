import React from 'react';

import './search-result.styles.scss';

const SearchResult = ({ books }) => {
  const toggleDesc = () => {
    document.getElementById('desc-content').classList.toggle('hidden');
  };

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
                          onClick={toggleDesc}
                          class="bg-blue-800 mt-2 text-gray-200 rounded hover:bg-blue-400 px-4 py-3 text-sm focus:outline-none"
                          type="button"
                        >
                          View Description
                        </button>
                      </p>
                    </div>
                    <p id="desc-content" className="block hidden">
                      {book.volumeInfo.description}
                    </p>
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
