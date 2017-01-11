// Run scrpits after page is load

$(document).ready(function(){

    // Play Video
    playVideo();

    // Show menu
    showMenu();

    // Toogle Arrow
    toggleArrow();

});


// Functions list
function playVideo(){
    $('.play-button').on('click',function () {
        $('.video').get(0).play();
        $('.play-button').css({'display':'none'});
        //$(window).scrollTop($('nav').height()+20);
    });

    $('.video').on('pause', function(){
        $('.play-button').css({'display':'block'});
    });
    $('.video').on('click', function () {
        $('.video').get(0).pause();
    });
}

function showMenu(){
    $('.burger').on('click',function(){
       $('.main-nav').slideToggle(300);
    });
}


function toggleArrow() {
    $('.panel').on('click',function(){
        var i = $(this).find('.arrow');
        i = i.find('i');
        console.log(i);
        var collapse = $(this).find('.panel-collapse');
        if(!collapse.hasClass('in')){
            $('.arrow i').removeClass('fa-angle-up').addClass('fa-angle-down');
            i.removeClass('fa-angle-down').addClass('fa-angle-up');
            i.css({'margin':'3px 0 0 12px'});
        }
        else {
            i.removeClass('fa-angle-up').addClass('fa-angle-down');
            i.css({'margin':'7px 0 0 12px'});
        }
    });
}