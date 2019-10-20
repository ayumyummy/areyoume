import React, { Component } from "react";

class DrawingLine extends Component {

  constructor(props) {
    super(props)
    this.drawingLine = this.drawingLine.bind(this)
  }
  componentDidMount() {
    this.drawingLine()
  }
  componentWillUnmount() {
    this.drawingLine()
  }

  drawingLine() {
    // Get a reference to the <path>
    let path = document.querySelector("#line-path");

    // Get length of path... ~577px in this case
    let pathLength = path.getTotalLength();

    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + " " + pathLength;

    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength;

    // Jake Archibald says so
    // https://jakearchibald.com/2013/animated-line-drawing-svg/
    path.getBoundingClientRect();

    
  }

  render() {
    return (
      <>
        <Cursor ref={cursor => this.cursor = cursor} />
        <CursorFollower ref={cursorFollower => this.cursorFollower = cursorFollower} />
      </>
    )
  }
}
export default DrawingLine



