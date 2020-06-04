import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



class Footer extends Component {
    render() {
        return (
        <div className="container">
            <p> Build by Group 5 (Mike, Eric, Andre, and Ben) </p>
            <div className="row">
                <div className="col">
            <p>MIKE</p>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faGithub}/> </span> Add me on Github</a><br></br>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faLinkedinIn}/> </span> Connect with me on Linkedin</a>
                </div>
                <div className="col">
            <p>ERIC</p>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faGithub}/> </span> Add me on Github</a><br></br>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faLinkedinIn}/> </span> Connect with me on Linkedin</a>
                </div>
                <div className="col">
            <p>ANDRE</p>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faGithub}/> </span> Add me on Github</a><br></br>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faLinkedinIn}/> </span> Connect with me on Linkedin</a>
                </div>
                <div className="col">
            <p>BEN</p>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faGithub}/> </span> Add me on Github</a><br></br>
            <a id='github' href="#" target='_blank'> <span> <FontAwesomeIcon icon={faLinkedinIn}/> </span> Connect with me on Linkedin</a>
            </div>
            </div>
        </div>
        )
    }
}

export default Footer;