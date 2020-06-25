import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';

import Header from './components/header/header.component';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Header />
           <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
           </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
