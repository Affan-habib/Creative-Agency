import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);

  }
  
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("signIn clicked");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var {displayName , email} = result.user;
        const signedInUser = {displayName, email}
        setLoggedInUser(signedInUser)

        history.replace(from)

      })
      .catch((error) => {
       console.log(error)
      });
  };


    return (
        
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                    <label htmlFor = "inputEmail">Email address</label>
                  </div>
    
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <label htmlFor ="inputPassword">Password</label>
                  </div>
    
                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor ="customCheck1">Remember password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  <hr className="my-4"/>
                  <button  onClick = {handleGoogleSignIn} className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    );
};

export default Login;