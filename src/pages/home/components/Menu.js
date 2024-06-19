import React from 'react'
import Btn from '../../components/Btn'
import menuImg from '../../../images/home_menuimg.png'

export default function Menu() {
    return (
        <div className='home_menu'>
            <div className='home-menu_wrapper'>
                <div className='home-menu_text-wrapper'>
                    <p className='home-menu_text'>Proven strategies backed by science for success.</p>
                    <h1 className='home-menu_title'>Live life at the full potential</h1>
                    <p className='home-menu_deck'>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                    <Btn text='Get your free guide now' />
                </div>
                <img className='home-menu_img' src={menuImg} alt='Menu Img' />
            </div>
        </div>
    )
}