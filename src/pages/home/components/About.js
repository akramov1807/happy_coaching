import React from 'react'
import vektorImg from '../../../images/home_aboutVector.svg'
import listImg1 from '../../../images/hame_aboutFrame1.svg'
import listImg2 from '../../../images/hame_aboutFrame2.svg'
import listImg3 from '../../../images/hame_aboutFrame3.svg'

export default function About() {
    return (
        <div className='home_about'>
            <div className='home-about_wrapper'>
                <div className='home-about_title-wrapper'>
                    <img className='home-about_pic' src={vektorImg} alt='Vektor' />
                    <h2 className='home-about_title'>I can help you in these particular areas.</h2>
                </div>
                <div className='home-about_deck-wrapper'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
            <ul className='home-about_list'>
                <li className='home-about_list-item'>
                    <img src={listImg1} alt='...' />
                    <h3>1:1 Coaching</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                </li>
                <li className='home-about_list-item'>
                    <img src={listImg2} alt='...' />
                    <h3>Consultation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                </li>
                <li className='home-about_list-item'>
                    <img src={listImg3} alt='...' />
                    <h3>Group Coaching Sessions</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                </li>
            </ul>
        </div>
    )
}
