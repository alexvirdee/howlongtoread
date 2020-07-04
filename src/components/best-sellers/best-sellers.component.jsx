import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BestSellers = () => {
    const [bestSellers, setBestSellers] = useState({ lists: [] });
    let best_sellers_list = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=R51SdltKSZJqu3FX7kUc8l2AaGH0UcGD`;

    useEffect(() => {
        fetchBestSellersList();  
    }, [])

    const fetchBestSellersList = async () => {
        const result = await axios.get(`${best_sellers_list}`);

        console.log(result.data.results);
        

        setBestSellers(result.data.results)
    }

    return (
        <div className='best-sellers-list'>
            <h1 className='text-2xl'>New York Times Best Sellers List</h1>
            {bestSellers.lists !== undefined &&
             bestSellers.lists !== null &&
             bestSellers.lists.map((list, index) => {
                 return (
                     <div className="inline-block mx-1 my-2" key={index}>
                         <img src={list.list_image} />
                         <li>{list.list_name}</li>
                     </div>
                 )
             })

            }
        </div>
    )
}

export default BestSellers;