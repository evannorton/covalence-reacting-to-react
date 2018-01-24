import React, { Component } from "react";

/*
const App = (props) => {
    return (
        <h1>{props.text}</h1>
    );
}
*/

class App extends Component {
    render() {
        return (
            <h1>{this.props.text}</h1>
        );
    }
}

export default App;