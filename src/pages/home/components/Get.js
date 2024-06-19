import React from 'react'
import Btn from '../../components/Btn'
import getImg from '../../../images/homegetimg.png'

export default function Get() {
  return (
    <div className='home_get'>
        <div className='home-get_wrapper'>
              <h2>Get 15-Minutes Complimentary online session.</h2>
              <p>Limited Period Offer. Claim Now.</p>
              <Btn text='Book now'/>
        </div>
        <img className='home-get_img' src={getImg} alt='Get Img'/>
    </div>
  )
}
