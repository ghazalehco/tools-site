import React, { Component } from "react"
import Button from "./Button"

class Calculator extends React.Component {
    state = {
        value: 0
    }

    render() {
        return (
            <div>
                <Button name="hello world" />
            </div>
        )
    }
}

export default Calculator;