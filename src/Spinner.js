import React from "react";

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// defaultProps means this value will be show if the props on index.js has no value
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;