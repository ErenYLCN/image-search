import React from 'react'
import { ChameleonLogo } from '../../components/ChameleonLogo/ChameleonLogo'
import { Dropdown } from '../../components/Dropdown/Dropdown'
import './LandingPage.scss'


export const LandingPage = () => {
    return (
        <div className="landing">
            <div className="container">
                <ChameleonLogo />
                <h1><span>image</span> search</h1>
                <Dropdown />
                <input />
            </div>
        </div>
    )
}
