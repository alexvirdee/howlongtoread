import React from 'react';

const BestSellersCategory = ({ match, location }) => {
    return (
        <div className='bestsellers-category'>
            Best Sellers Category for <code>{JSON.stringify(match, null, 2)}</code>
            
        </div>
    )
}

export default BestSellersCategory;