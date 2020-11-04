import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";
import "./Project.css";
import Flash from 'react-reveal/Flash'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'
import RubberBand from 'react-reveal/RubberBand';


const Project = ({ num, img, discription, title, git, url }) => {
    return (
        <>
            <div className="project_container">
                <Flash>
                    <h1> {num}</h1>
                    <h1> {title}</h1>
                </Flash>



                <Slide left> <div className="project__img">

                    <Slide right><img src={img} alt="project"></img></Slide>
                </div>
                </Slide>


                <div className="discription">
                    <Fade right >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem l.audistinctio ipsa odit iusto tempora. Vel animi totam incidunt quasi</p>

                        <RubberBand>
                            <div>
                                <span ><FaGithub className="always" /> {git}</span>

                                <span><MdOpenInBrowser className="always" />{url}</span>
                            </div>
                        </RubberBand>
                    </Fade>

                </div>
            </div>

        </>
    );
};

export default Project;
