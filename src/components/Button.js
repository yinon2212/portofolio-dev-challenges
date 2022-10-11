import React from "react";
import '../css/Button.css';

const Button = (props) => {

    const onButtonClick = (event) => {
        const onClickFunc = props.onClickFunc ? props.onClickFunc : () => console.log("btn clicked!");
        onClickFunc(event);
    }

    return <button onClick={onButtonClick} className={`button ${props.classes}`} value={props.text}>{props.text}</button>
}

export default Button;