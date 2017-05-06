import React from "react"
import './App.scss'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'Hello World'
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center app-title">
          {this.state.text}
        </h1>
      </div>
    )
  }
}
