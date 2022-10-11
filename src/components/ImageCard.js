import React from "react";
import Text from "./Text";
import '../css/ImageCard.css';

const ImageCard = (props) => {
    return (
        <div className="card image-card" key={props.id}>
            <img src={props.cardImg} className="card-img" alt="card-img" />
            <Text classes="bold small card-topic" text={props.cardTopic} />
            <Text classes="small txt-gray card-desc" text={props.cardDesc} />
        </div>
    );
}

export default ImageCard;