'use strict'

import ReactDOM from 'react-dom'

export default class Action {

  constructor(Element) {
    this.element = ReactDOM.findDOMNode(Element)
    this.state = Element.state
    this.MEDIA_OPTIONS = { audio: false, video: true }
  }

  getElement () {
    return this.element
  }

  ready (done) {
    navigator.getUserMedia(this.MEDIA_OPTIONS, (stream) => {
      try {
        this.element.src = window.URL.createObjectURL(stream)
        return done(null, { stream: stream, element: this.elemeent }) 
      } catch (err) {
        return done(err, null)
      }
    }, err => done(err, null))
    return this;
  }
}