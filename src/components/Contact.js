import React from 'react'
import LinkedIn from '../assets/LinkedIn.svg'
import GitHub from '../assets/GitHubLogo.svg'
import StackExchange from '../assets/StackExchange.png'
import { Spring } from 'react-spring/renderprops'



import '../stylesheets/footer.css'


const Contact = () => (
    <div id="Contact">
        <div className="footer">
            <Spring
                config={{ tension: 280, friction: 200 }}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <h5 className="footerHead" style={props}>Contact Me</h5>}
            </Spring>
            <h1 className="headerFont Aliases contactSub">Here are just some of the ways to contact me</h1>
            <div>
                <a className="" rel="noopener noreferrer" href="https://github.com/ajv21990/my_portfolio" target="_blank"><img alt="Git Hub" src={GitHub} height="100" /></a>
                <a className="pl-2" rel="noopener noreferrer" href="https://www.linkedin.com/in/anthony-j-villanueva/" target="_blank"><img alt="LinkedIn" src={LinkedIn} height="100" /></a>
                <a className="pl-2" rel="noopener noreferrer" href="https://stackexchange.com/users/16009122/ajvillan" target="_blank"><img alt="Stack Exchange" src={StackExchange} height="100" /></a>

            </div>

            <div className="mt-4">
                <p>Cell:832-795-2683 || Email: <a style={{ color: "black" }} href="mailto:ajv21990@gmail.com" data-rel="external">AJV21990@gmail.com</a></p>
            </div>

        </div>
    </div>
)

export default Contact