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

    //문서가 로딩된 이후 단 1번만 실행
    let scrolling = $(window).scrollTop()
    console.log(scrolling)
    
    /* 브라우저가 스크롤이 조금이라도 되면
        header에 fixed라는 클래스를 추가
        다시 맨 위로 올라가면 fixed라는 클래스를 삭제 */

    function scroll_chk(){ //함수를 선언
        //scrolling이라는 변수에 현재 스크롤 된 값을 저장
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ //스크롤 값이 0보다 크면
            $('header').addClass('fixed')
        }else{ //스크롤 값이 0이면 - 맨위로 스크롤
            $('header').removeClass('fixed')
        }
    }//function scroll_chk

    scroll_chk() //함수를 호출

    //브라우저 스크롤을 할때마다 1번만 실행
    $(window).scroll(function(){
        scroll_chk()
    })

    $('.top').on('click', function(){
        $('html, body').animate({
          scrollTop : 0
        }, 500)
      })
    
})//$(document).ready