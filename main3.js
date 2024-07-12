$(document).ready(function(){
    $(".CharSelect1").hover(function(){
        $(".paddleCursor").show();
    }, function(){
        
        $(".paddleCursor").hide();
    });

    $(".CharSelect2").hover(function(){
        $(".paddleCursor2").show();
    }, function(){
        $(".paddleCursor2").hide();
    });

});

let music2 = new Audio('cselect.mp3');
document.addEventListener('DOMContentLoaded', function() {
    music2.autoplay = true;
    music2.play().catch;
});