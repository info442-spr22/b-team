import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const app =  firebase.initializeApp ({
    apiKey: "AIzaSyA0_ADomxgd_4sOAE4bgRCgWjt-PHEM6fM",
    authDomain: "better-educators.firebaseapp.com",
    databaseURL: "https://better-educators-default-rtdb.firebaseio.com",
    projectId: "better-educators",
    storageBucket: "better-educators.appspot.com",
    messagingSenderId: "332176105768",
    appId: "1:332176105768:web:fdff7d2553fcdf8f16f01d",
    measurementId: "G-X1W8J9B7Z6"
  })
  
  export const auth = app.auth()
  export default app