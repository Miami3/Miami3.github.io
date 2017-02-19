$(document).ready(function () {
   // Subscribe&screen2
   screen2();

   // Share&screen3
   screen3();
});

function screen3() {
    $('.share__facebook').on('click',function () {
       $('.second__section').css('display','block').slideToggle(1000);
       $('.third__section').css('display','flex');
       $('.main__wrapper').css('background-image','url(../img/bg-3.jpg)');
    });
}

function screen2(){
    $('.main_form').on('submit',function(e){
        e.preventDefault();
        $('.first__section').slideToggle(1000);
        $('.second__section').css('display','flex');
        $('.main__wrapper').css('background-image','url(../img/bg-2.jpg)');
    });
}
