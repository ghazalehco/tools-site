import React, { Component } from 'react'
import ButtonPad from "./ButtonPad"

export default class Calculator extends Component {
    state = {
        value: this.props.value
    }

    render() {
        return (
            <div className="calculator">
                <h1 className="header text-warning">Calculator</h1>
                <ButtonPad></ButtonPad>
                <form className="input">
                    <div className="form-group">
                        <label className="text-warning" htmlFor="exampleInputEmail1">Expression</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your expression" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                        <label className="text-warning" htmlFor="exampleInputPassword1">Result</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Result" readOnly />
                    </div>
                    {/* <div className="form-check">
                        < input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
                <h2 className="history text-warning">History</h2>
            </div >
        )
    }
}
