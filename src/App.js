import React, { Component } from "react"
import FruitContainer from "./FruitContainer"

const fruits = [
  "banana",
  "apple",
  "pineapple",
  "rasberry",
  "blueberry",
  "loganberry",
  "gooseberry",
  "tomotoe",
  "artichoke",
  "avocado",
  "peach",
  "grape",
  "grapefruit",
  "mango"
]

export default class App extends Component {
  render() {
    return (
      <>
        <FruitContainer fruits={fruits} />
      </>
    )
  }
}