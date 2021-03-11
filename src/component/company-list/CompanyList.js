import React from 'react'
import "./company-list.css";
function CompanyList() {
    const Images=[
        {
            url:"/images/acc.png",
            alt:"acc"
        },
        {
            url:"/images/Frame.png",
            alt:"frame"
        },
        {
            url:"/images/france.png",
            alt:"france"
        },
        {
            url:"/images/Frame-42.png",
            alt:"frame-42"
        },
        {
            url:"/images/Frame-43.png",
            alt:"frame-43"
        },
        {
            url:"/images/Frame-44.png",
            alt:"frame-44"
        },
    ]
    return (
       <div className="comList">
            <div  className="comList__container" >
           {Images.map(({url,alt}) =>  <div className="comList__picture">
            <img src={url} alt={alt}/>
            </div>)}
           
        </div>
         <div className="comList__viewAll">See all Customers <img src="/images/arrow-right.png" alt=""/> </div>
       </div>
    )
}

export default CompanyList
