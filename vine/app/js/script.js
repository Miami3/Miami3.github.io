$(document).ready(function () {
    // Toggle menu
    toggleMenu();
});

function toggleMenu(){
    $('.burger').on('click',function(){
       $('.main-menu').slideToggle();
    });
}
