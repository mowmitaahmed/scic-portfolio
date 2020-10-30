import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SplitPane from 'react-split-pane';
import picture from './images/mowmitaAhmed.jpg'
import './App.css';
import Home from "./components/Home/Home";
import Topics from "./components/Topics";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

function App() {
  return (
     <Router>
       <SplitPane split="vertical" minSize={100} defaultSize={300}>
          <menu>
            <nav className="navbar navbar-dark">  
              <ul class="navbar-nav flex-column text-center">
                <li class="navbar-brand">
                  <NavLink to="/" className="nav-link"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={picture} alt="" /></NavLink>
                </li>
                <li className="navbar-item h5 text-white">
                  Mowmita Ahmed Chowdhury
                </li>
                {/* <li class="nav-item">
                  <NavLink to="/home" className="nav-link">Home</NavLink>
                </li> */}
                <li class="nav-item">
                  <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/blogs" className="nav-link">BLOGS</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/resume" className="nav-link">RESUME</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                </li>
              </ul>
            </nav>
          </menu>
          <div>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <Home></Home>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/resume">
              <Resume></Resume>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
          </div>
       </SplitPane>
     </Router>
  );
}

export default App;
