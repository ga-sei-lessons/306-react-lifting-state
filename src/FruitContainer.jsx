import React, { Component } from "react"
import Input from "./Input"
import List from "./List"

// solve problems first -> if it works its good, passes tests and is bug free, you are g2g
// if you have extra time after solving a problem, DRY it up, make it readable, make it better code for the next engineer who is going to work on it
// only optimize when you need to, over optimization up front can lead to wasted time, especially when you optimizae things you didn't neet to

export default class FruitContainer extends Component {
    // define the state of filtered fruits
    state = {
        // array fruits that have been filtered
        fruitsToDisplay: this.props.fruits,
        // the value the user has typed into the input
        value: '',
        // everthing that is filtered out of the list
        unmatchedFruits: []
    }

    // define the event handlers to filter the state
    handleFilterChange = e => {
        // create a new list of fruits based on the current state of the input
        const filterValue = e.target.value
        const filteredFruitList = []
        const unmatchedFruits = []
        this.props.fruits.forEach(fruit => {
            if (fruit.toLowerCase().includes(filterValue.toLowerCase())) {
                filteredFruitList.push(fruit)
            } else {
                unmatchedFruits.push(fruit)
            }
        })
        // const filteredFruitList = this.props.fruits.filter(fruit => {
        //     return fruit.toLowerCase().includes(filterValue.toLowerCase())
        // })
        // const unmatchedFruits = this.props.fruits.filter(fruit => {
        //     return !fruit.toLowerCase().includes(filterValue.toLowerCase())
        // })
        this.setState({
            fruitsToDisplay: filteredFruitList,
            unmatchedFruits,
            value: filterValue
        })
    }
    render() {
        return (
            <div>
                <h1>Fruit Filter 🍇</h1>
                {/* input the user can type into */}
                <Input 
                    value={this.state.value}
                    handleFilterChange={this.handleFilterChange}
                />
                {/* the list of filtered fruits */}
                <List 
                    fruitsToDisplay={this.state.fruitsToDisplay}
                    listTitle={"Matched"}
                />

                <List 
                    listTitle={"Does not Match"}
                    fruitsToDisplay={this.state.unmatchedFruits}
                />
            </div>
        )
    }
}
