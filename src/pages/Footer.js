import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import '../css/footer.css'
import footerLogo from '../images/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { ImDribbble } from "react-icons/im";


export default function Footer() {
    const [link, setLink] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            handleLinkClick(1);
        } else if (location.pathname === '/services') {
            handleLinkClick(2);
        } else if (location.pathname === '/about') {
            handleLinkClick(3);
        } else if (location.pathname === '/extra') {
            handleLinkClick(4);
        } else if (location.pathname === '/free') {
            handleLinkClick(5);
        }
    }, [location.pathname]);

    const handleLinkClick = (num) => {
        setLink(num);
    };
    return (
        <div className='footer'>
            <div className='footer_top'>
                <div className='footer-top_wrapper'>
                    <div className='footer-top_deck-wrap'>
                        <h2>Get notified when I publish new articles</h2>
                        <p>Stay up to date with the latest news, announcements, and articles.</p>
                    </div>
                    <div className='footer-top_send-wrap'>
                        <input placeholder='Enter your email' type='email' />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className='footer_middle'>
                <div className='footer_logo-wrapper'>
                    <Link to={`/`}><img src={footerLogo} alt='Foooter Logo' /></Link>
                    <p>Design amazing digital experiences that create more happy in the world.</p>
                </div>
                <div className='footer_link-wrapper'>
                    <div className='footer_pages-wrapper'>
                        <p>Pages</p>
                        <Link className={`footer-pages_link ${link === 1 ? "footer_link-active" : ""}`} to={'/'}>Home</Link>
                        <Link className={`footer-pages_link ${link === 2 ? "footer_link-active" : ""}`} to={'/services'}>Services</Link>
                        <Link className={`footer-pages_link ${link === 3 ? "footer_link-active" : ""}`} to={'/about'}>About us</Link>
                        <Link className={`footer-pages_link ${link === 4 ? "footer_link-active" : ""}`} to={'/extra'}>Extra Sales/Landingpage</Link>
                        <Link className={`footer-pages_link ${link === 5 ? "footer_link-active" : ""}`} to={'/free'}>Free guide</Link>
                    </div>
                    <div className='footer_pages-wrapper'>
                        <p>Contact</p>
                        <Link className='footer-pages_link'>+123 456 789</Link>
                        <Link className='footer-pages_link'>hello@happydigital.nl</Link>
                        <Link className='footer-pages_link'>Instagram</Link>
                        <Link className='footer-pages_link'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <Link className='footer_made' target='_blank' to={'https://www.happydigital.nl/'}>Made with a by HappyDigital</Link>
                <div className='footer_icon-wrappwr'>
                    <Link><FaLinkedin className='footer_icon' /></Link>
                    <Link><FaFacebook className='footer_icon' /></Link>
                    <Link><ImDribbble className='footer_icon' /></Link>
                </div>
            </div>
        </div>
    )
}
