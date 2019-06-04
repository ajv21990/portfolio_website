import React from 'react'
import EleveightLogo from '../assets/EleveightLogo.png'
import RADLogo from '../assets/RadLogo.png'
import HRBLogo from '../assets/TempHRB.png'
import Slider from "react-slick";
import Elev1 from '../assets/Apply_Modal.png'
import Elev2 from '../assets/JobPostsPort.png'
import Elev3 from '../assets/JobsLandPort.png'
import Elev4 from '../assets/PostModalPort.png'
import RAD1 from '../assets/RADLogin.png'
import RAD2 from '../assets/RADHome.png'
import RAD3 from '../assets/ScooterMapRAD.png'
import HRB1 from '../assets/HomeRunBingoLand.png'
import HRB2 from '../assets/HRBingo2.png'
import HRB3 from '../assets/Bingo.png'
import { Spring } from 'react-spring/renderprops'


import '../stylesheets/landingHeader.css'

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEleveight: false,
            showRadiant: false,
            showHRB: false
        }
    }

    ShowEleveight = () => this.setState({ showEleveight: true, showRadiant: false, showHRB: false })

    ShowRAD = () => this.setState({ showRadiant: true, showEleveight: false, showHRB: false })

    ShowHRB = () => this.setState({ showHRB: true, showEleveight: false, showRadiant: false })




    render() {
        var settings = {
            dots: true,
            autoplay: true
        }
        return (
            <div id="Portfolio">
                <div className="header">
                    <div className="col-md-6 offset-md-3 title">
                        <Spring
                            config={{ tension: 280, friction: 200 }}
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}>
                            {props => <h5 id="txtScrollHere" className="headerFont" style={props}>My Work</h5>}
                        </Spring>
                        <h1 className="headerFont Aliases">Personal and Professional Projects</h1>
                        <p className="bodyFont">Below is a list of personal and professional projects that I have worked on as a Developer</p>
                    </div>
                    <div className="row">
                        <div className="col-md-5 offset-md-1">
                            <a href="#txtScrollHere"><img height="100" alt="Eleveight Logo" src={EleveightLogo} onClick={this.ShowEleveight} /></a>
                            <a href="#txtScrollHere"><img height="100" alt="Radiant Logo" src={RADLogo} onClick={this.ShowRAD} /></a>
                            <a href="#txtScrollHere"><img height="75" alt="HRB Logo" src={HRBLogo} onClick={this.ShowHRB} /></a>

                        </div>

                        {this.state.showEleveight ?
                            <div id="EleveightSlides" className="col-md-4 offset-md-1">
                                <div className="container">
                                    <Slider {...settings}>
                                        <div>
                                            <img height="300" alt="Job Post" src={Elev2} />
                                        </div>
                                        <div>
                                            <img height="300" alt="Enter Job Post" src={Elev4} />
                                        </div>
                                        <div>
                                            <img height="300" alt="Jobs Near User" src={Elev3} />
                                        </div>
                                        <div>
                                            <img height="300" alt="Apply To Job" src={Elev1} />
                                        </div>
                                    </Slider>
                                </div>
                                <br />
                                <p className="bodyFont">Eleveight is the current professional project that I'm working on. Eleveight is a platform that connects at-risk students to case managers to help them get jobs, scholarships, and any help to better
                                their lives. My role on this project is to create a feature that would have companies who use this platform create jobs for students and for said students to find these jobs and apply to them. I work the full stack on this project
                                using MSSQL for the backend and ASP.NET/C# for the middle tier. For our front end we use React, HTML, CSS, Bootstrap, Typescript and Redux. For more information on the specific components
                                I worked on for this project, visit my git hub at the bottom of <span><a href="#Contact">this page</a></span>.</p>
                            </div>
                            : ""}
                        {this.state.showRadiant ?
                            <div id="RADSlides" className="col-md-4 offset-md-1">
                                <div className="container">
                                    <Slider {...settings}>
                                        <div>
                                            <img height="300" alt="Radiant Login" src={RAD1} />
                                        </div>
                                        <div>
                                            <img height="300" alt="Radiant Home" src={RAD2} />
                                        </div>
                                        <div>
                                            <img height="300" alt="Scooter Map" src={RAD3} />
                                        </div>
                                    </Slider>
                                </div>
                                <br />
                                <p className="bodyFont">RADiant is a hackathon submission I did in a group of three for the AddiHacks hackathon. Radiant was our solution to a cleaner, greener transportation environment. In implementing our service we hoped to
                                reduce congestion as well strengthen a sense of community within Long Beach and the surrounding southern California areas. My role on this project was implementing an interface that allowed users to see the nearest ride options near them.
                                I implemented Google Maps using the React framework to show users the nearest scooter, bike, or car services within their specified distance. I was able to obtain the data about the services
                                from API's provided by the hackathon. I also was tasked with a login and registration page.</p>
                            </div>
                            : ""}
                        {this.state.showHRB ?
                            <div id="HRBSlides" className="col-md-4 offset-md-1">
                                <div className="container">
                                    <Slider {...settings}>
                                        <div>
                                            <img height="300" alt="Job Post" src={HRB1} />
                                        </div>
                                        <div>
                                            <img height="300" alt="Enter Job Post" src={HRB2} />
                                        </div>
                                        <div>
                                            <img height="300" alt="Jobs Near User" src={HRB3} />
                                        </div>
                                    </Slider>
                                </div>
                                <br />
                                <p className="bodyFont">Homerun Bingo is a BaseballHackDay project I worked on with fellow baseball enthusiasts.
                                We placed third on this project out of ten competing teams. HomeRunBingo allows anyone to play along every day of the MLB season
                                and fill out Bingo cards populated with the top Home Run hitters from across the league. When you have a player hit a Home Run, his square on your board is filled. My role in this project was figuring out a way to utilize the provided API's. I ended up using these API's to secure the previous season's homerun leaders and insert them into an array so that randomizing a user’s board would
                                choose batters from the array and place them in an arbitrary spot on the bingo board. </p>
                            </div>
                            : ""}

                    </div>

                </div>
            </div>
        )
    }

}

