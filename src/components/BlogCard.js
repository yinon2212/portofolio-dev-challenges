import React from "react";
import Text from "./Text";
import '../css/BlogCard.css';

const BlogCard = (props) => {
    return (
        <div className="card blog-card">
            <Text classes="small light-gray-txt" text="Blog" />
            <div className="blog-top">
                <Text classes="bold" text={props.blogTopic} />
                <img src={props.blogImg} className="blog-img" alt="blog-img" />
            </div>

            <div className="blog-body">
                <Text classes="small gray-txt" text={props.blogText} />
            </div>
            
            <Text classes="small bold blue-txt blog-link" text={props.blogLink} />
        </div>
    );
}

export default BlogCard;