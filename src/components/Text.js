import React from "react";
import '../css/Text.css';

const Text = ({classes, text}) => {
    return (
        <p className={`text ${classes}`}>{text}</p>
    );
}

export default Text;