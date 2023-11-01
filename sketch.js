function setup() {
    createCanvas(400, 400);
    background('gold');
  }
  
  function draw() {
    stroke('teal');
    fill('lime');
    
      if(mouseIsPressed) {
        rect(mouseX, mouseY, 20,20);
      }
  }