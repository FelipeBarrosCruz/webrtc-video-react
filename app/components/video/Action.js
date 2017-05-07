'use strict'

export default class Action {

  constructor(state) {
    this.state = state
    this.MEDIA_OPTIONS = { audio: false, video: true }
  }

  ready (done) {
    this.videoContainer = document.getElementById(this.state.id)
    var p = navigator.getUserMedia(this.MEDIA_OPTIONS, (stream) => {
      try {
        this.videoContainer.src = window.URL.createObjectURL(stream)
        return done(null, { stream: stream, videoContainer: this.videoContainer }) 
      } catch (err) {
        return done(err, null)
      }
    }, err => done(err, null))
  }
}