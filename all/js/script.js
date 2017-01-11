$(document).ready(function(){
    ShowSecondSubmenu();
    MobileSearch();
    SecondSubMenuOnclick();
    ShowSubList();
    LabelStyles();
    showFooterMenu();
    showMobileMenu();
});
function ShowSubList() {

    $('.main-nav>li').click(function () {
            var state = $(this).children('.submenu').css('display');
            var state2 = $(this).find('.second-submenu').css('display');
            console.log(state2);
            $('.submenu').slideUp(100);
            if (state === 'none' && state2 === 'none') {
                $(this).children('.submenu').slideDown(400);
            }
            else {
                $(this).children('.submenu').slideUp(400);
            }
        }
    );
}

function ShowSecondSubmenu(){
    console.log($(window).width());
    if ($(window).width() >= 1035) {
        $('.submenu li').hover(
            function () {
                $(this).parent('.submenu').css('height', 'auto');
                $(this).children('.second-submenu').css('height', 'auto');
                var submenuHeight = $(this).parent('.submenu').height();
                var secondSubMenu = $(this).children('.second-submenu').height();
                if (submenuHeight > secondSubMenu) {
                    $(this).children('.second-submenu').css('height', submenuHeight);
                }
                else {
                    $(this).parent('.submenu').css('height', secondSubMenu);
                }
                $(this).children('.second-submenu').addClass('show');
            },
            function () {
                $('.second-submenu', this).removeClass('show');
            }
        );
    }
    else {
        $('.submenu li').click(
            function () {
                $(this).children('.second-submenu').slideToggle(400);
            });
    }
}

function SecondSubMenuOnclick() {
    $('.submenu li').click(
        function(){
            $(this).children('.second-submenu').slideToggle(400);
        }
    );
}

function MobileSearch(){
    $('.mobile-search-icon').click(
        function(){
            $('.navigation-section-mobile').slideToggle(200);
            $('.mobile-search-icon').toggleClass('hover-search-icon');
        }
    );
}

function LabelStyles(){
    $('p>input').click(
        function(){
            $(this).siblings('label').css('opacity','0.5');
        }
    );
    $('p>input').keypress(
        function() {
            $(this).siblings('label').css('display', 'none');
        }
    );
    $('p>input').blur(function () {
        var text = $(this).val().length;
        console.log(text === 0);
    if( text === 0){
            $(this).siblings('label').css('display', 'block');
            $(this).siblings('label').css('opacity','1');
        }
});
}

function showFooterMenu(){
        $('.footer-menu-title').click(
            function () {
                if ($(window).width() <= 768) {
                    $(this).next('.footer-menu').slideToggle(400);
                    $(this).children('.expand-icon').toggleClass('rotate');
                }
            }
        );
}

function showMobileMenu(){
    $('.burger').click(
        function(){
            $('.main-nav').slideToggle(400);
        }
    );
}