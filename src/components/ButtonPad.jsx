import React, { Component } from "react"
import Button from "./Button"
import { SpecialChars } from '../utilities/Characters'

class ButtonPad extends Component {
    state = {
        value: 0
    }

    render() {
        return (
            <div>
                <div className="buttonpad">
                    {/* Row 1 */}
                    <Button name="1" />
                    <Button name="2" />
                    <Button name="3" />
                    <Button name="+" />

                    {/* Row 2 */}
                    <Button name="4" />
                    <Button name="5" />
                    <Button name="6" />
                    <Button name="-" />

                    {/* Row 3 */}
                    <Button name="7" />
                    <Button name="8" />
                    <Button name="9" />
                    <Button name={SpecialChars.MULT} />

                    {/* Row 4 */}
                    <Button name="C" />
                    <Button name="0" />
                    <Button name="." />
                    <Button name={SpecialChars.DIV} />

                    {/* Row 5 */}
                    <Button name="sin" />
                    <Button name="cos" />
                    <Button name="tan" /><br></br>

                    {/* Row 6 */}
                    <Button name={SpecialChars.X_N} />
                    <Button name={SpecialChars.E_N} />
                    <Button name={SpecialChars.SQRT} />
                    <Button name={SpecialChars.SQRT_N} />

                    {/* Row 7 */}
                    <Button name={SpecialChars.LOG_X}></Button>
                    <Button name={SpecialChars.LOG_10}></Button>
                </div>
            </div>
        )
    }
}

export default ButtonPad;