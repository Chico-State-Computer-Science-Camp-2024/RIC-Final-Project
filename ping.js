let s;
let xPos = innerWidth / 2;
let yPos = innerHeight / 2;
let pPos = innerHeight / 2;
let img;
let speed = 5;
let winScreen;
let side = 7;
let character;
let continueimg;
let yesimg;
let noimg;
let background1;



let tryagain;
let youlose;


function preload() {
    img = loadImage('image.png');
    winScreen = loadImage('youwin.png');
    character = loadImage('character.gif');
    background1 = loadImage('/images/tonyliq.png');
    continueimg = loadImage('/images/continuetext.png');
    yesimg = loadImage('/images/yes.png');
    noimg = loadImage('/images/no.png');

    youlose= loadImage('youlose.png');
    tryagain = loadImage('/images/tryagaintext.png');
    yesimg2 = loadImage('/images/yes.png');
    noimg2 = loadImage('/images/no.png');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    task(2);
}

let music2 = new Audio('battletheme.mp3');
document.addEventListener('DOMContentLoaded', function() {
    music2.autoplay = true;
    music2.play().catch;
});

function draw() {
    background(background1);
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
        } else if (yPos > innerHeight / 2 && yPos <= innerHeight / 2 + 1000) {
            speed = -speed;
            side = 9;
        } else {
            speed = -speed;
            side = 9;
        }
    } else if (xPos >= Math.floor((innerWidth * 1 / 4) - 10) && xPos <= Math.floor((innerWidth * 1 / 4) + 10)) {
        console.log(yPos)
        speed = -speed;
        if (keyIsDown(65)) {
            side = 0;
        } else if ((keyIsDown(68) && pPos == 162 && yPos == 325)) {
            side = 2;
        } else {
            side = 9;
        }
    }
    ballPos();
    xPos += speed;
    if (s === 0) {
        background('black');
        image(youlose, 766, 0, 300, 300);
        image(tryagain, 700, 200, 500, 500);
        image(noimg2, 970, 660, 200, 200);
        image(yesimg2, 701, 640, 220, 220);
        return;
    }

    
}


//if boss bar 0 ok ten //  Win screen, make sure to add it when the boss's health bar is empty
        // background('black');
        // image(winScreen, 766, 0, 300, 300);
        // image(continueimg, 700, 200, 500, 500);
        // image(noimg, 970, 660, 200, 200);
        // image(yesimg, 701, 640, 220, 220);

function task(t) {
    if (t >= 0) {
        s = t;
        setTimeout(function() {
            task(t - 1);
        }, 1000);
    }
}

function ballPos() {
    if (side === 0) {
        yPos -= 2;
    } else if (side === 1) {
        yPos += 2;
    } else if (side === 2) {
        yPos += 2;
    } else if (side === 3) {
        yPos += 2;
    } else if (side === 9) {
        yPos += 0;
    }
}

function playerMove() {
    if (keyIsDown(87) && pPos > (innerHeight / 2) - innerWidth / 4 + 100) {
        pPos -= 3.5;
    }

    if (keyIsDown(83) && pPos <= ((innerHeight / 2) + innerWidth / 4) - 400) {
        pPos += 3.5;
    }
}

function mousePressed() {
    if (mouseX > 970 && mouseX < 970 + 200 && mouseY > 660 && mouseY < 660 + 200) {
        window.location.href = "index.html";
    } else if (mouseX > 701 && mouseX < 701 + 220 && mouseY > 640 && mouseY < 640 + 220) {
        window.location.href = "index3.html";
    }
}




