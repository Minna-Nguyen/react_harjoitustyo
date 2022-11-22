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
        </div>
        <div className="right-box">
          <h3>Logos, icons, pictures etc.</h3>
          <p>
            Pictures are mine.
            <em>... will update about this matter later</em>
          </p>
          <p>
            I use
            <button id="mui-link" onClick={handleClick}>
              <strong> Mui React component library</strong>
            </button>
          </p>
        </div>
        <div>
          <p> the color theme is just temporary</p>
        </div>
      </div>
    </>
  );
}

export default About;
