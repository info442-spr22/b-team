import Home from './pages/home';
import Forum from './pages/forum';
import Splash from './pages/splash';
import Post from './pages/post';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="body">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/forum" element={<Forum />} />
            <Route exact path="/post" element={<Post />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
