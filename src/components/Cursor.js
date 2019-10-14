import React, { Component } from "react"
import { TweenMax } from "gsap/all"
// import styled from "styled-components"

class Cursor extends Component {

    constructor(props) {
        super(props)
        this.createCursor = this.createCursor.bind(this)
    }

    componentDidMount() {
        this.createCursor()
    }

    createCursor() {
        const cursor = this.cursor;

        let posX = 0,
            posY = 0;

        let mouseX = 0,
            mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        })

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 10;
                posY += (mouseY - posY) / 10;

                

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });


        let anchors = document.getElementsByTagName("A");
        let buttons = document.getElementsByTagName("BUTTON");

        if (anchors) {
            for (let i = 0; i < anchors.length; i++) {
                anchors[i].addEventListener("mouseenter", () => {
                    cursor.classList.add("active");
                  
                    console.log('hovered')
                });
            }
            for (let i = 0; i < anchors.length; i++) {
                anchors[i].addEventListener("mouseleave", () => {
                    cursor.classList.remove("active");
                });
            }
        };
        
        if (buttons) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("mouseenter", () => {
                    cursor.classList.add("active");
                });
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("mouseleave", () => {
                    cursor.classList.remove("active");
                });
            }
        };

    }

    render() {
        return (
            <>
                <Cursor ref={cursor => this.cursor = cursor} />
               
            </>
        )
    }
}


export default Cursor