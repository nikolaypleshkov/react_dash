import React from 'react'
import './Domains.css'
const Domains = ({ getState }) => {
    return (
        <div  className={getState() ? "domains-lf" : "domains"}>
            <h1>Domains</h1>
        </div>
    )
}

export default Domains
