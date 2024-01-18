//정보시스템감리사 ui.js 파일


$(document).ready(function(){

    //메인swiper
    var swiper = new Swiper(".main-slide", {
        loop : true,
        speed: 1000,

        autoplay : {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable : true ,
          },
    });
    //gnb
    $('.gnb > ul > li').mouseenter(function(){
        $('#header').addClass('on');
        $('.gnb').addClass('on');
    });
    $('.close').click(function(){
        $('#header').removeClass('on');
        $('.gnb').removeClass('on');
    });
    //메인컨텐츠
    let tm = $('.mainTabContents .tabMenu li');
    let tc = $('.mainTabContents .tabContent');

    $(tm).click(function(e){
        var target = $(this).children();
        var href = target.attr('href');

        e.preventDefault();

        $(tc).hide();
        $(href).show();

        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }
        else{
            $(tm).removeClass('active');
            $(this).addClass('active');
        }
    });

    //footer-family사이트
    $("#siteOpen").click(function(){
        $('.siteList').show();
    });
    
    $('#siteClose').click(function(e){
        $('.siteList').hide();
        e.preventDefault();
    });
});