import React from 'react'
import './Sales.css'
const Sales = ({ getState }) => {
    return (
        <div  className={getState() ? "sales-lf" : "sales"}>
            <h1>Sales</h1>
        </div>
    )
}

export default Sales
