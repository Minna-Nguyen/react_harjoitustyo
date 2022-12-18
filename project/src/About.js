import React from "react";
function About(props) {
  const handleClick = () => {
    window.open("https://mui.com");
  };
  return (
    <>
      <div className="container">
        <div className="left-box">
          <h1>About</h1>
          <p>This is a react project done by a complete beginner</p>
          <h3>By whom?</h3>
          <p>
            Well by me, <strong>Minna Nguyen</strong>
          </p>
          <h3>Project uses some libraries...</h3>
          <p>This project uses BrowserRouter, so npm install it!</p>
          <p>
            <em>npm install react-router-dom</em>
          </p>
        </div>
        <div className="right-box">
          <h3>Running the json server</h3>
          <p>
            This project uses json server. Make sure 'db.json' is at root level!
          </p>
          <p>Run the server ... </p>
          <p>
            <em>npx json-server -H localhost -p 3010 -w ./db.json</em>
          </p>
          <h3>Logos, icons, pictures etc.</h3>
          <p>
            The icon logo is drawn by me. This project mainly uses free
            libraries such as MUI
          </p>
          <p>
            I use
            <button id="mui-link" onClick={handleClick}>
              <strong> Mui React component library</strong>
            </button>
            Install it to see the icons and other materials:
          </p>
          <em>npm install @mui/material @emotion/react @emotion/styled</em>
        </div>
        <div>
          <strong>Additional info...</strong>
          <p>
            Only home page has all the functionalities. Other pages don't have
            anything done yet. I mainly focused on getting some basic
            functionalities done. Main coding is done in Home.js file.
            Additional components are for the Home.js.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
