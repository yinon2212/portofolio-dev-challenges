import React from "react";
import Text from "./Text";
import '../css/ListCard.css';

const ListCard = ({cardTopic, items}) => {
    return (
        <div className="card list-card">
            <Text classes="medium light-bold card-topic" text={cardTopic} />
            <div className="items-container">
                {items}
            </div>
            
        </div>
    );
}

export default ListCard