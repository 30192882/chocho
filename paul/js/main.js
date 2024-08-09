$(document).ready(function(){
    $('.visual_popup .popup').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        fade: true,  //페이드 효과 적용
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
    });
})//$(document).ready


$(document).ready(function(){
    /*
        현재 pc모드인지 mobile 모드인지
        1024 이하는 mobile 1025 이상은 pc

        header .header_sub .gnb .gnb_wrap ul.depth1 > li
        pc모드일때 메뉴에 마우스를 오버하면
        1. header menu_over 클래스 추가
        2. 1차 메뉴 li에 over 클래스 추가

        브라우저의 스크롤을 조금이라도 내리면 header에 fixed 클래스 추가
        다시 맨 꼭대기로 이동하면 fixed 클래스 삭제
    */

    let scrolling
    let scroll_top //header 고정 시작 값
    let window_w
    let mobile_size = 1024
    let pc_mobile

    function scroll_chk(){
        if(pc_mobile == 'pc'){
            scroll_top = 50
        }else{
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > scroll_top){ //0보다 크다면 - 조금이라도 스크롤
            $('header').addClass('fixed')
        }else{//0이거나 0보다 작을때
            $('header').removeClass('fixed')
        }
    }

    function resize_chk(){
        window_w = $(window).width()
        console.log(window_w)
        if(window_w > mobile_size){ //pc일때
            pc_mobile = 'pc'
        }else{ //mobile
            pc_mobile = 'mo'
        }
        console.log(pc_mobile)
    }

    resize_chk() //문서가 로딩되었을 때 한번
    $(window).resize(function(){
        resize_chk()
    })

    scroll_chk()//로딩되었을 때 한번
    $(window).scroll(function(){ //스크롤할 때마다 1번 실행
        scroll_chk()
    })


    $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
})//$(document).ready