// Import teh React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// function getButtonText(){
//     return 'Click on me!'
// }

// Create a react component
const App = () => {

    const buttonText = 'Click Me!'

    return (
        <div>
        {/* for JSX, use double quotes to indicate the string  */}
        <label className="label" htmlFor="name">
            Enter Name
        </label>
        <input type="text" id="name" />
        {/* non JSX, use single quotes  */}
        <button style={{ backgroundColor:'blue', color: 'white' }}> {buttonText} </button>
        {/* { }  curly bracket on buttonText means the content will get form other js or function*/}
    </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
<App />, 
document.querySelector('#root'));

// NOTE : always open the console of your browser to know the error of your syntax

// Component Nesting ; Component Resuability ; Component Configuration
