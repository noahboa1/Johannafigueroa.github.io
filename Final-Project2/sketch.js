function setup()
{  
   createCanvas(800, 400);
   background('https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg');
   noStroke();
}

function draw()
{
    drawCircle();
    drawFace();
}

function drawCircle()
{
    fill('grey');
    background('black');
    ellipse(mouseX, mouseY, 25, 25);
    
}

function drawFace()
{
    fill(229, 194, 152);
    ellipse(775, 200, 100, 200);
    triangle(720, 185, 730, 160, 725, 185);
    fill('black');
    ellipse(725, 235, 50, 50);
    ellipse(765, 150, 10, 20);
}
