import React from "react";
import Text from "./Text";
import ProgressBar from "./ProgressBar";


const Skill = ({skill, percentage, id}) => {
    return (
        <div className="skill" key={id}>
            <Text classes="small skill-name" text={skill} />
            <ProgressBar percentage={percentage} color="blue" />
        </div>
    );
}

export default Skill;