import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Common/Header';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Signup from './Components/auth/signup'
import UpdateProfile from './Components/Profile'
import PaymentOptions from './Components/PaymentOptions'
import Login from './Components/auth/login'
import Footer from './Components/Footer'


function App() {
  return (

    <React.Fragment>
    
      <Header/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/updateProfile" component={UpdateProfile} />
          <Route exact path="/paymentOptions" component={PaymentOptions} />
          <Route exact path="/login" component={Login} />
          <Redirect to={Home} />
     </Switch>
     <Footer/>
    </React.Fragment>
    
    
  );
}

export default App;
