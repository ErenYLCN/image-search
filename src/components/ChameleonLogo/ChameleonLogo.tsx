import React from 'react'
import rectangle from '../../assets/rectangle.png';
import chameleon from '../../assets/amphibian-chameleon.png';
import "./ChameleonLogo.scss"

export const ChameleonLogo = () => {
    return (
        <div className="logo">
            <img src={rectangle} alt="rectangle" />
            <img src={chameleon} alt="chameleon" className="chameleon" />
        </div>
    )
}
