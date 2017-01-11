// Run scrpits after page is load

$(document).ready(function(){

    // Menu burger
    burgerAction();

    // Make navigation bg white after scrolling
    whiteNav();

    // Testimonials Carousel
    $('#clients-carousel').carousel({
        interval: 9000
    });

    // Highlight Active Menu Item
    highLightActiveMenu();

    // Smooth Scrolling to all links
    smoothScrolling();

});


// Functions list
function whiteNav(){
        $(window).on('scroll', function () {
            if (window.innerWidth > 1150){
                if ($("body").scrollTop() > 50) {
                $('nav').css({"padding": "15px 50px", "background-color": "#fff", "box-shadow":"0px 0px 2px 0px rgba(0,0,0,0.65)"});
                }
                else {
                $('nav').css({"padding": "30px 50px", "background-color": "transparent","box-shadow":"none"});
                }
            }
            else {
                if ($("body").scrollTop() > 50) {
                    $('nav').css({"padding": "15px 30px", "background-color": "#fff", "box-shadow":"0px 0px 2px 0px rgba(0,0,0,0.65)"});
                }
                else {
                    $('nav').css({"padding": "15px 30px", "background-color": "transparent","box-shadow":"none"});
                }
            }
        });
}

function burgerAction(){
    $('.burger-wrapper').on('click',function(){
       $('.main-nav').slideToggle(400);
       $('nav').toggleClass('white-nav');
    });
}

// HighLight menu item

function highLightActiveMenu(){
    var section = {
        about: $('#about-section').offset().top,
        services: $('#services-section').offset().top,
        clients: $('#clients-section').offset().top,
        impact: $('#impact-section').offset().top,
        contact: $('#contact-section').offset().top
    };

    $(window).scroll(function () {
        var current = $(this).scrollTop()+55;

        if(current < section.services){
            $('.main-nav a[href="#services-section"]').removeClass('active');
        }

        if(section.services < current && current < section.clients){
            $('.main-nav a').removeClass('active');
            $('.main-nav a[href="#services-section"]').addClass('active');
        }

        if(section.clients < current && current < section.about){
            $('.main-nav a').removeClass('active');
            $('.main-nav a[href="#clients-section"]').addClass('active');
        }

        if(section.about < current && current < section.impact){
            $('.main-nav a').removeClass('active');
            $('.main-nav a[href="#about-section"]').addClass('active');
        }

        if(section.impact < current && current < section.contact){
            $('.main-nav a').removeClass('active');
            $('.main-nav a[href="#impact-section"]').addClass('active');
        }

        if(section.contact < current){
            $('.main-nav a').removeClass('active');
            $('.main-nav a[href="#contact-section"]').addClass('active');
        }

    });

    $('a[href="#header-section"]').on('click',function(){
        $('.main-nav a').removeClass('active');
    });

}


// Smooth scrolling

function smoothScrolling(){
    // Add smooth scrolling to all links
    $('a').not('a.carousel-control').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top-1
            }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
}

