import React, { Component } from "react";
import { gsap } from "gsap";

class Cursor extends Component {
  constructor(props) {
    super(props);

    this.mouseX = 0;
    this.mouseY = 0;
    this.posX = 0;
    this.posY = 0;

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.cursor = document.querySelector(".cursor");
    this.follower = document.querySelector(".cursor-follower");

    document.addEventListener("mousemove", this.handleMouseMove);

    this.animation = gsap.to({}, {
      duration: 0.016,
      repeat: -1,

      onRepeat: () => {
        this.posX += (this.mouseX - this.posX) / 10;
        this.posY += (this.mouseY - this.posY) / 10;

        gsap.set(this.follower, {
          left: this.posX - 10,
          top: this.posY - 10,
        });

        gsap.set(this.cursor, {
          left: this.mouseX,
          top: this.mouseY,
        });
      },
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);

    if (this.animation) {
      this.animation.kill();
    }
  }

  handleMouseMove(e) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
  }

  render() {
    return (
      <>
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </>
    );
  }
}

export default Cursor;