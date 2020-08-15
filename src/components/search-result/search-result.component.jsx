import React from 'react';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './search-result.styles.scss';
import BestSellers from '../best-sellers/best-sellers.component';

const SearchResult = ({ books, toggleDesc }) => {

  return (
    <div className="search-result mb-6">
      {books.items !== undefined &&
        books.items !== null ?
        books.items.map((book, index) => {
          return (
            <div key={index} className="book-info mb-2">
              <li className="ml-4">
                <div className="flex">
                  <Link to={{
                    pathname: `/book/${book.id}`,
                    state: { id: `${book.id}`, description: `${book.volumeInfo.description}`}
                  }}>
                  <LazyLoadImage
                    className="book-img px-4 py-2"
                    effect="blur"
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                 </Link>
                  <div className="flex-1">
                    <h3 className="text-2xl">{book.volumeInfo.title}</h3>
                    <div>
                      <div className="flex">
                      <button className="bg-green-400 mt-2 text-green-100 rounded hover:bg-green-400 px-4 py-3 text-sm focus:outline-none mr-2 pointer-events-none">
                       { ((book.volumeInfo.pageCount * 300) / 250 / 60).toFixed(2) } Hours
                       </button>

                        <button
                          onClick={() => toggleDesc(book.id)}
                          className="bg-blue-800 mt-2 text-blue-100 rounded hover:bg-blue-400 px-4 py-3 text-sm focus:outline-none"
                          type="button"
                        >
                          View Description
                        </button>
                      </div>
                      {book.isDescVisible !== undefined &&
                      book.isDescVisible !== null &&
                      book.isDescVisible === true &&
                      book.isDescVisible &&
                           <div
                           className="block border px-4 py-3 my-2 text-blue-700 desc-content mt-2"
                         >
                           <p>{book.volumeInfo.description == null ? <span>No Description available for {book.volumeInfo.title}.</span> : <span>{book.volumeInfo.description}</span>}</p>
                         </div>
                      }
                    </div>
                  </div>
                </div>
                <hr />
              </li>
            </div>
          );
        }) : <BestSellers />}
    </div>
  );
};

export default SearchResult;
