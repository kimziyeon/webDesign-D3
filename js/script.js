$(function () {
    // alert('ddddd')

    $('nav>ul>li').mouseenter(function () {
        $('.sub').stop().fadeIn();
        $('.n_back').stop().fadeIn();
    })
    $('nav>ul>li').mouseleave(function () {
        $('.sub').stop().fadeOut();
        $('.n_back').stop().fadeOut();
    })

    $('nav>ul>li').focusin(function () {
        $('.sub').stop().fadeIn();
        $('.n_back').stop().fadeIn();
        $(this).children('a').addClass('on');
    })
    $('nav>ul>li').focusout(function () {
        $('.sub').stop().fadeOut();
        $('.n_back').stop().fadeOut();
        $(this).children('a').removeClass('on');
    })

    $('.sub>ul>li').focusin(function () {
        $(this).children('a').addClass('on');
    })
    $('.sub>ul>li').focusout(function () {
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
    setInterval(slide, 3000)


    // 탭
    $('.cont>ul>li').click(function () {
        $('.cont>ul>li').removeClass('on');
        $(this).addClass('on');
        $('.tab').hide();
        $(this).children('.tab').show();
    })

    $('.cont>ul>li').focusin(function () {
        $('.cont>ul>li').removeClass('on');
        $(this).addClass('on');
        $('.tab').hide();
        $(this).children('.tab').show();
    })


    // 팝업
    $('.pop_on').click(function () {
        $('.pop').show();
    })
    $('.pop_off').click(function () {
        $('.pop').hide();
    })


})