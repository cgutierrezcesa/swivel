import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Analyst -</h3>
                    <span className='bar'></span>
                    <p className='btc'>Full time</p>
                    <p>- BS Degree -</p>
                    <p>- 3 years of experience -</p>
                    <p>- Able to work hybrid -</p>
                    <p>- Knowledge of SQL -</p>
                    <Link to='/contact' className='btn'>Apply</Link>
                </div>
                <div className='card'>
                    <h3>- FullStack Dev -</h3>
                    <span className='bar'></span>
                    <p className='btc'> Part-Time</p>
                    <p>- Knowledge of AWS -</p>
                    <p>- 4 years of experience -</p>
                    <p>- Able to work remote -</p>
                  
                    <Link to='/contact' className='btn'>Apply</Link>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <span className='bar'></span>
                    <p className='btc'> Salary</p>
                    <p>- 15 years of finance experience -</p>
                    <p>- Need to be located in SATX -</p>
                   
                    <Link to='/contact' className='btn'>Apply</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
