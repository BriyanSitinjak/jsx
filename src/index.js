import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 17:00 WIB" 
                textBlog="Nice One!"
                avatar= {faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Today at 18:00 WIB" 
                textBlog="Nice Two!" 
                avatar= {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Jane" 
                timeAgo="Today at 19:00 WIB" 
                textBlog="Nice Three!"
                avatar= {faker.image.avatar()} />
            </ApprovalCard>
            {/* author, timeAgp, textBlog, avatar in here are props who will parsing children to a component */}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// in file index.js (contain with App), it's never use props because this is parent component