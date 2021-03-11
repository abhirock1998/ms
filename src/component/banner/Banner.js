import { Button } from '@material-ui/core';
import React from 'react'
import { Header } from '..';
import "./banner.css";
function Banner() {
    return (
        <div  className="banner" >
            <Header/>
            <div className="banner__content">
                <h1>Simply Intelligent</h1>
                <p>Learn how we at Megasoft can help you empower your business </p>
                <Button variant="outlined"  >Take a Tour</Button>
            </div>
        </div>
    )
}

export default Banner
