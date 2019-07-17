import React from 'react'
import '../stylesheets/landingHeader.css'
import ProfilePic from '../assets/profile.jpg'
import { Spring } from 'react-spring/renderprops'



const AboutMe = () => (
    <div id="AboutMe">
        <div className=" mt-4">
            <Spring
                config={{ tension: 280, friction: 200 }}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <h5 className="headerFont" style={props}>Who Am I?</h5>}
            </Spring>
            <p className="aboutMeBody col-md-6 offset-md-3">
                I'm fairly new to the tech industry. I didn't even know I wanted to go into this field till after my first college attempt where I majored in sports administration hoping to someday land a front office gig with a sports team in an analytical capacity. One day for fun, I decided to
                do a course on C that was on ItunesU. My first program I wrote was a 99 monkeys jumping on the bed loop and I thought it was the coolest thing ever. From then on I was hooked and took some classes at Cypress College to try and get a CS degree. I was relieved I made the right decision because I loved every minute of the highs and lows of programming.
                Then I had to take a break from my studies after a couple years because my wife had decided she wanted to pursue the idea of starting a floral business. I went to work full time at Disneyland and while working I would learn on the side via Codecademy and books I had on C++ and Java that I used in college. I worked at Disneyland at an espresso cart for a long
                time making magical moments with every espresso drink I made. I loved bringing joy to the early risers who would come into the park but I always had my dream of one day being a developer. One day I got into contact with my current lead through a friend and decided it was my time to pursue my career wish. I was given a test on HTML, CSS, Bootstrap, and AJAX to see if I could contribute to the project and I passed.
                So with my wife’s blessing I decided to pursue my dream opportunity and started working as a Full Stack Developer. I had a lot to learn on the job. I had no prior experience to React, ASP.NET, and MSSQL. I had to learn quickly and so I did making it my goal to learn and get better every day. I feel like I’m an excellent developer who would be an asset to any team that I’m on because of my prior experience with customer
                service and my current experience as a Full Stack Developer.
            </p>
            <div className="row col-md-8 offset-md-2 pictures">
                <div>
                    <img height="300" alt="profile pic" src={ProfilePic} />
                    <p className="headerFont Aliases picSub">My Sweet Mug</p>
                </div>
                <div className="pl-1">
                    <a href="https://www.instagram.com/lillyspaghetti/" rel="noopener noreferrer" target="_blank"><img height="300" alt="Lilly" src="https://scontent-sjc3-1.cdninstagram.com/vp/513e030c742b4eab4cb68e4bfbdfe44e/5D7D108D/t51.2885-15/sh0.08/e35/p640x640/53789547_267755970796505_9189963082728945323_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com" /></a>
                    <p className="headerFont Aliases picSub">My Sweet Princess</p>
                </div>
                <div className="pl-1">
                    <img height="300" alt="family" src="https://scontent-sjc3-1.cdninstagram.com/vp/80db83d714f52f87bba8382d663ea869/5D854A55/t51.2885-15/sh0.08/e35/s640x640/53243922_185901775714818_4391020810047012730_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com" />
                    <p className="headerFont Aliases picSub">My Sweet Family</p>
                </div>
            </div>
            <h1 className="headerFont mt-4">My Skills</h1>
            <div className="row mt-4 col-md-6 offset-md-3">
                <div className="col-md-3">
                    <h1 className="headerFont listHeaderFont">Front End</h1>
                    <ul className="listFont">
                        <li>React</li>
                        <li>Redux</li>
                        <li>JavaScript</li>
                        <li>Html5</li>
                        <li>Css</li>
                        <li>Bootstrap</li>
                        <li>TypeScript</li>
                        <li>JQuery</li>
                        <li>AJAX</li>
                        <li>XML</li>
                        <li>Node JS</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h1 className="headerFont listHeaderFont">Middle Tier</h1>
                    <ul className="listFont">
                        <li>ASP.NET</li>
                        <li>C#</li>
                        <li>WEB API</li>
                        <li>ADO.NET</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h1 className="headerFont listHeaderFont">Back End</h1>
                    <ul className="listFont">
                        <li>MSSQL</li>
                        <li>T-SQL</li>
                        <li>SQL Server</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h1 className="headerFont listHeaderFont">Other Skills</h1>
                    <ul className="listFont">
                        <li>TFS</li>
                        <li>Agile/Scrum</li>
                        <li>Git</li>
                        <li>Visual Studio</li>
                        <li>VS Code</li>
                        <li>AutoCad</li>
                        <li>Third Party Api Integrations</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
)

export default AboutMe