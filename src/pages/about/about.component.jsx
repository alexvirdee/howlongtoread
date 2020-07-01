import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import AboutImg from '../../assets/images/about-img.jpg';
import BookStack from '../../assets/images/books-removebg.png';

import './about.styles.scss';

const About = () => (
  <div className="about px-4">
    <div className="pt-1">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Alex Virdee | Full Stack Developer
          </h1>
          <p class="leading-normal text-2xl mb-8">
            {' '}
            I'm always looking up new and interesting books so I thought it would
            be a good idea to build out this website for users to quickly
            figure how much time it will take them to read a book.
          </p>

          <Link to='/' class="mx-auto lg:mx-0 hover:bg-blue-400 bg-blue-800 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            Home
          </Link>
        </div>

        <div class="w-full md:w-3/5 py-1 text-center">
          <img class="w-full md:w-4/5 z-50 lg:ml-8" src={BookStack} />
        </div>
      </div>
    </div>
  </div>
);

export default About;
