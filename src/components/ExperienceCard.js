import React from "react";
import Text from "./Text";
import '../css/ExperienceCard.css';

const ExperienceCard = (props) => {
    return (
        <div className="card experience-card" key={props.id}>
            <img src={props.imgSrc} className="card-image" alt="card-image" />
            <div className="card-details">
                <Text classes="small txt-gray dates" text={props.dates} />
                <Text classes="small bold card-topic" text={props.cardTopic} />
                <Text classes="small txt-gray card-desc" text={props.cardDesc} />
            </div>
        </div>
    );
}

export default ExperienceCard;