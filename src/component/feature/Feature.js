import React from 'react'
import "./feature.css";
function Feature() {
    return (
        <div style={{backgroundImage:`url(/images/poster.png)`}}   className="feature"  >
            <div className="feature__content">
                <h1>Simply Intelligent</h1>
            <p>Learn how we at Megasoft can help you empower your business </p>
            </div>
            <div className="feature__bullet">
                <div className="feature__bulletCard">
                    <img src="/images/person.png" alt="person"/>
                    <h3>Lorem Ipsum is simply dummy text of the printing</h3>
               <p>and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
               
                </div>
                <div className="feature__bulletCard">
                <img src="/images/group.png" alt="group"/>
                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                <p>and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Feature
