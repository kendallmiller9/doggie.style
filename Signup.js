import React, { useCallback } from "react";
import { withRouter } from "react-router";
import data from "./Firebase";
import auth from './Firebase';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './Signup.css'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, breed, name, pic, age, style } = event.target.elements;
    try {
      await data.auth().createUserWithEmailAndPassword(email.value, password.value);
      const user = data.auth().currentUser;
      data.firestore().collection('dogs').doc(auth.getUid).set({
        breed: breed.value,
        name: name.value,
        url: pic.value,
        age: age.value,
        play: style.value,
        email: email.value
      })
      history.push("/homepage");
    } catch (error) {
      alert(error);
    }
    
  }, [history]);

  return (
    <div class='signupbox'>
      <h1 class="signupheader">Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          <input class="signupinput" name="email" type="email" placeholder="Email" />
        </label>
        <label>
          <input class="signupinput" name="password" type="password" placeholder="Password" />
        </label>
        <label>
          <input class="signupinput" name="name" type="name" placeholder="Dog's Name" />
        </label>
        <label>
          <input class="signupinput" name="age" type="age" placeholder="Dog's Age" />
        </label>
        <label>
          <input class="signupinput" name="breed" type="breed" placeholder="Dog's Breed" />
        </label>
        <label>
          <input class="signupinput" name="pic" type="pic" placeholder="URL for Picture" />
        </label>
        <label>
          <input class="signupinput" name='style' type="style" placeholder="Play Style" />
        </label>
        <h1>
          <button class="submitsignup" type="submit">Sign Up</button>
        </h1>
      </form>
      <h1 class='alreadyhaveaccount'>Already have an account? Click  
      <Link to='/'>
        <IconButton className='personicon'>
         <AccountBoxIcon/>
        </IconButton>
      </Link>
      to login!</h1>
    </div>
  );
};

export default withRouter(SignUp);