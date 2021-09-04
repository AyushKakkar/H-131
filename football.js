function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function preload(){
    img = loadImage('football.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#ff1100");
    text("Man", 200, 95);
    text("Football", 490, 305);
    noFill();
    stroke("#FF0000");
    rect(200, 100, 300, 300);
    rect(490, 310, 50, 50)
}