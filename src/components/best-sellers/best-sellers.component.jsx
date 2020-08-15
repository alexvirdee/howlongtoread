import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState({ lists: [] });

  let best_sellers_list = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=R51SdltKSZJqu3FX7kUc8l2AaGH0UcGD`;

  useEffect(() => {
    const fetchBestSellersList = async () => {
      const result = await axios.get(`${best_sellers_list}`);

      // console.log(result);
      // console.log(result.data.lists)
      
      setBestSellers(result.data.results);
    }

    fetchBestSellersList();
  }, [best_sellers_list]);

  return (
    <div className="best-sellers-list">
      <h1 className="text-4xl text-center mb-4 cursive-font">
        New York Times Best Sellers
      </h1>
      {bestSellers.lists !== undefined &&
        bestSellers.lists !== null &&
        bestSellers.lists.map((list, index) => {
          console.log(list);
          return (
            <div className="inline-flex justify-center mx-4 my-2" key={index}>
              <div className="flex-1">
                <article className="overflow-hidden rounded-lg shadow-lg">
                <Link to={{
                    pathname: `/bestsellers/${list.list_id}`,
                    state: { id: `${list.list_id}`}
                  }}>
                  <LazyLoadImage
                    effect="blur"
                    className="sm:h-48 md:h-56 lg:h-64 block w-full"
                    src={list.list_image}
                  />
                  </Link>
                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                         <h1 className="text-lg">
                        {list.list_name}
                         </h1>
                  </header>
                </article>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BestSellers;
