import React from 'react';

import BestSellersCategory from '../../components/best-sellers-category/best-sellers-category.component';

const BestSellersPage = ({ match, location, ...props }) => (
    <div className='best-sellers-page mb-32'>
        <BestSellersCategory match={match} location={location} {...props} />
    </div>
)

export default BestSellersPage;