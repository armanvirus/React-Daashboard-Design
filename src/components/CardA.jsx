import React from 'react'
import {Icon} from "../utils"
const CardA = ({rate, name}) => {
    return (
        <div class=" card carda">
            <div className="card-head">
            <div> <span>Oders</span> </div>
            <div> <Icon name={name}/> </div>
            </div>
            <div className="card-main">
                <h1>201</h1>
            </div>
            <div className="card-footer">
            <span className={`rate flex center ${rate > 1 ? "rise" : "fall"}`}>
            <Icon name={rate > 1 ? "rise" : "fall"}/> {rate}.00</span>
            <span>average increase</span>
            </div>
        </div>
    )
}

export default CardA