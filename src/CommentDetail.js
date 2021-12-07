import React from "react";

const CommentDetail = (props) => {
    // props is variable that will be accept the data 
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a> 
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    {/* the concepts seems like if we want to call the object */}
                </a>
            </div>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.textBlog}</div>
        </div>
    );
};

export default CommentDetail;