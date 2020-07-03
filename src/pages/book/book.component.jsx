import React from 'react';

import BookView from '../../components/book-view/book-view.component';

const BookPage = ({ match, location }) => (
    <div className="bookpage">
        hello
        <BookView match={match} location={location} />
    </div>
)

export default BookPage;