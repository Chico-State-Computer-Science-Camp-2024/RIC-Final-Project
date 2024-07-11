document.addEventListener('DOMContentLoaded', function() {
    let pos = document.getElementById('dis');
    pos.style.bottom = -2000 + 'px';
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