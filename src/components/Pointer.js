import React from "react"
// import cursor from '../assets/images/ca.svg'

class Pointer extends React.Component {
  state = {
    mouseX: 0,
    mouseY: 0,
    body: document.body
  }
  handleMouseMove = (e) => {
    const { pageX, pageY} = e;
    this.setState({
      mouseX: pageX,
      mouseY: pageY,
    })
  }
  render = () => {
    const {
      mouseX,
      mouseY
    } = this.state;
    return (
      <div
      className="cursor"
      style={{
        left: mouseX,
        top: mouseY
      }}>
      
      </div>
    )
  }
}

export default Pointer