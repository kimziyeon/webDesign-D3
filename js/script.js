$(function () {

    // 헤더
    $('nav>ul>li').mouseenter(function () {
        $('.sub,.n_back').stop().fadeIn();
        $(this).children('a').addClass('on');
    })

    $('nav>ul>li').mouseleave(function () {
        $('.sub,.n_back').stop().fadeOut();
        $(this).children('a').removeClass('on');
    })

    $('nav>ul>li').focusin(function () {
        $('.sub,.n_back').stop().fadeIn();
        $(this).children('a').addClass('on');
    })

    $('nav>ul>li').focusout(function () {
        $('.sub,.n_back').stop().fadeOut();
        $(this).children('a').removeClass('on');
    })

    $('.sub>li').focusin(function () {
        $(this).children('a').addClass('on');
    })

    $('.sub>li').focusout(function () {
        $(this).children('a').removeClass('on');
    })

    // 슬라이드
    var s = 0;

    function slide() {
        if (s < 2) {
            s++;
        } else {
            s = 0;
        }
        $('.slide>ul>li').fadeOut();
        $('.slide>ul>li').eq(s).fadeIn();

    }
    setInterval(slide, 2000)


    // 탭

    $('.tab>ul>li').click(function () {
        $('.tab>ul>li').removeClass('on');
        $(this).addClass('on');
        $('.tab>ul>li').children('.tabcon').hide();
        $(this).children('.tabcon').show();
    })

    $('.tab>ul>li').focusin(function () {
        $('.tab>ul>li').removeClass('on');
        $(this).addClass('on');
        $('.tab>ul>li').children('.tabcon').hide();
        $(this).children('.tabcon').show();
    })





    //Pop

    $('.pop_on').click(function () {
        $('.pop').show();
    })
    $('.pop_off').click(function () {
        $('.pop').hide();
    })

})