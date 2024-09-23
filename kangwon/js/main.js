/**/
$(document).ready(function(){
    /*
    header에 마우스를 올리거나
    브라우저가 스크롤되면 header에 fixed
    -->pc/mobile 상관없이 언제나 구현

    header .gnb .gnb_wrap ul.depth1 > li
    메뉴에 마우스를 올리면
    1. header에 menu_over 클래스를 추가
    2. 마우스를 오버한 li에 on클래스를 추가
    --> pc에서만 구현
    */
    let win_w
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1300){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        //console.log(pc_mobile)
    }//function

    //브라우저가 로딩되었을때 단 한번 실행
    resize_chk()

    $(window).resize(function(){ //브라우저가 리사이즈 할 때마다 한번 실행
        resize_chk()
    })//$(window).resize

    $('header').on('mouseenter focusin', function(){
        $(this).addClass('fixed')
    })
    $('header').on('mouseleave', function(){
        //마우스를 아웃했을 때 fixed클래스를 삭제하는건 맨 상단에 있을 때만 가능
        if(scrolling <= 0){ //scroll값이 0과 같거나 작을때
            $(this).removeClass('fixed')
        }
    })



    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })    

    /*
        모바일 메뉴를 클릭하면
        1. a링크값을 삭제 (이동을 못하게 막아버림)
        2. li에 open 클래스를 추가
            open 없으면 추가
            open 있으면 삭제
            --> 한번 클릭하면 열리고 두번 클릭하면 닫힘
    */

    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        } 
    });

    /*
        header .gnb .gnb_open
        메뉴열기를 클릭하면 header에 menu_open 클래스 추가
        메뉴닫기를 클릭하면 header에 menu_opem 삭제
        header .gnb .gnb_close
    */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
  


    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ //스크롤이 조금이라도 되었다면
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
        //console.log(scrolling)
        /*window_h = $(window).height() //브라우저 높이
        window_w = $(window).width()
        visual_top = $('.visual').offset().top + $('.visual .tit').height()
        //console.log(window_h, scrolling, visual_top)
        if(scrolling > (visual_top-window_h + (window_h / 0.91))) {
            visual_w = (scrolling - (visual_top - window_h))*0.83 + (window_w*0.6)
            //넓이가 브라우저 설정을 초과하지 않게
            if(visual_w > $(window).width()){
                visual_w = $(window).width()
                $('.visual').addClass('end')
            }
            console.log(visual_w)
            $('.visual .photo_wrap .photo').width(visual_w)
        }else if(scrolling <= (visual_top-window_h + (window_h / 1))){
            $('.visual').removeClass('end')
            $('.visual .photo_wrap .photo').width(window_w*0.6)
        }*/
    }

    let photo_top = $('.visual .photo_wrap').offset().top
    let tit_top = $('.visual .tit h2').offset().top 
    let tit_h = $('.visual .tit').height()
    let tit_bottom = tit_top + tit_h
    let gap_w = photo_top - tit_bottom
    let gap_b = photo_top - tit_top
    console.log(photo_top, tit_top, tit_h, gap_w) 

    function visual_chk(){
        if(scrolling > gap_w){
            $('.visual').addClass('wid')
        }else{
            $('.visual').removeClass('wid')
        }
        if(scrolling > gap_b){
            $('.visual').addClass('end')
        }else{
            $('.visual').removeClass('end')
        }
    }

    scroll_chk() //브라우저가 로딩되었을 때 한번 실행
    visual_chk()
    $(window).scroll(function(){ //스크롤할 때마다 한번 실행
        scroll_chk()
        visual_chk()
    })


    $('.place .list ul li').on('mouseenter', function(){
        $('.place .list ul li').removeClass('on')
        $('.place .list ul li').addClass('off')
        $(this).removeClass('off')
        $(this).addClass('on')
    })
    $('.place .list').on('mouseleave', function(){
        $('.place .list ul li').removeClass('on')
        $('.place .list ul li').removeClass('off')
    })


    const welcome_swiper = new Swiper('.welcome .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 24, 
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });

    /* 
        footer .familysite .family_open을 클릭하면
    1. footer familysite에 open 클래스 추가
    2. footer .familysite ul을 열어줌
    
        footer .familysite .family_close를 클릭하면
    1. footer familysite에 open 클래스 삭제
    2. footer .familysite ul을 닫아줌  
    */

    $('footer .familysite .family_open').on('click', function(){
        $('footer .familysite').addClass('open')
        $('footer .familysite ul').slideDown()
    })
    $('footer .familysite .family_close').on('click', function(){
        $('footer .familysite').removeClass('open')
        $('footer .familysite ul').slideUp()
    })

    $('.visual .tit').stickr({
        duration: 0,
        offsetBottom: -300,
    })

})//document.ready