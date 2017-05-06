'use strict'

import React from 'react'
import './index.scss'

export default class Layout extends React.Component {

  constructor () {
    super()
    this.state = {
      header: {
        text: 'Hello World'
      }
    }
  }

  render () {
    return (
      <div className="container">
        <h1 className="text-center app-title">
          {this.state.header.text}
        </h1>
      </div>
    )
  }
}