import React from "react";
import "./Trick.css"

function Trick({trick}){


    return (
            <div className="trick-card">
                <p>{trick.stance} {trick.name}</p>
                <p>{trick.obstacle}</p>
                <p>Link to tutorial:</p>
                <a href={trick.tutorial}>{trick.tutorial}</a> 
            </div>
    )
}

export default Trick