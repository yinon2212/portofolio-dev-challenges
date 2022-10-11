import React from "react";
import Text from './Text';
import TextWithIcon from "./TextWithIcon";
import '../css/PersonCard.css';

const PersonCard = (props) => {
    return (
        <div className={`card person-card ${props.direction}`}>
            <img src={props.imgSrc} className="person-img" alt="person-img" />
            <div className="person-details-container">
                <div className="person-details-top">
                    <div className="pd-top-left">
                        <Text classes="light-bold person-name" text={props.fullName} />
                        <Text classes="small txt-gray person-job" text={props.personJob} />
                    </div>
                    <div className="pd-top-right">
                        <TextWithIcon iconName="fas fa-envelope" text={props.email} />
                        <TextWithIcon iconName="fas fa-phone-alt" text={props.phone} />
                    </div>
                </div>
                <div className="person-details-body">
                    <Text classes="small txt-gray person-self-review" text={props.selfReview} />
                </div>
            </div>
        </div>
    );
}

export default PersonCard;