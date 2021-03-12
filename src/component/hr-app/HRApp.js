import { Button } from '@material-ui/core';
import React from 'react'
import "./hr-app.css";
function HRApp() {
    return (
        <div className="hrApp"  >
            <div className="hrApp__heading">
                <h3>HandyHR App</h3>
                <p>Learn how we at MegaSoft can help you empower your business</p>
            </div>
            <img src="/images/hr-app.png" alt="hr-app"/>
       <div className="hrApp__download">
           <h4>Learn how we at Megasoft can help you empower your business </h4>
 <Button variant="outlined"  >Download Now !</Button>
    </div>
       
       
        </div>
    )
}

export default HRApp
