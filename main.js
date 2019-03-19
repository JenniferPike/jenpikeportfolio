$(function () {
    $('.hamburger').on('click', function () {
        $('.showNav').toggleClass('show');
    });

    $('.exitResponsive').on('click', function () {
        $('.showNav').toggleClass('show');
    });



    $('.right').on('click', function(){
        console.log('click');
    })

    $('.left').on('click', function(){
        console.log('click');
    })


});
