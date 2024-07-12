let s;
let xPos = innerWidth / 2;
let yPos = innerHeight / 2;
let pPos = innerHeight / 2;
let img;
let speed = 5;
let winScreen;
let side = 7;
let character;
let boss;
let bPos = innerHeight / 2;
let lefthit;
let righthitp;
let saboss;

function preload() {
    img = loadImage('image.png');
    winScreen = loadImage('youwin.png');
    character1 = loadImage('character.gif');
    character = character1;
    boss1 = loadImage('boss.gif');
    boss = boss1;
    lefthit = loadImage('lefthitp.gif');
    righthit = loadImage('righthitp.gif');
    saboss = loadImage('sabosshit.gif');
}

function setup() {
    createCanvas(innerWidth, innerHeight);
    task(40);
    
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
    image(boss, innerWidth * 4 / 5 - 100, bPos, 300, 300);
    image(character, innerWidth * 1 / 5 - 100, pPos, 300, 300);
    playerMove();

 

if (yPos <= innerHeight && side == 7) {
    yPos += 2;
}
  
    if ((xPos >= Math.floor((innerWidth * 3 / 4) - 10) && xPos <= Math.floor((innerWidth * 3 / 4) + 10))) {
        if (bPos == 491 && yPos == 661) {
            boss = saboss;
            speed = -speed;
            let rand = Math.random() * 100;
            let = rand2 = Math.random() * 100;
            if (rand > 50) {
                bPos = 162;
            }
            else if (rand < 50){
                bPos = 491;
            }

            if (rand2 > 50) {
                side = 'left';
            }
            else {
                side = 'straight';
            }
        }
        if  (bPos == 162 && yPos == 325 ) {
            boss = saboss;
            speed = -speed;
            side = 9;
            rand = Math.random() * 100;
            let rand2 = Math.random() * 100;
            if (rand > 50) {
                bPos = 162;
            }
            else if (rand < 50){
                bPos = 491;
            }
            if (rand2 > 50) {
                side = 'right';
            }
            else {
                side = 'straight';
            }
        }
        if (boss != boss1) {
            setTimeout(function() {
                saboss.reset();
                boss = boss1;
            }, 1000);
        
        }
    }
    else if (xPos >= Math.floor((innerWidth * 1 / 4) - 10) && xPos <= Math.floor((innerWidth * 1 / 4) + 10)) {
        if ((keyIsDown(65) && ((pPos == 162 && yPos == 325) || (pPos == 519 && yPos == 661)))) {
        speed = -speed;
        character = lefthit;
        console.log('hit');
        side = 'left';
        }
        else if ((keyIsDown(68) && ((pPos == 162 && yPos == 325) || (pPos == 519 && yPos == 661)))) {
            speed = -speed;
            character = righthit;
            side = 'right';
        }
        else if (keyIsDown(32) && ((pPos == 162 && yPos == 325) || (pPos == 519 && yPos == 661))) {
            speed = -speed;
            side = 9;
        }
        else {
            s -= 5;
            speed = -speed;
            side = 'straight'
        }
        setTimeout(function() {
            character = character1;
            lefthit.reset();
            righthit.reset();
        }, 1000);
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
    if (side === 'left') {
        yPos -= 2;
    }
    else if (side === 'right') {
        yPos += 2;
    }
    else if (side === 2) {
        yPos += 2;
    }
    else if (side === 3) {
        yPos += 2;
 
    }
    else if (side == 'straight') {
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
