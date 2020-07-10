import React from 'react';

import BookView from '../../components/book-view/book-view.component';

const BookPage = ({ match, location, ...props }) => (
    <div className="bookpage">
        <BookView match={match} location={location} {...props} />
    </div>
)

export default BookPage;