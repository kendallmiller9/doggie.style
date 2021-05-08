import React, { useCallback, useContext} from "react";
import { withRouter, Redirect} from "react-router";
//Firebase Authentication: 15 points
import data from "./Firebase.js";
import { AuthContext } from "./Authentication.js";
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from "@material-ui/core";
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Login.css';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await data
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/homepage");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h1 class = 'login'>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button class='submitlogin' type="submit">Submit</button>
        <h2 class='noaccount'>Don't have an account? Click 
          <Link to='/signup'>
              <IconButton className = "addbutton">
                <AddIcon/>
              </IconButton>
            </Link>
            to create one!
        </h2>
      </form>
    </div>
  );
};

export default withRouter(Login);