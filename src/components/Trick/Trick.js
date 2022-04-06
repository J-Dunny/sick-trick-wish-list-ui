import React from "react";
import "./Trick.css"

function Trick({trick}){


    return (
            <div className="trick-card">
                <p>{trick.stance}{trick.name}</p>
                <p>{trick.obstacle}</p>
                <p>Link to tutorial:</p>
                <p>{trick.tutorial}</p>
            </div>
    )
}

export default Trick