import React from 'react'
import './Footer.css';
import { CgFacebook } from 'react-icons/cg';
import { GrLinkedinOption } from 'react-icons/gr'
import { FiGithub } from "react-icons/fi";
import { ImWhatsapp } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div>  <CgFacebook /></div>
            <div> <GrLinkedinOption /></div>
            <div>   <FiGithub /></div>
            <div> <ImWhatsapp /></div>

            <span className="name">Zule Huma</span>

        </div>
    )
}

export default Footer
