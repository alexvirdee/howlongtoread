import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

    return (
  <div class="p-8">
    <div class="bg-white flex items-center rounded-full shadow-xl">
      <input
        class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
        id="search"
        type="text"
        placeholder="Search"
     />
        <div class="p-4">
          <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
    )
}

export default SearchBar;
