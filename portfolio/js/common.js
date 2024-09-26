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

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 50){ //0보다 크다면 - 조금이라도 스크롤
            $('header').addClass('fixed')
        }else{//0이거나 0보다 작을때
            $('header').removeClass('fixed')
        }
    }

    scroll_chk()//로딩되었을 때 한번
    $(window).scroll(function(){ //스크롤할 때마다 1번 실행
        scroll_chk()
    })
})//$(document).ready