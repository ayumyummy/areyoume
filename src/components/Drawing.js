import React, { Component } from "react";
import InlineSVG from "svg-inline-react";


const svgSource = `<svg id="line-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="173px" height="567.5px" viewBox="0 0 173 567.5" enable-background="new 0 0 173 567.5" xml:space="preserve">
<line id="line-path" fill="none" stroke-width="1" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" x1="86.5" y1="5" x2="86.5" y2="662.5"/>
  </svg>`;

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
let path = document.querySelector('#line-path');

// Get length of path... ~577px in this case
let pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

  // When the page scrolls...
  window.addEventListener("scroll", (e) => {
  

    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
    // Length to offset the dashes
    let drawLength = pathLength * scrollPercentage;
    
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
      

    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = "none";
      
    } else {
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }

  });

    
  }

  render() {
    return (
      <div className="draw-line-height">
      <InlineSVG src={svgSource} />
      </div>
     
    )
  }
}
export default DrawingLine



