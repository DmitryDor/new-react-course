import React from "react";

export class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incHandler = this.incHandler.bind(this)
        this.dncHandler = this.dncHandler.bind(this)

    }

    incHandler() {
        this.setState({count: this.state.count + 1})
    }

    dncHandler() {
        this.setState({count: this.state.count - 1})
    }
    render()
    {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incHandler}>Increment</button>
                <button onClick={this.dncHandler}>Decrement</button>
            </div>
        )
    }
}







