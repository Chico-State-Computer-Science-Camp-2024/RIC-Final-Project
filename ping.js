let s;
let xPos = 400;
let yPos = 200;

function setup() {
    createCanvas(screen.width - 30, screen.height -150);
    task(30);
}

function draw() {
    background("black");
    fill("red");
    rect(width - 100, 0, 100, 60);
    fill("white");
   
    text(s, width - 65, 45);
    textSize(40);

    circle(xPos, yPos, 50);
    if (xPos > width) {
        xPos -= 5;
    }
    else if (xPos < 0) {
        xPos
    }

    if (s === 0) {
        help
    hi
    }
    
    
}
function task(t) {
   if (t >= 0) {
    s = t;
    setTimeout(function(){
        task(t - 1);
    }, 1000)
}
}
