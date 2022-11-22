import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import lamb from "./lamb.jpg";
import Home from "./Home";
import About from "./About";
import Homework from "./Homework";
import HouseChores from "./HouseChores";
import OtherTasks from "./OtherTasks";

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3010/homework").then((res) => res.json());
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <nav>
              <a href="/">
                <img src={lamb} alt="logo-lamb"></img>
              </a>
              <div className="nav-text">
                <h1>Väliaikainen otsikko</h1>
              </div>
              {/* <div className="ul-to-right"> */}
              <ul>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="about">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/homework">Homework tasks</Link>
                </li>
                <li className="nav-item">
                  <Link to="house_chores">House tasks</Link>
                </li>
                <li className="nav-item">
                  <Link to="other_tasks">Other tasks</Link>
                </li>
              </ul>
              {/* </div> */}
            </nav>
            {/* under BrowserRouter we link to "" path here under route we assign
          the path and what content  */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/homework" element={<Homework />} />
              <Route path="/house_chores" element={<HouseChores />} />
              <Route path="/other_tasks" element={<OtherTasks />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
      // clean way to write URL or in other words link site to site
    );
  }
}
export default App;
