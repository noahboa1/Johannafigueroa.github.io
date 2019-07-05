    
function setup()
{  
   createCanvas(800, 400);
   background('black');
   noStroke();
}

function draw()
{
    drawCircle();
}

function drawCircle()
{
    background('black');
    ellipse(mouseX, mouseY, 25, 25);
    
}