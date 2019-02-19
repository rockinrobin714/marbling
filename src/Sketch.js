export default function sketch (p) {
  let rotation = 0;
  let leftX = 120,
    Y = 85,
    rightX = 280;
  
  p.setup = function () {
    p.createCanvas(300, 300, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    // p.background(100);
    // p.noStroke();
    // p.push();
    // p.rotateY(rotation);
    // p.box(100);
    // p.pop();
    p.noStroke()
    p.fill(255)
    p.arc(120, 85, 110, 60, Math.PI, 100); 
    p.arc(280, 85, 110, 60, Math.PI, 100);
    
    p.fill('#6999e5');
    p.ellipse(leftX, Y, 40, 40);
    p.ellipse(rightX, Y, 40, 40);
    
    p.fill(0)
    p.ellipse(leftX, Y, 20, 20);
    p.ellipse(rightX, Y, 20, 20);
    leftX = p.map(p.mouseX, 0, p.width, 100, 130);
    rightX = p.map(p.mouseX, 0, p.width, 260, 290);
    Y = p.map(p.mouseY, 0, p.width, 80, 90);
    if (p.mouseY < 120 && p.mouseY > 50 && p.mouseX < 210 && p.mouseX > 190) {
      leftX = 145;
      rightX = 255;
    }
  }
}