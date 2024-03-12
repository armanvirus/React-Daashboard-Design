import React,{useState} from 'react'
import Dunot from "./Dunot"

const CardB = ({colorRange}) => {
    const [dataCategory,setDataCategory] = useState(null)
    return (
        <div class="card cardb">
            <div className="card-head">
                <div> <span>Users</span> </div>
            </div>
            <div className="card-main">
                <h1>1273</h1>
                <span>total users</span>
            </div>
            <div className="pichar flex center">
                <div className="labelings">
                    {
                        dataCategory && (
                            dataCategory.map( category =>{
                            return (<div className="flex center"> 
                            <span className="category" style={{backgroundColor:category.color}}></span>
                            <span>{category.category}</span> 
                            </div>)   
                            })
                        )
                    }
                </div>
                <Dunot setDataCategory={setDataCategory} colorRange={colorRange} />
            </div>
        </div>
    )
}

export default CardB