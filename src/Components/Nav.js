import './Nav.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    NavLink
} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className='nav__container'>

                <div className="nav__links">

                    <NavLink className="link" to="/"><div className='logo'><span>Zule</span><span>Huma</span></div></NavLink>
                    <div className='second__nav'>
                        <div className='nav__div courses__dropdown'><span>Projects</span>
                            <div className="courses__dropdownContent">
                                <h4>1</h4>
                                <h4>2</h4>
                                <h4>3</h4>
                                <h4>4</h4>
                                <h4>5</h4>
                                <h4>6</h4>
                            n<h4>7</h4>
                                <h4>8</h4>
                                <h4>9</h4>
                                <h4>10</h4>
                                <h4>11</h4>
                                <h4>12</h4>
                            </div>
                        </div>

                        <NavLink className="link" to="/about">  <div className='nav__div'><span>About</span></div></NavLink></div>


                </div></div>
            <div className='banner'>
                <div></div> </div>

        </>

    )
}

export default Nav;
