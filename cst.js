$(document).ready(function() {
    function n() {
        window.addEventListener("scroll", function() {
            var t = window.pageYOffset || document.documentElement.scrollTop,
                n = document.querySelector("header");
            t > 100 ? classie.add(n, "smaller") : classie.has(n, "smaller") && classie.remove(n, "smaller")
        })
    }
    window.onload = n();
    $(".wrapper").append("<p class='back-top'><a href='#top' title='top'>&nbsp;<\/a><\/p>");
    $(".back-top").hide();
    $(function() {
        $(window).scroll(function() {
            $(this).scrollTop() > 100 ? $(".back-top").fadeIn() : $(".back-top").fadeOut()
        });
        $(".back-top a").click(function() {
            return $("body,html").animate({
                scrollTop: 0
            }, 800), !1
        })
    });
    $(".collapse-btn").click(function() {
        $(".collapseOpt").slideDown(1e3)
    });
    $(".collapseOpt .close").click(function() {
        $(".collapseOpt").slideUp(1e3)
    });
    $(".multiple-items").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $(".multiple-items2").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $(".single-item").slick({
        dots: !0,
        infinite: !0,
        speed: 2e3,
        autoplay: !0,
        autoplaySpeed: 2e3
    });
    $(".single-item-2").slick({
        infinite: !0,
        speed: 1e3
    });
    $(".single-item-3").slick({
        infinite: !0,
        speed: 1e3,
        arrows: !1,
        dots: !0,
        adaptiveHeight: !0
    });
    $("#collapseOne").addClass("in");
    var t = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase());
    t && $(".nav-view").removeClass("pull-right navmenu main-menu")
});
$(".nav-over").hide();
$(".nav-over").click(function() {
    $(".wrapper").animate({
        right: 0
    }, "slow", function() {});
    $("#navbar").animate({
        right: -250
    }, "slow", function() {});
    $(".nav-over").hide();
    $(".navbar-header button").addClass("active");
    $("#navbar").removeClass("collapse")
});
$("#button-nav").click(function() {
    $(".navbar-header button").hasClass("active") ? ($(".navbar-header button").removeClass("active"), $(".wrapper").animate({
        right: 216
    }, "slow", function() {}), $("#navbar").animate({
        right: 0
    }, "slow", function() {}), $(".nav-over").show()) : ($(".navbar-header button").addClass("active"), $(".wrapper").animate({
        right: 0
    }, "slow", function() {}), $("#navbar").animate({
        right: -250
    }, "slow", function() {}), $(".nav-over").hide())
});
$(document).ready(function() {
    $("a[name='scrollToForm']").val() != undefined && $("a[name='scrollToForm']") != null && (window.location.hash = "scrollToForm");
    $(".closeall").click(function() {
        $(".panel-collapse.in").collapse("hide")
    });
    $(".openall").click(function() {
        $('.panel-collapse:not(".in")').collapse("show")
    });
    $(".carouselbanner").on("afterChange", function(n, t, i) {
        var i = $(t.$slides[i]),
            r = i.data("interval");
        $(".carouselbanner").slick("slickSetOption", "autoplaySpeed", r, !0)
    })
})