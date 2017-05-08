'use strict'
import React from 'react'
import Action from  './Action'

export default class VideoComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      id: 'videoContainer',
      poster: 'http://www.kplonline.org/dashboard/img/videocover.png'
    }
  }

  componentDidMount () {
    this.action = new Action(this).ready((err, result) => {
      if (err) {
        return console.error('Video Err', err)
      }
      console.info('Video Result', result)
    })
  }

  render () {
    return (
      <video 
        id={this.state.id}
        poster={this.state.poster}
        autoPlay></video>
    )
  }
}