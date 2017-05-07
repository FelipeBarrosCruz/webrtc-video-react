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
    this.action = new Action(this.state)
  }

  componentDidMount () {
    this.action.ready((err, result) => {
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