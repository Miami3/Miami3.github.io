$(document).ready(
    Share (),
    showMobileMenu()
);

function Share() {
    $('.share').click(function(){$('.social-list').slideToggle(500);})
}

function showMobileMenu() {
    $('.menu-icon').click(
        function(){
            $('.mobile-nav').slideToggle(500);
        }
    )
}