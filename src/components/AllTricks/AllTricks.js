import React from "react";
import Trick from "../Trick/Trick";
import "./AllTricks.css"

function AllTricks({ tricks }) {

    console.log(tricks)
    const allTricks = tricks.map(trick => {
        return (
            <Trick key={trick.name} trick={trick}/>
        )
    })
    return (
        <div className="all-tricks">
            {allTricks}
        </div>
        
    )
}

export default AllTricks