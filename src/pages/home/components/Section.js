import React from 'react'
import Btn from '../../components/Btn'
import sectionImg from '../../../images/hamesectionimg.png'

export default function Section() {
    return (
        <div className='home_section'>
            <div className='home-section_wrapper'>
                <div className='home-section_deck-wrapper'>
                    <h2>Don’t miss out on my ‘Live life at the full potential’ free guide</h2>
                    <p className='home-section_deck'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    <p className='home-section_text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <Btn text='Get your free guide now' />
                </div>
                <div className='home-section_wrap'>
                    <img className='home-section_img' src={sectionImg} alt='Section Img' />
                    <span>Free guide!</span>
                </div>
            </div>
        </div>
    )
}