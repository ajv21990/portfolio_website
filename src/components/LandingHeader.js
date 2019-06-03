import React from 'react'
import '../stylesheets/landingHeader.css'
import { Spring } from 'react-spring/renderprops'

const LHead = () => (
    <div className="header">
        {/* Not ready for deployment yet becasue of responsive issue */}
        {/* <div className="row">
            <div className="row col-md-2 offset-md-10 headerFont linkFont">
                <a href="#AboutMe" style={{ color: "#01B3BA" }}>About</a>
                <a className="pl-2" href="#Portfolio" style={{ color: "#01B3BA" }}>Portfolio</a>
                <a className="pl-2" href="#Contact" style={{ color: "#01B3BA" }}>Contact</a>
                <a className="pl-2" href=".header" style={{ color: "#01B3BA" }}>Top</a>

            </div>
        </div> */}

        <div className="col-md-6 offset-md-3 title">
            <Spring
                config={{ tension: 280, friction: 200, delay: 1275 }}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <h5 className="headerFont" style={props}>Anthony Villanueva</h5>}
            </Spring>
            <h1 className="headerFont Aliases">Full Stack Developer, Jedi Coder & Tech Apprentice</h1>
            <p className="bodyFont">A hardworking and quick learning Full Stack Developer. Interests include coding, sports, music, learning about new technology, and working on web projects on the side.</p>
        </div>
    </div>
)
export default LHead