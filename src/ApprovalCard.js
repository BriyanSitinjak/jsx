import React from "react";

const ApprovalCard = (props) => {
    return (
        <div className="ui card" >
            <div className="content">{props.children}</div>
            {/* props.children is for displaying all data in parent */}
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div>
    );
};

// with props, we can display dynamic data both from database or API
// dummy static data that is directly used in code is called "HARD CODED"

export default ApprovalCard;