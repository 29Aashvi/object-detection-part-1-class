img="";

function preload(){
img= loadImage(" flowers.jpg");
}

function setup(){
    canvas= createCanvas(420, 420);
    canvas.center();

}

function draw(){
    image(img, 0, 0, 420, 420);
    fill("#FF0000");
    text("Flowers", 45, 60);
    noFill();
    stroke("#FF0000");
    rect(40, 10, 350, 200);
}