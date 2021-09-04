function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#ff1100");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 80, 300, 300);
}