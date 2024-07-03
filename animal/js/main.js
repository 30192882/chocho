$(document).ready(function(){

    /* 브라우저 높이가 1024 이하면 모바일 / 이상은 pc */
    let pc_mobile //현재상태가 pc인지 모바일인지를 저장
    let window_w //브라우저 넓이 저장

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ /* 1024보다 크면 = pc면 */
            pc_mobile = 'pc'
        }else{ /* mobile이면 */
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    //처음에 로딩 됐을 때 실행
    resize_chk()
    //브라우저가 리사이즈 될때마다 실행
    $(window).resize(function(){
        resize_chk()
    })

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

    effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });
    visual_swiper.autoplay.start();  /* 재생 기능 */

    /* 
        일시정지 버튼을 클릭하면 
        팝업은 일시정지가 되고
        일시정지 버튼은 숨김처리
        다시시작 버튼이 나타남

        다시시작 버튼을 클릭하면
        팝업이 재생되고
        다시시작 버튼은 숨김처리
        일시정지 버튼이 나타남
    */

    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
    })//btn_stop

    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })//btn_play

    /* 페이지가 스크롤 되면 header에 fixed 클래스를 추가
    다시 맨 위로 올라가면 header에 fixed 클래스 삭제 */

    let scrolling

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    } //function

    //문서가 처음 로딩되었을 때 1번 실행
    scroll_chk()

    $(window).scroll(function(){
        //브라우저를 스크롤할 때마다 실행
        scroll_chk()
    })//window.scroll

    /*
        메뉴에 마우스를 올리면
        header에 menu_over라는 클래스를 추가 
        마우스를 오버한 li에만 on이 되는 클래스를 추가
        메뉴 : header .gnb .gnb_wrap ul.depth1 > li

        --> 다른 메뉴 (li)에 마우스를 오버하면
            이전에 오버했던 메뉴의 on 클래스 삭제
            (이전에 오버했던 메뉴를 알기 어려움)
            -->모든 메뉴의 on클래스를 삭제했다가 오버한 내것만 on클래스 추가
        --> header에서 마우스를 아웃하면 그때 menu_over라는 클래스 삭제
            모든 메뉴에서 on 클래스 삭제
    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')//마우스를 오버한 li만
        }//if
    })//on
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }//if
    })

    $('header .gnb .gnb_open').on('click', function(){
        if(pc_mobile = 'mobile'){ //mobile일 경우에만
            $('header').addClass('mobile_open')
        }
    })
    $('header .gnb .gnb_close').on('click', function(){
        if(pc_mobile = 'mobile'){ //mobile일 경우에만
            $('header').removeClass('mobile_open')
        }
    })

    /* find01_swiper */
    const find01_swiper = new Swiper('.find .tab .find01 .swiper', { /* 팝업을 감싸는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1280: {    /* 1280px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab .find01 .btn_wrap .next',
            prevEl: '.find .tab .find01 .btn_wrap .prev',
        },
    });//find01_swiper
    /* find swiper */
    const find02_swiper = new Swiper('.find .tab .find02 .swiper', { /* 팝업을 감싸는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1280: {    /* 1280px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab .find01 .btn_wrap .next',
            prevEl: '.find .tab .find01 .btn_wrap .prev',
        },
    });//find02_swiper

    /*find의 탭메뉴
    .find .tab > ul > li 를 등록하면
    클릭한 li에만 on 클래스를 줌
    1. 원래 html에 기본적으로 하나의 li에 on클래스가 있어야함
        jquery에서 클릭하면 on을 다른 li에는 주는 것뿐 */
    $('.find .tab > ul > li').on('click', function(){
        /* 모든 li에 있는 on클래스를 모두 지웠다가 */
        $('.find .tab > ul > li').removeClass('on')
        /* click한 li에만 다시 on 클래스를 줌 */
        $(this).addClass('on')
    })

    /* .family의 swiper */
    const family_swiper = new Swiper('.family .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.family .btn_wrap .next',
            prevEl: '.family .btn_wrap .prev',
        },
    });//swiper

})//document