import React from "react";
import '../css/ProgressBar.css';

const ProgressBar = ({percentage, color}) => {
    return (
        <div className="progress-bar">
            <div style={{width: `${percentage}%`}} className={`percentage ${color}`}></div>
        </div>
    );
}

export default ProgressBar;