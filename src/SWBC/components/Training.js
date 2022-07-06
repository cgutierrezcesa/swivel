import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Finance from '../assets/finance.jpeg'
import Finance2 from '../assets/finance2.jpeg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Investement Opportunities</h1>
                <p>SWBC Investment Division seeks to provide comprehensive and holistic financial planning to individuals, businesses, and financial institutions. As part of the SWBC family, we’re able to offer our clients financial products, services, and protection, such as mortgages, insurance, employee benefits, PEO services, and tax services. </p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Finance2} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Finance} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
