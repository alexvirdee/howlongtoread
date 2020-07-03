import React from 'react';

import './homepage.styles.scss';

import SearchBar from '../../components/search-bar/search-bar.component';


const HomePage = () => (
    <div className='homepage'>
        <div className='search-books'>
            <SearchBar />
        </div>
    </div>
)

export default HomePage;