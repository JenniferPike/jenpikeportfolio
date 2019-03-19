$(function () {
    $('.hamburger').on('click', function () {
        $('.showNav').toggleClass('show');
    });

    $('.exitResponsive').on('click', function () {
        $('.showNav').toggleClass('show');
    });


    $('.right').on('click', function(){
        const $next = $('.projectExample .active').next();

        if ($next.length === 0) {
            return; //do nothing
        }
        $('.projectExample .active').removeClass('active').addClass('hidden').next().removeClass('hidden').addClass('active');
    })

    $('.left').on('click', function(){
        const $prev = $('.projectExample .active').prev();

        if ($prev.length === 0) {
            return; //do nothing
        }
        $('.projectExample .active').removeClass('active').addClass('hidden').prev().removeClass('hidden').addClass('active');
    })


});
