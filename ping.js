let s;
let xPos = innerWidth / 2;
let yPos = innerHeight / 2;
let pPos = innerHeight / 2;
let img;
let speed = 5;
let winScreen;
let side = 7;
let character;


function preload() {
    img = loadImage('image.png');
    winScreen = loadImage('youwin.png');
    character = loadImage('character.gif');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    task(30);
    
}

function draw() {
    background("black");
    fill("red");
    rect(width - 100, 0, 100, 60);
    fill("white");
   
    text(s, width - 65, 45);
    textSize(40);
    image(img, innerWidth * 1 / 4, innerHeight / 4, innerWidth / 2, innerHeight / 2);
    circle(xPos, yPos, 50);
    image(character, innerWidth * 1 / 5 - 100, pPos, 300, 300);
    playerMove();

if (yPos <= innerHeight && side == 7) {
    yPos += 2;
}
    
    if ((xPos >= Math.floor((innerWidth * 3 / 4) - 10) && xPos <= Math.floor((innerWidth * 3 / 4) + 10))) {
       if (yPos == innerHeight / 2) {
        speed = -speed;
        }
        else if (yPos > innerHeight / 2  && yPos <= innerHeight / 2 + 1000) {
            speed = -speed;
            side = 9;
        }
        else {
            speed = -speed;
            side = 9;
        }
    }
    else if (xPos >= Math.floor((innerWidth * 1 / 4) - 10) && xPos <= Math.floor((innerWidth * 1 / 4) + 10)) {
        console.log(yPos)
        speed = -speed;
        if (keyIsDown(65)) {
        side = 0;
        }
        else if ((keyIsDown(68) && pPos == 162 && yPos == 325)) {

            side = 2;
        }
        else {
            side = 9;
        }
    }
    ballPos();
   xPos += speed;

    if (s === 0) {
        background("black");
        image(winScreen, 0, 0, innerWidth, innerHeight);
        return;
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

function ballPos() {
    if (side === 0) {
        yPos -= 2;
    }
    else if (side === 1) {
        yPos += 2;
    }
    else if (side === 2) {
        yPos += 2;
    }
    else if (side === 3) {
        yPos += 2;
 
    }
    else if (side === 9) {
        yPos += 0;
    }
}

function playerMove() {
   
    if (keyIsDown(87) && pPos > (innerHeight / 2) - innerWidth / 4 + 100){
            pPos -= 3.5;
        }
    
    if (keyIsDown(83) && pPos <= ((innerHeight / 2) + innerWidth / 4) - 400) {
        pPos += 3.5;
    }
}
