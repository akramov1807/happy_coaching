import React from 'react'
import cardImg1 from '../../../images/hame_aboutFrame3.svg'
import cardImg2 from '../../../images/hame_aboutFrame2.svg'
import cardImg3 from '../../../images/hame_aboutFrame1.svg'

export default function Card() {
    return (
        <div className='services_card'>
            <div className='services-card_title-wrap'>
                <h2>I can help you in these particular areas.</h2>
            </div>
            <div className='services-card_wrapper'>
                <div className='services-card_wrap'>
                    <div className='services-card_list'>
                        <img src={cardImg1} alt='Card Img' />
                        <h3>Group Coaching Sessions</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                    <div className='services-card_list'>
                        <img src={cardImg2} alt='Card Img' />
                        <h3>Consultation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                </div>
                <div className='services-card_wrap'>
                    <div className='services-card_list'>
                        <img src={cardImg3} alt='Card Img' />
                        <h3>Online course</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                    <div className='services-card_list'>
                        <img src={cardImg3} alt='Card Img' />
                        <h3>1:1 Coaching</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
