import React from 'react';

const BookView = ({ match, location }) => {
    return (
        <div className='book-view'>
            <h1>Individual book page for <code>{JSON.stringify(match, null, 2)}</code></h1>
            </div>
    )
}

export default BookView;