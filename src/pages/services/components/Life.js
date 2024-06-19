import React from 'react'
import lifeListImg1 from '../../../images/serviceslifelistimg1.png'
import lifeListImg2 from '../../../images/serviceslifelistimg2.svg'
import lifeListImg3 from '../../../images/serviceslifelistimg3.svg'
import lifeListImg4 from '../../../images/serviceslifelistimg4.svg'
import lifeImg from '../../../images/serviceslifeimg.png'

export default function Life() {
    return (
        <div className='services_life'>
            <div className='services-life_deck_wrapper'>
                <p>How does it work?</p>
                <h2>Are you ready to transform your life?</h2>
                <p className='services-life_deck-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
            </div>
            <div className='services-life_list-wrapper'>
                <ul>
                    <li className='services-life_item'>
                        <img src={lifeListImg1} alt='List img' />
                        <div>
                            <h3>Talk to me first</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </li>
                    <li className='services-life_item'>
                        <img src={lifeListImg2} alt='List img' />
                        <div>
                            <h3>Schedule a meeting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </li>
                    <li className='services-life_item'>
                        <img src={lifeListImg3} alt='List img' />
                        <div>
                            <h3>Online consultation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </li>
                    <li className='services-life_item'>
                        <img src={lifeListImg4} alt='List img' />
                        <div>
                            <h3>Ready to start? Let’s talk!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </li>
                </ul>
                <img className='services-life_img' src={lifeImg} alt='Serrvices Life Img' />
            </div>
        </div>
    )
}
