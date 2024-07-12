let s = 60;
let xPos = innerWidth / 2;
let yPos = innerHeight / 2;
let pPos = innerHeight / 2;
let img;
let speed = 5;
let winScreen;
let side = 7;
let character;
let straightshot;
let boss;
let bPos = innerHeight / 2;
let lefthit;
let righthitp;
let saboss;
let continueimg;
let yesimg;
let noimg;
let health = [];
let n = 0;

let background1;


function preload() {
    img = loadImage('image.png');
    winScreen = loadImage('youwin.png');
    character1 = loadImage('jigobidle.gif');
    character = character1;
    boss1 = loadImage('boss.gif');
    boss = boss1;
    lefthit = loadImage('jigoblefthit.gif');
    righthit = loadImage('jigobRighthit.gif');
    saboss = loadImage('sabosshit.gif');
    background1 = loadImage('/images/tonyliq.png');
    continueimg = loadImage('/images/continuetext.png');
    yesimg = loadImage('/images/yes.png');
    noimg = loadImage('/images/no.png');
    straightshot = loadImage('jigobstraight.gif');
    for (let i = 0; i < 7; i++) {
        health.push(loadImage('healthbar' + i + '.png'));
    }
}



function setup() {
    createCanvas(innerWidth, innerHeight);

    task(s);
    
}

function draw() {
    background(background1);
    fill("red");
    rect(width - 100, 0, 100, 60);
    fill("white");
   
    text(s, width - 65, 45);
    textSize(40);
    image(img, innerWidth * 1 / 4, innerHeight / 4, innerWidth / 2, innerHeight / 2);
    circle(xPos, yPos, 50);
    image(boss, innerWidth * 4 / 5 - 100, bPos, 300, 300);
    image(character, innerWidth * 1 / 5 - 100, pPos, 300, 300);
    image(health[n], innerWidth / 2 - 250, 0, 500, 200);
    playerMove();

 if (xPos > innerWidth) {
    xPos = innerWidth / 2;
    yPos = 493;
    pPos = innerHeight / 2;
    speed = -speed;
    side = 'right';
 }

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
            n++;
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
        if (xPos >= innerWidth * 4 / 5 - 100) {
            s -= 1;      
        }
    }
    else if (xPos >= Math.floor((innerWidth * 1 / 4) - 10) && xPos <= Math.floor((innerWidth * 1 / 4) + 10)) {
        if ((keyIsDown(65) && ((pPos == 162 && yPos == 325) || (pPos == 519 && yPos == 661)))) {
        speed = -speed;
        character = lefthit;
        side = 'left';
        }
        else if ((keyIsDown(68) && ((pPos == 162 && yPos == 325) || (pPos == 519 && yPos == 661)))) {
            speed = -speed;
            character = righthit;
            side = 'right';
        }
        else if (keyIsDown(32) && ((pPos == 162 && yPos == 325) || (pPos == 519 && yPos == 661))) {
            character = straightshot;
            speed = -speed;
            side = 'straight';
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
            straightshot.reset();
        }, 1000);
    }
    ballPos();
   xPos += speed;

   /* if (s <= 0) {
        background("black");
        image(winScreen, 590, 0, 300, 300);
        image(continueimg, 500, 200, 500, 500);
        image(noimg, 800, 660, 200, 200); 750, 660
        image(yesimg, 500, 640, 220, 220);550, 650     
         
    }
        */
       if (n == 0) {
        background("black");
        image(winScreen, 590, 0, 300, 300);
        image(continueimg, 500, 200, 500, 500);
        image(noimg, 800, 660, 200, 200); 750, 660
        image(yesimg, 500, 640, 220, 220);550, 650
       }
    
   
}
function task() {
    if (s > 0) {
        s -= 1; // Decrement the global time variable directly
        setTimeout(task, 1000); // Call task again after 1 second
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
let music2 = new Audio('battletheme.mp3');
document.addEventListener('DOMContentLoaded', function() {
  music2.autoplay = true;
  music2.play().catch;
});