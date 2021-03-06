import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import 'animate.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content animate__animated animate__fadeIn'>
                <h1>We Put Our Clients First</h1>
                <div className='width--paragraph'>
                <p>Partner with a company that puts the financial success of you, your family, and your business growth first.</p>
                </div>
               
                <div>
                    <Link to='/training' className='btn'>GET STARTED</Link>
                    <Link to='/contact' className='btn btn-light'>LEARN MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
