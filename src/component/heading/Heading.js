import React from 'react'
import "./heading.css";
function Heading({title="Title"}) {
    return (
        <div className="heading" >
            {title}
        </div>
    )
}

export default Heading
