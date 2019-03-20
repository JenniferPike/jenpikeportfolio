$(function () {
    // code to hide and show my hamburger menu
    $('.hamburger').on('click', function () {
        $('.showNav').toggleClass('show');
    });

    $('.exitResponsive').on('click', function() {
        $('.showNav').toggleClass('show');
    });

    // Code to switch between projects in my project gallery section
    $('.right').on('click', function(){
        const $next = $('.projectExample .active').next();

        if ($next.length === 0) {
            $('.projectExample .active').removeClass('active').addClass('hidden');
            $('.projectExample .project1').removeClass('hidden').addClass('active');
            return; //do nothing
        }
        $('.projectExample .active').removeClass('active').addClass('hidden').next().removeClass('hidden').addClass('active');
    })

    $('.left').on('click', function(){
        const $prev = $('.projectExample .active').prev();

        if ($prev.length === 0) {
            $('.projectExample .active').removeClass('active').addClass('hidden');
            $('.projectExample .project5').removeClass('hidden').addClass('active');
            return; //do nothing
        }
        $('.projectExample .active').removeClass('active').addClass('hidden').prev().removeClass('hidden').addClass('active');
    })


});
