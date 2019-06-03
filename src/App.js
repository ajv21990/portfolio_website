import React from 'react';
import LandingHeader from './components/LandingHeader'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { Spring, config } from 'react-spring/renderprops'


function App() {
  return (
    <div className="App">
      <Spring
        config={{ tension: 120, friction: 25 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => <div style={props}> <LandingHeader /></div>}
      </Spring>
      <Spring
        config={{ tension: 200, friction: 220, delay: 350 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => <div style={props}><AboutMe /> <Portfolio /><Contact /></div>}
      </Spring>


    </div>
  );
}

export default App;
