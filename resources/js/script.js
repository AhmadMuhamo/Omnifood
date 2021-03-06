$(document)
    .ready(function () {
        $('#features')
            .waypoint(function (direction) {
                if (direction == 'down') {
                    $('nav').addClass('sticky-nav');
                } else {
                    $('nav').removeClass('sticky-nav');
                }
            }, {
                offset: '60px;'
            });

        /* Smooth Scrolling */
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                // On-page links
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ?
                        target :
                        $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target
                                .offset()
                                .top - 60
                        }, 1000, function () {
                            // Callback after animation Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

        /* Scrolling Animations */
        $('.features-animate').waypoint(function (direction) {
            $('.features-animate').addClass('animated fadeIn');
        }, {
            offset: '70%'
        });

        $('.steps-animate').waypoint(function (direction) {
            $('.app-screen').addClass('animated bounceInLeft');
            $('.steps').addClass('animated bounceInRight');
        }, {
            offset: '70%'
        });

        $('.cities-animate').waypoint(function (direction) {
            $('.cities-animate').addClass('animated fadeInUp');
        }, {
            offset: '70%'
        });

        $('.plan-box-animate').waypoint(function (direction) {
            $('.plan-box-animate').addClass('animated pulse');
        }, {
            offset: '70%'
        });

        /* Navbar Collapse */
        $('#nav-collapse').click(function () {
            var nav = $('#main-nav');
            var icon = $('.nav-collapse i');
            nav.slideToggle(200);

            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
        });
    });