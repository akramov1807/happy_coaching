import React from 'react'
import stayImg1 from '../../../images/homestayimg1.png'
import stayImg2 from '../../../images/homestayimg2.png'
import stayImg3 from '../../../images/homestayimg3.png'
import Btn from '../../components/Btn'

export default function Stay() {
    return (
        <div className='home_stay'>
            <div className='home-stay_title-wrap'>
                <h2 className='home-stay_title'>Stay Motivated, read the weekly blog articles.</h2>
            </div>
            <ul className='home-stay_list'>
                <li className='home-stay_item'>
                    <img className='home-stay_img' src={stayImg1} alt='Stay Img' />
                    <div className='home-stay_wrap'>
                        <h3>Balancing your love and work life.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                </li>
                <li className='home-stay_item'>
                    <img className='home-stay_img' src={stayImg2} alt='Stay Img' />
                    <div className='home-stay_wrap'>
                        <h3>A short break from Social Media is important.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                </li>
                <li className='home-stay_item'>
                    <img className='home-stay_img' src={stayImg3} alt='Stay Img' />
                    <div className='home-stay_wrap'>
                        <h3>How to be 1% Better Every Day</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                </li>
            </ul>
            <div className='home-stay_btn'>
                <Btn text='Read more blogs' />
            </div>
        </div>
    )
}
