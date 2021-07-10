import React from "react";
import "./Login.css";

import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state , dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message); 
      });
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://jurby.sch.im/site/uploads/blog/16/image/1200px_Microsoft_Office_Teams_2018_present_svg.png'
          alt='Microsoft Teams'
        />
      </div>
        <Button onClick={signIn}>Log in with Google</Button>
    </div>
  );
}
export default Login;
