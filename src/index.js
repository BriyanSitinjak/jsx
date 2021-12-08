import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)        
//     );

//     return <div>Latitude :</div>;
// };

class App extends React.Component {
    state = { lat: null , errorMessage: '' };

    componentDidMount() {
    // good place to do data-loading
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
                // setState have to use for update the data
                // position.coords.latitude can be found in the Concole on browser
            err => this.setState({ errorMessage:err.message})
                // err.message can be found in the Console on browser
                // bad habit if we ignore the error
        );
    }

    // React says we have to define render!
    render(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage} </div>;
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request"/>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));