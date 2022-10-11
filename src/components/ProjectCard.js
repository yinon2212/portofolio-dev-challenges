import React from "react";
import Text from "./Text";
import Button from "./Button";
import '../css/ProjectCard.css';

/*This function generates new tag*/
const generateTag = (tag, id) => {
    return <Text classes={`small ${tag} tag`} text={`#${tag}`} />
}

const ProjectCard = (props) => {
    const projectTags = props.tags.map((tag, id) => {
        return generateTag(tag, id);
    });

    const openProjectWebsite = () => {
        window.location.href = props.projectUrl;
    }

    return (
        <div className="card project-card" key={props.id}>
            <img src={props.projectImg} className="project-img" alt="project-img" />
            <div className="project-details-container">
                <div className="tags">
                    {projectTags}
                </div>
                <Text classes="bold project-name" text={props.projectName} />
                <Text classes="small txt-gray project-description" text={props.projectDesc} />
                <div className="project-buttons">
                    <Button classes="btn-blue border-blue-hover" text="Demo" onClickFunc={openProjectWebsite} />
                    <Button classes="border-blue txt-blue blue-hover" text="Code" />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;