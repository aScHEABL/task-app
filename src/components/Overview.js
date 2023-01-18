import React, { Component } from "react";
import uniqid from "uniqid";

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.tasks.map((task, index) => <li key={uniqid()}>{index + 1}. {task}</li>)}
            </ul>
        )
    }
}

export default Overview;