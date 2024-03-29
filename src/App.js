import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import BookPage from './pages/book/book.component';
import About from './pages/about/about.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import BestSellersPage from './pages/bestsellers/bestsellers.component';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Header />
           <Switch>   
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route path='/book/:bookId' component={BookPage} />
            <Route path='/bestsellers/:categoryId' component={BestSellersPage} />
           </Switch>
           <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
