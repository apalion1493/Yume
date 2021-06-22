import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import 'owl.carousel/dist/owl.carousel';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';

$(function(){
    $(".wrapper-tabs .tab").click(function() {
        $(".wrapper-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
})



$('.owl-carousel-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:true,
})

$('.owl-carousel-team').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    dots:false,
    autoHeight:true,
})

$(function() {
    var owl = $('.owl-carousel-photo'),
        owlOptions = {
            loop:true,
            nav:true,
            items:1,
            dots:false,
            autoHeight:true,
        };

    if ( $(window).width() < 768 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width()  < 768 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
})

$('.wrapper-tabs__btn-open').click(function () {
    $(this).parent().parent().addClass('show')
})

$('.wrapper-tabs__btn-close').click(function () {
    $(this).parent().parent().removeClass('show')
})

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle") && !clickover.hasClass('navbar-collapse')) {
        $navbar.collapse('hide');
    }
});


$(document).ready(function(){
    $("a.animateLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});
