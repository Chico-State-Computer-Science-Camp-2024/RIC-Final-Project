let s;

function setup() {
    createCanvas(800, 400);
    task(30);
}

function draw() {
    background("black");
    fill("red");
    rect(0, 0, 60, 40);
    fill("white");
   
    text(s, 100, 100);
    textSize(20);

    if (s === 0) {
        
    
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
