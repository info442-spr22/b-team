import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore';

// Old Firebase Database
// const app =  firebase.initializeApp ({
//     apiKey: "AIzaSyA0_ADomxgd_4sOAE4bgRCgWjt-PHEM6fM",
//     authDomain: "better-educators.firebaseapp.com",
//     databaseURL: "https://better-educators-default-rtdb.firebaseio.com",
//     projectId: "better-educators",
//     storageBucket: "better-educators.appspot.com",
//     messagingSenderId: "332176105768",
//     appId: "1:332176105768:web:fdff7d2553fcdf8f16f01d",
//     measurementId: "G-X1W8J9B7Z6"
//   })

// New Firebase Database
const app = firebase.initializeApp ({
  apiKey: "AIzaSyDzwgvtwzn-rcaa4-Jv54nKGVJUdVQ9OwU",
  authDomain: "better-educators-478b5.firebaseapp.com",
  databaseURL: "https://better-educators-478b5-default-rtdb.firebaseio.com",
  projectId: "better-educators-478b5",
  storageBucket: "better-educators-478b5.appspot.com",
  messagingSenderId: "73572459467",
  appId: "1:73572459467:web:0c012bf96a8ac44d780c4e",
  measurementId: "G-KV9H2WEWF8"
});

export const auth = app.auth()
export const db = getFirestore(app)
export default app