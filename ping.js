let s;

function setup() {
    createCanvas(800, 400);
    task(30);
}

function draw() {
    background("black");
    fill("red");
    rect(width - 100, 0, 100, 60);
    fill("white");
   
    text(s, width - 65, 45);
    textSize(40);

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
