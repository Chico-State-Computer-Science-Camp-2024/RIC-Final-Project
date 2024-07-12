document.addEventListener('DOMContentLoaded', function() {
  let pos = document.getElementById('dis');
  pos.style.bottom = -1620 + 'px';
  function draw() {
    if (pos) {
      pos.style.position = 'fixed';
      let bottomValue = parseInt(pos.style.bottom, 10) || 0;   

      pos.style.right = 1/2 * screen.width + 'px';     
      function move() {
        if (bottomValue <= screen.height) {
          bottomValue += 1;
          pos.style.bottom = bottomValue + 'px';

          requestAnimationFrame(move);
        }
      }
     
      move();
  }
 }
  draw();
 });   

 let music2 = new Audio('lore.MP3');
document.addEventListener('DOMContentLoaded', function() {
  music2.autoplay = true;
  music2.play().catch;
});