import React from "react";
import FilterBox from './FilterBox';
import ProjectCard from "./ProjectCard";

const projects = [
    {
        projectImg: require("../res/recipe-blog.png"),
        tags: ["HTML", "CSS", "Responsive", "React"],
        projectName: "Recipe Blog",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus nulla ac tortor dictum tempus.",
        projectUrl: "https://comforting-wisp-4b3f15.netlify.app/"
    },
    {
        projectImg: require("../res/my-gallery.png"),
        tags: ["HTML", "CSS", "Responsive", "React"],
        projectName: "My Gallery",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus nulla ac tortor dictum tempus.",
        projectUrl: "#"
    },
    {
        projectImg: require("../res/checkout.png"),
        tags: ["HTML", "CSS", "Responsive", "React"],
        projectName: "Checkout Page",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus nulla ac tortor dictum tempus.",
        projectUrl: "https://sage-fudge-2f1800.netlify.app/"
    }
]

const ProjectsSection = () => {
    const projectsContainer = document.querySelector(".projects-section .projects-container");
    const projectCards = projects.map((project, id) => {
        return(
            <ProjectCard
                id={id}
                projectImg={project.projectImg}
                tags={project.tags}
                projectName={project.projectName}
                projectDesc={project.projectDesc}
                projectUrl={project.projectUrl}
            />
        );
    });

    const [filteredProjects, setFileteredProjects] = React.useState(projectCards);

    
    const giveProjectsByFilter = filter => {
        let allProjects = [];
        projectCards.forEach(projectCard => {
            let projectTags = projectCard.props.tags;

            if(projectTags.indexOf(filter) > -1)
                allProjects.push(projectCard);
        });

        setFileteredProjects(allProjects);
    }

    return (
        <div className="projects-section">
            <FilterBox topic="Projects" filtersList={["React", "Responsive"]} getProjects={giveProjectsByFilter} />
            <div className="projects-container">
                {filteredProjects}
            </div>
        </div>
    );
}

export default ProjectsSection;