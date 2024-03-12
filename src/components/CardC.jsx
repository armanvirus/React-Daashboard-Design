import React from 'react'
import {BarChart,YearPicker} from "./"

const CardC = () => {
    return (
        <div className="card cardc">
            <div className="card-head">
                <div> <span>Sales Dynamics</span> </div>
                <div> <YearPicker/> </div>
            </div>
            <BarChart/>
        </div>
    )
}

export default CardC