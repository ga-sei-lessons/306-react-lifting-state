import React, { Component } from "react"

export default class List extends Component {
    render() {
        const fruits = this.props.fruitsToDisplay.map((fruit, i) => {
            return <li key={`fruit ${i}`}>{fruit}</li>
        })
        return (
            <div>
                <h2>{this.props.listTitle}</h2>
                <ul>{fruits}</ul>
            </div>
        )
    }
}