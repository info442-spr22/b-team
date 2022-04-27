import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import App from '../App';


const SignIn = () => {

    const SignInWithFirebase = () => {
        const provider = new GoogleAuthProvider();
        const navigate = useNavigate();
        signInWithPopup(auth, provider)
        .then((userInfo) => {
            console.log(userInfo);

        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <button onClick={SignInWithFirebase}>Sign in with Google</button>
    )
}
export default SignIn;