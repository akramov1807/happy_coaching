import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import ListImg from '../../../images/listImg.png'

export default function List() {
    return (
        <div className='home_list'>
            <div className='home-list_wrapper'>
                <div className='home-list_title-wrapper'>
                    <h2>Hear out what my clients say about me.</h2>
                </div>
                <ul className='home-list_list'>
                    <li className='home-list_item'>
                        <p>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                        <h3>Jane</h3>
                        <img src={ListImg} alt='List Img' />
                        <div className='home-list_stars-wrap'>
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                        </div>
                    </li>
                    <li className='home-list_item'>
                        <p>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                        <h3>Catherine</h3>
                        <img src={ListImg} alt='List Img' />
                        <div className='home-list_stars-wrap'>
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                        </div>
                    </li>
                    <li className='home-list_item'>
                        <p>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                        <h3>Jane</h3>
                        <img src={ListImg} alt='List Img' />
                        <div className='home-list_stars-wrap'>
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                            <LiaStarSolid className='home-list_star' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
