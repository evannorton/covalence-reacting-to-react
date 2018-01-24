import React, { Component } from "react";

/*
const App = (props) => {
    return (
        <h1>{props.text}</h1>
    );
}
*/

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "this text is in the state"
        };
    }

    render() {
        return (
            <h1>{this.props.value}</h1>
        );
    }
}

export default App;