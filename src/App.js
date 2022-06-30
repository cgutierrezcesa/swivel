import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/index';
import SWBC from './pages/indexSWBC';
import SigninPage from './pages/signin';
import Express from './pages/expressCheckout';



function App() {

  return (
    <Router>
      <Switch>
   

        <Route path='/' component={Home} exact />
        <Route path='/SWBC' component={SWBC} exact />

       <Route path='/signin' component={SigninPage} exact /> 
        <Route path='/express' component={Express} exact /> 


      </Switch>
    </Router>
  );
}

export default App; 
