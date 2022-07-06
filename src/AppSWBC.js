import React from 'react'
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Contact from './SWBC/routes/Contact';
import Home from './SWBC/routes/Home'
import Careers from './SWBC/routes/Pricing'
import Services from './SWBC/routes/Training';
import './SWBC/index.css';

function AppSWBC() {
  return (
    <>
      <Router>
        <Switch>

        <Route path='/' component={Home} exact />
        <Route path='/careers' component={Careers} exact />
        <Route path='/services' component={Services} exact />
        <Route path='/contact' component={Contact} exact />

        </Switch>
      </Router>
    </>
  );
}

export default AppSWBC;
