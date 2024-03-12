import React from 'react'
import {Seller} from "./"
const Sellers = () => {
    const arr = Array(1, 2, 3, 4, 5)
    return (
        <div className="card sellers-card">
            <div className="card-head">
                <div><span>Top Sellers</span> </div>
            </div>
            <div>
                <div className="seller sellers-card-head">
                    <div> <span>Profile</span> </div>
                    <div>Contact</div>
                    <div>Transactions</div>
                    <div>Price</div>
                </div>
                {arr.map(ar=>{
                    return(<Seller/>)
                })}
            </div>
        </div>
    )
}

export default Sellers
