import React from 'react'
import './Assessment.css'

const Assessment = ({ getState }) => {
    return (
        <div className={getState() ? "assessment-lf" : "assessment"}>
            <h1>Assessment</h1>
        </div>
    )
}

export default Assessment
