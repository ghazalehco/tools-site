import React, { Component } from "react"

class Button extends Component {
    state = {
        name: this.props.name
    };

    buttonAlert = () => {
        alert("Hello World");
    }
    render() {
        return (
            <button type="button" onClick={this.buttonAlert}>
                {this.state.name}
            </button >
        )
    }
}

export default Button;