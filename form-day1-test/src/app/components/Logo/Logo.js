import React from "react";
import logo2 from './logo2.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className="ma5">
            <img className='' style={{width: '45px', height: '45px'}} src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/ex-logo/1_logos_grau/exl-04-media-hd-161.png" alt='logo'/>
            <span className="mt3 f4 ">Test app  </span>
        </div>
    )
}

export default Logo;