import React from 'react'
import minus from '../../../images/minus-circle.png'
import plus from '../../../images/plus-circle.png'
import Btn from '../../components/Btn'

export default function Contact() {
    return (
        <div className='services_contact'>
            <div className='services-contact_top'>
                <h2>Good to know.</h2>
                <p>Everything you need to know about the my services.</p>
            </div>
            <div className='services-contact_middle'>
                <div>
                    <h3>How long does the coaching process take?</h3>
                    <img src={minus} alt='...' />
                </div>
                <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                <div>
                    <h3>What if I wanted to end my coaching engagement?</h3>
                    <img src={plus} alt='...' />
                </div>
                <div>
                    <h3>Can I change through coaching?</h3>
                    <img src={plus} alt='...' />
                </div>
                <div>
                    <h3>How often do we meet?</h3>
                    <img src={plus} alt='...' />
                </div>
            </div>
            <div className='services-contact_bottom'>
                <h3>Still have questions?</h3>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <Btn text='Get in touch' />
            </div>
        </div>
    )
}
