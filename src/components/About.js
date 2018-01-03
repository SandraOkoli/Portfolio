import React from 'react';

const About = () => {
  return(
    <div className="container">
      <div className="about">
        <h1>Hi, My Name is Sandra Okoli,</h1>
        <h1>I am a Full Stack Web Developer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="center">
          <button className='view'>View Projects</button>
        </div>
        <ul className="logos">
          <li><img src="http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg"/></li>
          <li><img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"/></li>
          <li><img src="http://webcheerz.com/wp-content/uploads/2016/05/logo-light.svg"/></li>
          <li><img src="https://www.sevenmentor.com/wp-content/uploads/2016/10/angularjs.png"/></li>
          <li><img src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png"/></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
