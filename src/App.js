import React, { Component } from 'react';
import './App.css';
import Top from './Top';
import DogCards from './DogCards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DOTD from './DOTD.js'
import Login from './Login.js';
import SignUp from './Signup.js';
import { AuthProvider } from './Authentication';
import SnakeGame from './SnakeGame.js'
import Weather from './Weather.js'
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function App() {

  return (
    <AuthProvider>
    <div class="app">
      <h1 class = "app">Doggie-Style: Swipe to find your next playdate!</h1>
      <script src="/__/firebase/5.8.4/firebase-app.js"></script>
      <script src="/__/firebase/5.8.4/firebase-auth.js"></script>
      <script src="/__/firebase/5.8.4/firebase-database.js"></script>
      <script src="/__/firebase/5.8.4/firebase-messaging.js"></script>
      <script src="/__/firebase/5.8.4/firebase-functions.js"></script>
      
      <Router>
        <Switch>
        <Route path="/homepage">
            <Top/>
            <DogCards />
          </Route>

          <Route path="/signup">
            <SignUp/>
          </Route>

          <Route path ="/randomdoggenerator">
            <Top/>
            <DOTD/>
          </Route>

          <Route path ="/weather">
            <Top/>
            <Weather/>
          </Route>
          <Route path ="/snakegame">
            <Top/>
            <SnakeGame/>
          </Route>

          <Route path ="/">
            <Login />
          </Route>

        </Switch>
      </Router>

    </div>
    </AuthProvider>
  );
}

export default App;
