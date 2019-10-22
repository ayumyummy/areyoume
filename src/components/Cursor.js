import React, { Component } from "react";
// import InlineSVG from "svg-inline-react";
import { TweenMax } from "gsap/TweenMax";

class Cursor extends Component {

  constructor(props) {
    super(props)
    this.cursorIcon = this.cursorIcon.bind(this)
  }
  componentDidMount() {
    this.cursorIcon()
  }

  cursorIcon() {
    let cursor = document.querySelector('.cursor'),
        follower = document.querySelector(".cursor-follower");

   let posX = 0,
       posY = 0;

   let mouseX = 0,
       mouseY = 0;

   TweenMax.to({}, 0.016, {
     repeat: -1,
     onRepeat: function() {
       posX += (mouseX - posX) / 10;
       posY += (mouseY - posY) / 10;

       TweenMax.set(follower, {
           css: {    
           left: posX - 10,
           top: posY - 10
           }
       });

       TweenMax.set(cursor, {
           css: {    
           left: mouseX,
           top: mouseY
           }
       });
     }
   });

    document.addEventListener('mousemove', (e) => {
       mouseX = e.pageX;
       mouseY = e.pageY;
   });

};

  render() {
    return (
      <>
     <div className="cursor"></div>
      <div className="cursor-follower"></div>
     </>
    )
  }
}
export default Cursor



