import { React } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import { ForallNavbar } from './components/layout/ForallNavbar';
import './App.css';
function App() {
  return (

      <Router>
    <div className="App">
       
    <ForallNavbar/>
      
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      
     </div>
     </Router>
    
  );
}

export default App;
