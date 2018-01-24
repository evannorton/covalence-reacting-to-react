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

    handleInput(value) {
        this.setState({ value });
    }

    render() {
        return (
            <React.Fragment>
                <input
                    placeholder={ this.state.text }
                    onChange={(event) => this.handleInput(event.target.value)}
                />
                <h1>{this.props.value}<br />{this.state.text}</h1>
            </React.Fragment>
        );
    }
}

export default App;