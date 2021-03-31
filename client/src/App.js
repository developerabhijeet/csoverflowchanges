import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import './App.css';
import Footer from './components/layout/Footer';
import Signup from './components/auth/Signup';
import Post from './components/post/Post';
import Profile from './components/auth/Profile';
import { UserContext } from './UserContext';
import ForallNavbar from './components/layout/ForallNavbar';
import View from './components/home/View';
import Search from './components/home/Search';
import ViewUser from './components/auth/ViewUser';
import EditProfile from './components/home/EditProfile';
import Reset from './components/auth/Reset';
import NewPassword from './components/auth/NewPassword';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await fetch('http://localhost:4000/app/verifyuser', {
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json()
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
    verifyUser()
  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <ForallNavbar users={user}/>
        <Switch>
          <Route exact path="/" render={() => (user ? (<Home />) : (<Redirect to="/" />))} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/resetpassword" component={Reset} />
          <Route exact path="/post" render={() => (user ? (<Post user={user} />) : (<Redirect to="/" />))} />
          <Route path="/profile/:id" component={Profile} />
          <Route exact path="/post/:id" render={() => (user ? (<View user={user} />) : (<Redirect to="/" />))} />
          <Route exact path="/user/:id" component={ViewUser} />
          <Route exact path="/editprofile/:id" render={() => (user ? (<EditProfile user={user} />) : (<Redirect to="/" />))} />
          <Route exact path="/newpassword/:token" component={NewPassword}/>

          <Route exact path="/search" component={Search} />
        </Switch>
      </UserContext.Provider>
      <Footer />
    </div>

  );
}

export default App;
