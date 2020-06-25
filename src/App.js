import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component';


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <BrowserRouter>
           <Switch>
            <Route exact path='/' component={HomePage} />
           </Switch>
           </BrowserRouter>
      </div>
    )
  }
}

export default App;
