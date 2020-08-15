import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/app-logo-white.png';

import './header.styles.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        document.getElementById("nav-content").classList.toggle("hidden");
    }

    render() {
        return (
            <div className="header">
                <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6 w-full z-10 top-0 sm:px-6 py-1 px-2 shadow-xl">
                    <div className="flex items-center">
                        <Link className="text-white no-underline hover:text-white hover:no-underline" to="/">
                            <span className="text-2xl pl-2"><img className='logo' src={Logo} alt='logo' /> </span>
                        </Link>
                    </div>
            
                    <div className="block lg:hidden">
                        <button onClick={this.toggleNav} id="nav-toggle" className="flex items-center px-3 py-2 border mt-8 mr-6 rounded text-white border-white hover:text-blue-400 hover:border-blue-400">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
            
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-8" id="nav-content">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <Link className="inline-block py-2 px-4 text-blue-100 hover:text-blue-200 no-underline" to="/">Home</Link>
                            </li>
                            <li className="mr-3">
                                <Link className="inline-block text-blue-100 hover:text-blue-200 no-underline py-2 px-4" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>  
           </div>
        );
    }
}
 

export default Header;
