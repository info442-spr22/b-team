import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import App from '../App';
import '../login.css';

function Login({ setIsAuth }) {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/home');
        });
    }

    return (
        <div className="SigninPage">
            <p>Sign in with Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
export default Login;