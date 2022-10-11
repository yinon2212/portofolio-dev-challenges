import React from "react";
import Skill from "./Skill";
import Text from "./Text";
import "../css/SkillsCard.css";

const generateSkill = (skill, id) => {
    return <Skill skill={skill.skillName} percentage={skill.percentage} id={id} />
}

const SkillsCard = ({cardTopic, skills}) => {
    
    const allSkills = skills.map((skill, id) => {
        return generateSkill(skill, id);
    });

    return (
        <div className="card skills-card">
            <Text classes="bold card-topic" text={cardTopic} />
            <div className="skills-container">
                {allSkills}
            </div>
        </div>
    );
}

export default SkillsCard;