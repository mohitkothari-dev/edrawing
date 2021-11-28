import React from 'react';
import './Canvas.css';
import Sketch from 'react-p5';

function Canvas() {

    let setup = (p5) => {
        p5.createCanvas(p5.windowWidth,p5.windowHeight);
    }

    let draw = (p5) => {
        p5.background(220);
    }

    let windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth,p5.windowHeight);
    }

    return (
        <div className="canvas">
            <Sketch setup={setup} draw={draw} windowResized={windowResized} ></Sketch>            
        </div>
    )
}

export default Canvas
