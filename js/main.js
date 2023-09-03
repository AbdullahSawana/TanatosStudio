$(function () {
    "use strict";

    // Height Intro Depend Height Window
    let paddingDestance = ($("header").height() - $(".intro").height()) / 2
    $("header .intro").css({
        paddingTop: paddingDestance
    });
    // =============================================================================

    // Animate Arrow 
    (function topAndDown() {
        $("header .arrow i").animate({
            'padding-bottom': "30px"
        }, 500, function () {
            $(this).animate({
                'padding-bottom': "0"
            }, 500, function () {
                topAndDown()
            })
        })
    }())

    // =============================================================================

    // Scroll Features Section
    $("header .arrow i").on("click", function () {
        $("html, body").scrollTop($(".features").offset().top);
    });

    // =============================================================================

    // Scroll Out Works Section
    $("header .our-work").on("click", function () {
        $("html, body").scrollTop($(".our-works").offset().top);
    });

    // =============================================================================
    // Scrolling Btn
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $(".scrolling").fadeIn(500);
        } else {
            $(".scrolling").fadeOut(500);
        }
    })

    // When Click Scrolling Btn
    $(".scrolling").on("click", function () {
        $(window).scrollTop(0);
    })
    // =============================================================================

    // Scroll Out Team Section
    $("header .hire").on("click", function () {
        $("html, body").scrollTop($(".our-team").offset().top);
    });

    // =============================================================================

    //  Subscribe Secions

    // When click Subscribe btn
    $(".subscribe .submit").on("click", function (e) {
        if ($(".subscribe .subscribe-input").val() == '') {
            e.preventDefault();
        }
    });

    // Placeholder Variable
    let placeholderValue = $(".subscribe .subscribe-input").attr("placeholder");
    $(".subscribe .subscribe-input").on("focus", function () {
        $(this).attr("placeholder", '');
    }).blur(function () {
        $(this).attr("placeholder", placeholderValue);
    })

    let emails = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
    let finalEmail = "";

    $(".subscribe .subscribe-input").on("keyup", function () {

        finalEmail = "";

        if (!$(this).next().is(".emails")) {
            $("<ul class='emails'></ul>").insertAfter($(this));
        }

        for (let i = 0; i < emails.length; i++) {
            finalEmail += '<li>' + $(this).val() + "@" + emails[i] + '</li>'
        }

        $(this).next(".emails").html(finalEmail)
    })

    // Choose Email
    $("body").on("click", ".emails li", function () {
        $(".subscribe .subscribe-input").val($(this).html());
        $(this).parent().fadeOut().remove();
    })

    // =============================================================================

    // Show Hidden Our Work
    $(".our-works .show-more").on("click", function () {
        if ($(this).text() == "Show More") {
            $(".our-works .hidden").slideDown();
            $(this).text("Show Less");
        } else {
            $(".our-works .hidden").slideUp();
            $(this).text("Show More");
        }
    })

    // =============================================================================

    // Animate Testimoinals

    // Function Next
    function next() {
        if ($(".testimonials .client:last").hasClass("active")) {

            $(".testimonials .active").fadeOut(100, function () {
                $(this).removeClass("active");
                $(".testimonials .client:first").fadeIn().addClass("active");
            })

        } else {

            $(".testimonials .active").fadeOut(100, function () {
                $(this).removeClass("active").next(".client").fadeIn().addClass("active");
            })

        }
    }

    // Function Previous
    function prev() {
        if ($(".testimonials .client:first").hasClass("active")) {

            $(".testimonials .active").fadeOut(100, function () {
                $(this).removeClass("active");
                $(".testimonials .client:last").fadeIn().addClass("active");
            })

        } else {

            $(".testimonials .active").fadeOut(100, function () {
                $(this).removeClass("active").prev(".client").fadeIn().addClass("active");
            })

        }
    }
    // Animate When Click Arrow Right
    $(".testimonials .next").on("click", next);
    $(".testimonials .prev").on("click", prev);

    // Repeat Function Next
    setInterval(next, 10000);

    // =============================================================================

    // Animate Our Team Person
    $(".our-team .person").hover(function () {
        $(this).animate({
            top: "-20px"
        }, 50)
    }, function () {
        $(this).animate({
            top: "0"
        }, 50)
    })

    // =============================================================================

    // Contact Dynamic

    // Placeholder Variable
    let placeholder = $(".contact .contact-input").attr("placeholder");
    $(".contact .contact-input").on("focus", function () {
        $(this).attr("placeholder", '');
    }).blur(function () {
        $(this).attr("placeholder", placeholder);
    });

    let email = $('.contact input[name="mail"]');
    let subject = $('.contact input[name="subject"]');
    let textArea = $('.contact textarea[name="message"]');

    $(".contact form input[type='submit']").on("click", function (e) {
        let emailValid = false;
        let subjectValid = false;
        let textAreaValid = false;

        if (textArea.val() !== '') {
            textAreaValid = true;
        } else {
            $('.msg').text('Plz Enter Message').fadeIn().delay(2000).fadeOut();
        }

        if (subject.val() !== '') {
            subjectValid = true;
        } else {
            $('.msg').text('Plz Enter Subject').fadeIn().delay(2000).fadeOut();
        }

        if (email.val() !== '') {
            emailValid = true;
        } else {
            $('.msg').text('Plz Enter Email').fadeIn().delay(2000).fadeOut();
        }

        if (emailValid === false || subjectValid === false || textAreaValid === false) {
            e.preventDefault();
        }
    })

});
