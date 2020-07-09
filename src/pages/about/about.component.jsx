import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import BookStack from '../../assets/images/books-removebg.png';

import './about.styles.scss';

const About = () => (
  <div className="about px-4">
    <div className="pt-1">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Alex Virdee | Full Stack Developer
          </h1>
          <p className="leading-normal text-2xl mb-8">
            {' '}
            I'm always looking up new and interesting books so I thought it would
            be a good idea to build out this website for users to quickly
            figure how much time it will take them to read the next one on their list.
          </p>
          <p className='italic text-sm'>“There is no friend as loyal as a book.”
― Ernest Hemingway</p>

          <Link to='/' className="mx-auto lg:mx-0 hover:bg-blue-400 bg-blue-800 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            Home
          </Link>
        </div>    

        <div className="w-full md:w-3/5 py-1 text-center">
          <LazyLoadImage className="w-full md:w-4/5 z-50 lg:ml-8" src={BookStack} effect="blur" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
