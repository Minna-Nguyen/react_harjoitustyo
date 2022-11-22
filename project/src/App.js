import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import lamb from "./lamb.jpg";
import Home from "./Home";
import About from "./About";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

class App extends React.Component {
  render() {
    return (
      // clean way to write URL or in other words link site to site
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
                <Link to="/pageone">Page ONE</Link>
              </li>
              <li className="nav-item">
                <Link to="pagetwo">Page TWO</Link>
              </li>
              <li className="nav-item">
                <Link to="pagethree">Page THREE</Link>
              </li>
            </ul>
            {/* </div> */}
          </nav>
          {/* under BrowserRouter we link to "" path here under route we assign
          the path and what content  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pageone" element={<PageOne />} />
            <Route path="/pagetwo" element={<PageTwo />} />
            <Route path="/pagethree" element={<PageThree />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
