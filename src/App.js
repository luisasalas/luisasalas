import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contacts' component={Contacts} />
    </>
  );
}

export default App;
