import Home from './pages/home';
import IndividualPost from './pages/individual';
import Post from './pages/post';
import Login from './pages/login';
import { auth } from './firebase/firebase';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { signOut, signUserOut, getAuth, onAuthStateChanged } from 'firebase/auth';


function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
    function cleanup() {
      unregisterAuthListener();
    }
    return cleanup;
  }, []);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    })
  }
  return (
    <Router>
      <nav>
        <a className='nav-name'>🦉BE🎓</a>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/home">Home</Link>
            <Link to="/post">Create Post</Link>
            <button className='logout-button' onClick={signUserOut}>Log out</button>
          </>
        )}
      </nav>
      <div className="App">
        <div className="body">
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth}/>} />
            <Route path="/home" element={<Home isAuth={isAuth}/>} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:postId" element={<IndividualPost isAuth={isAuth} />}/>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
