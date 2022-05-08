import Home from './pages/home';
import Forum from './pages/forum';
import Post from './pages/post';
import Login from './pages/login';
import { auth } from './firebase/firebase';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { signOut, signUserOut } from 'firebase/auth';


function App() {
  const [isAuth, setIsAuth] = useState(false)

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
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/home">Home </Link>
            <Link to="/post">Create Post </Link>
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
      </nav>
      <div className="App">
        <div className="body">
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth}/>} />
            <Route path="/home" element={<Home isAuth={isAuth}/>} />
            <Route path="/post" element={<Post isAuth={isAuth} />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
