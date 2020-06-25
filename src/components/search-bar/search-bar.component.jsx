import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchResult from '../search-result/search-result.component';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({ items: [] });
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    // Ajax call to API via axios
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    // result
    console.log(result.data.items[0]);

    setBooks(result.data);
    
  };

  // Handle submit
  const onSubmitHandler = (e) => {
    // prevent browser from refreshing
    e.preventDefault();
    // call fetch books async function
    fetchBooks();
  };

  return (
    <div className="search-bar p-8">
      <div className="bg-white flex items-center rounded-full shadow-xl">
        <input
          className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Try 'The Hunt For Red October by Tom Clancy' "
          onChange={onInputChange}
          value={searchTerm}
        />
        <div className="p-4">
          <button
            onClick={onSubmitHandler}
            className="bg-blue-800 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className='result mt-8'>
      <ul>
         <SearchResult books={books} />
      </ul>
      </div>
    </div>
  );
};

export default SearchBar;
