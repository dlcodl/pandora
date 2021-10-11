$(function(){
    function isMobile() {
        if (navigator.userAgent.indexOf('Mobile') != -1){
            return true;
        }else {
            return false;
        }
    }
    if(!isMobile()){
        var gnbOpen = false;
        $('.menu_box, .gnb_bg').hide();
        $('.gnb_wrap > ul > li').mouseenter(function(){
            $('.gnb_wrap .menu_box').eq(0).show();
            $(this).find('.menu_box').stop().slideDown(300);
            $('.gnb_bg').stop().slideDown(300);
        }).mouseleave(function(){
            $('.menu_box, .gnb_bg').stop().slideUp(100);
        });
    }else{
        /* $('.menu_box').hide(); */
        $('.mb_menu').on('click', function(){
            $(this).toggleClass('left');
            $('.gnb_wrap').toggleClass('open');
            $('.mb_menu button').toggleClass('cross');
        });
        $('.gnb_wrap ul li').on('click', function(){
            $(this).find('.menu_box').toggleClass('open');
            $('.gnb_wrap ul li').not(this).find('.menu_box').removeClass('open');
        });
        $('.mb_menu').on('click', function(){
            $('.menu_box').removeClass('open');
        });
        $('.header_search input').on('click', function(){
            $(this).toggleClass('active');
        });
    }
}); 