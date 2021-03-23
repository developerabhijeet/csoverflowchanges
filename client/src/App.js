import { React,useState, useEffect } from 'react';
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
  const [user,setUser] = useState(null)
  useEffect(()=>{
    const verifyUser = async()=>{
      try{
        const res = await fetch('http://localhost:4000/app/verifyuser',{
            credentials: 'include',
            headers:{'Content-Type': 'application/json'}
          });
          const data = await res.json()
          setUser(data)
      }catch(error){
        console.log(error)
      }
    }
    verifyUser()
  },[])
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
