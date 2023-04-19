import React, { Component } from "react"

export default class Input extends Component {
    render() {
        return (
            <div>
                <label htmlFor="fruit-input">Filter them Fruits:</label>

                <input 
                    type="text"
                    id="fruit-input"
                    onChange={this.props.handleFilterChange}
                    value={this.props.value}
                />
            </div>
        )
    }
}