import React, { Component } from 'react';
import { ChromePicker } from 'react-color'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch';

console.log(sketch);
class App extends Component {
  colorChange = (e) => {
    console.log(e);
  }
  // componentDidMount() {
  //   function setup() {
  //     createCanvas(400, 400);
  //     background(220)
  //   }

  //   let leftX = 120,
  //       Y = 85,
  //       rightX = 280;

  //   function draw() {
  //     noStroke()
  //     fill(255)
  //     arc(120, 85, 110, 60, PI, 100); 
  //     arc(280, 85, 110, 60, PI, 100);
      
  //     fill('#6999e5');
  //     ellipse(leftX, Y, 40, 40);
  //     ellipse(rightX, Y, 40, 40);
      
  //     fill(0)
  //     ellipse(leftX, Y, 20, 20);
  //     ellipse(rightX, Y, 20, 20);
  //     leftX = map(mouseX, 0, width, 100, 130);
  //     rightX = map(mouseX, 0, width, 260, 290);
  //     Y = map(mouseY, 0, width, 80, 90);
  //     if (mouseY < 120 && mouseY > 50 && mouseX < 210 && mouseX > 190) {
  //       leftX = 145;
  //       rightX = 255;
  //     }

  //   }
  // }
  render() {
    return (
      <div className="App">
        test
        <P5Wrapper sketch={sketch} />
        <ChromePicker onChange={this.colorChange} />
      </div>
    );
  }
}

export default App;
