import React from 'react'
import {LineChart,YearPicker} from "./"

const CardD = () => {
    return (
        <div className="card cardd">
            <div className="card-head">
                <div> <span>User Activity</span> </div>
                <div> <YearPicker/> </div>
            </div>
            <LineChart/>
        </div>
        
    )
}

export default CardD