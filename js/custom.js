$(function () {

    $('.main_visual .main_visual_slide').on('init afterChange', function () {
        const current = $('.main_visual .main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_visual .main_visual_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnActive: false,
    });

    $('.main_visual .main_visual_slide_arrows .left').on('click', function () {
        $('.main_visual .main_visual_slide').slick('slickPrev');
    });

    $('.main_visual .main_visual_slide_arrows .right').on('click', function () {
        $('.main_visual .main_visual_slide').slick('slickNext');
    });

    $('.main_visual .wheel').on('click', function (e) {
        e.preventDefault();
        console.log($(this.hash).offset().top);
        let H = $(this.hash).offset().top;
        $('html, body').animate({ scrollTop: H }, 800)
    });

    $('.main_menu .main_menu_slide').on('init afterChange', function () {
        const current = $('.main_menu .main_menu_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_menu .main_menu_slide').slick({
        slidesToShow: 5,
        rtl: true,
        autoplay: true,
        centerMode: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
    });

    const sl_txt = ['노력', '매출', '컨셉'];

    $('.main_solution .slide1').on('init afterChange', function (e, s, c) {
        //$('.main_solution .solution_wrap .con:nth-of-type(1) .num')
        // .text('0' + (c ? c + 1 : 1));
        $('.main_solution .solution_wrap .con:nth-of-type(1) .num')
            .text(c ? sl_txt[c] : sl_txt[0]);
    });

    $('.main_solution .slide1').slick({
        vertical: true,
        arrows: false,
        asNavFor: '.main_solution .slide4, .main_solution .slide2',
    });

    $('.main_solution_slide_arrows .left').on('click', function () {
        $('.main_solution .slide1').slick('slickPrev');
    });

    $('.main_solution_slide_arrows .right').on('click', function () {
        $('.main_solution .slide1').slick('slickNext');
    });

    $('.main_solution .slide2').slick({
        arrows: false,
        asNavFor: '.main_solution .slide4, .main_solution .slide1',
        autoplay: true,
    });

    $('.main_solution .slide4').slick({
        arrows: false,
        rtl: true,
        asNavFor: '.main_solution .slide2, .main_solution .slide1',
        autoplay: true,
    });

    $('.__top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });



    // $('.main_visual .main_visual_slide').on('afterChange', function () {
    //     const current = $('.main_visual .main_visual_slide .slick-current');
    //     current.addClass('on').siblings().removeClass('on');
    // });
})