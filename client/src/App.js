import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import { ForallNavbar } from './components/layout/ForallNavbar';
import './App.css';
import Footer from './components/layout/Footer';
import Signup from './components/auth/Signup';
import Post from './components/post/Post';
import Profile from './components/auth/Profile';
function App() {
  return (
    <div className="App">
      <ForallNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/post" component={Post} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
