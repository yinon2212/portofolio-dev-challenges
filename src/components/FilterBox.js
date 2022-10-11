import React from "react";
import Text from "./Text";
import Button from "./Button";
import '../css/FilterBox.css';

const FilterBox = (props) => {
    const [currentFilter, setFilter] = React.useState();
    const projectsContainer = document.querySelector(".projects-section .projects-container");

    const onFilterButtonClicked = event => {
        setFilter(event.target);
        if(currentFilter){
            currentFilter.classList.remove("btn-blue");
            props.getProjects(currentFilter.value);
        }
    }

    React.useEffect(() => {
        if(currentFilter){
            currentFilter.classList.add("btn-blue");
            
        }
    });

    const filters = props.filtersList.map(filter => {
        return <Button classes="border-blue-hover filter" text={filter} onClickFunc={onFilterButtonClicked} />
    });

    

    return (
        <div className="card filter-box">
            <Text classes="medium light-bold filter-box-topic" text={props.topic} />
            <div className="filters">
                {filters}
            </div>
        </div>
    );
}

export default FilterBox;