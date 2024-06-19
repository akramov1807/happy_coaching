import React from 'react'
import '../../../css/services.css'
import servicesImg from '../../../images/servicesmenuImg.jpg'

export default function Menu() {
    return (
        <div className='services_menu'>
            <div className='services-menu_wrapper'>
                <div className='services-menu_deck-wrapper'>
                    <p className='services-menu_text'>I can help you in these patricular areas.</p>
                    <h1>I help people to discover their true potential</h1>
                    <p className='services-menu_deck'>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                </div>
                <img src={servicesImg} alt='Services Img' />
            </div>
        </div>
    )
}
