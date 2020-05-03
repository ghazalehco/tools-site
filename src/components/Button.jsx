import React, { Component } from "react"

class Button extends Component {
    state = {
        name: this.props.name
    };

    buttonAlert = () => {
        console.log(this.state.name);
    }
    render() {
        return (
            <button className="btn btn-sm btn-warning" onClick={this.buttonAlert}>
                {this.state.name}
            </button >
        )
    }
}

export default Button;