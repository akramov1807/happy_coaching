import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css'
import Logo from '../images/Logo.png';
import Btn from './components/Btn';

export default function Navbar() {
    const [link, setLink] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            handleLinkClick(1);
        } else if (location.pathname === '/services') {
            handleLinkClick(2);
        } else if (location.pathname === '/team') {
            handleLinkClick(3);
        } else if (location.pathname === '/terms') {
            handleLinkClick(4);
        }
    }, [location.pathname]);

    const handleLinkClick = (num) => {
        setLink(num);
    };

    return (
        <div className='site_navbar'>
            <div className='navbar_wrapper'>
                <Link onClick={() => { handleLinkClick(1) }} to={`/`} className='site-logo'>
                    <img className='site_logo' src={Logo} alt='site logo' />
                </Link>
                <div className='navbar-links_wrap'>
                    <Link className={`navbar_link ${link === 1 ? "link_active" : ""}`} to={'/'}>Home</Link>
                    <Link className={`navbar_link ${link === 2 ? "link_active" : ""}`} to={'/services'}>Services</Link>
                    <Link className={`navbar_link ${link === 3 ? "link_active" : ""}`} to={'/team'}>About us</Link>
                    <Link className={`navbar_link ${link === 4 ? "link_active" : ""}`} to={'/terms'}>Extra Salespage</Link>
                    <Btn text='Get your free guide now' />
                </div>
            </div>
        </div>
    );
}
