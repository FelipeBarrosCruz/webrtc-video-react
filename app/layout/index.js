'use strict'

import React from 'react'
import VideoComponent from '../components/video'
import './index.scss'

export default class Layout extends React.Component {

  constructor () {
    super()
    this.state = {
      header: {
        text: 'Simple WebRCT Video based on React and Redux'
      }
    }
  }

  render () {
    return (
      <div className="container">
        <h1 className="text-center app-title">
          {this.state.header.text}
        </h1>

        <p className="text-center">
          
        <VideoComponent />

        </p>
      </div>
    )
  }
}