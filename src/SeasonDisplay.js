import React from 'react';
import './SeasonDisplay.css';
// dont forget to import your css file

const seasonConfig = {
    // seasconConfig was created to explain about the text and iconName for condition below
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr it's cold!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // The month calculation start from 0. so if month greater than March and less than October
        return lat > 0 ? "summer" : "winter";
        // This is Ternary Expressions
        // is it lat greater than 0? if yes, show summer. if it's not, show winter
    } else {
        return lat < 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat , new Date().getMonth());
    // Why not just use props.month in argument? Same as props.lat
    // because, props.month has no value. Compared to props.lat which has already declared the value

    const {text, iconName} = seasonConfig[season];

    // SeasonDisplay receive the props from parent
    return (
        <div className={`season-display ${season}`}>
            {/* Best practice is to make the className same as the function name that has been created */}
            <i className={`icon-left massive ${iconName} icon`} />
            {/* ES2016 Template String */}
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
    // props.lat means argumen props with lat value
    
};

export default SeasonDisplay;