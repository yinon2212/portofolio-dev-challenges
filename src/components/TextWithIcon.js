import React from "react";
import Text from "./Text";
import '../css/TextWithIcon.css';

const TextWithIcon = ({iconName, text}) => {
    return (
        <div className="icon-text">
            <i className={`icon ${iconName}`}></i>
            <Text classes="small" text={text} />
        </div>
    );
}

export default TextWithIcon;