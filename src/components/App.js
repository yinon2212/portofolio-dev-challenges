import React from "react";
import PersonCard from "./PersonCard";
import SkillsCard from "./SkillsCard";
import ListCard from "./ListCard";
import ImageCard from "./ImageCard";
import BlogCard from "./BlogCard";
import ExperienceCard from "./ExperienceCard";
import ProjectsSection from './ProjectsSection';
import '../css/App.css';

const skills = [
    {
        skillName: "HTML",
        percentage: "100"
    },
    {
        skillName: "CSS",
        percentage: "90"
    },
    {
        skillName: "Javascript",
        percentage: "90"
    },
    {
        skillName: "React",
        percentage: "70"
    },
    {
        skillName: "NodeJS",
        percentage: "60"
    },
    {
        skillName: "PHP",
        percentage: "40"
    }
];

const hobbies = [
    {
        img: require("../res/guitar.jpg"),
        topic: "Playing guitar",
        description: "I love playing guitar"
    },
    {
        img: require("../res/programming.jpg"),
        topic: "Programming",
        description: "I love program and develop new apps"
    },
    {
        img: require("../res/soccer.jpg"),
        topic: "Sport",
        description: "I love playing soccer"
    }
];

const experiences = [
    {
        img: require("../res/adidas.png"),
        dates: "Feb 2017 - Current",
        topic: "Front-end developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus nulla ac tortor dictum tempus."
    },
    {
        img: require("../res/hm.png"),
        dates: "Sep 2013 - Jan 2017",
        topic: "Full-stack developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus nulla ac tortor dictum tempus."
    }
]

/*This function generates new Image Card component*/
const generateImageCard = (cardDetails, id) => {
    return(
        <ImageCard
            id={id}
            cardImg={cardDetails.img}
            cardTopic={cardDetails.topic}
            cardDesc={cardDetails.description}
        />
    );
};

/*This function generates new Experience Card component*/
const generateExperienceCard = (cardDetails, id) => {
    return (
        <ExperienceCard
            id={id}
            imgSrc={cardDetails.img}
            dates={cardDetails.dates}
            cardTopic={cardDetails.topic}
            cardDesc={cardDetails.description}
        />
    );
}

const App = () => {

    const hobbiesCards = hobbies.map((hobbie, id) => {
        return generateImageCard(hobbie, id)
    });

    const experienceCards = experiences.map((experience, id) => {
        return generateExperienceCard(experience, id)
    });

    return (
        <>
            <PersonCard
                imgSrc={require("../res/profile-img.png")}
                fullName="Yinon Megidesh"
                personJob="Full-stack developer"
                email="example@go.com"
                phone="000000000000"
                selfReview="Self-motivated developer, who is willing to learn and create new things. Love to develop full stack applications :)"
            />

            <div className="about-me">
                <div className="left-container">
                    <SkillsCard cardTopic="Full Stack" skills={skills} />
                    <ListCard cardTopic="Hobbies" items={hobbiesCards} />
                </div>

                <div className="right-container">
                    <BlogCard 
                        blogTopic="How to organize your CSS"
                        blogImg={require("../res/blog-img.jpg")}
                        blogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus nulla ac tortor dictum tempus. Ut iaculis felis nulla, at porttitor dolor ultrices ac. Maecenas blandit sapien non massa consectetur finibus."
                        blogLink="dev.to"
                    />
                    <ListCard cardTopic="Experiences" items={experienceCards} />
                </div>
            </div>

            <ProjectsSection />
        </>
    );
}

export default App;