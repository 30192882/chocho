$(document).ready(function(){

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
        $('header .header_sub').addClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
    }
  })
  $('header .header_sub').on('mouseleave', function(){
    if(pc_mobile == 'pc'){
      $('header .header_sub').removeClass('menu_over')
      $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    }
  })
  $('header .header_sub .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
    if(pc_mobile == 'pc'){
      $('header .header_sub').removeClass('menu_over')
      $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
  }
  })

  $('header .header_sub .gnb .gnb_wrap .depth1 > li > a').on('click', function(e){
      if(pc_mobile == 'mo'){ //모바일에서만 작동
          e.preventDefault(); /* a 태그의 href를 작동시키지 않음 */
          $(this).parent().toggleClass('open')
      }
  })

  $('header .header_sub .gnb .gnb_open').on('click', function(){
      $('header').addClass('menu_open')//하단 컨텐츠 스크롤 금지
      $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
  })
  $('header .header_sub .gnb .gnb_close').on('click', function(){
      $('header').removeClass('menu_open')//하단 컨텐츠 스크롤 금지 해제
      $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
  })

  const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

      effect: "fade", /* fade 효과 */

      autoplay: {  /* 팝업 자동 실행 */
        delay: 5000,
        disableOnInteraction: true,
      },

      slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
      spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
        640: {    /* 640px 이상일때 적용 */
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
      centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
      loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
      pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.swiper-pagination', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
      },
    });

  const show_swiper = new Swiper('.show .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
    spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
    breakpoints: {
      640: {    /* 640px 이상일때 적용 */
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      768: {    /* 768px 이상일때 적용 */
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {   /* 1024px 이상일때 적용 */
        slidesPerView: 3,
        spaceBetween: 22,
      },
      1280: {    /* 1280px 이상일때 적용 */
        slidesPerView: 4,
        spaceBetween: 22,
      },
    },
    centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
      el: '.swiper-pagination', /* 해당 요소의 class명 */
      clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
      type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
    },
  });

  const event_swiper_txt = new Swiper('.event .swiper.e_txt', { /* 팝업을 감싼는 요소의 class명 */
      effect: "fade", /* fade 효과 */
      
      loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
      autoplay: {  /* 팝업 자동 실행 */
        delay: 2000,
        disableOnInteraction: true,
      },
  });

  const event_swiper_photo = new Swiper('.event .swiper.e_photo', { /* 팝업을 감싼는 요소의 class명 */
      loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
      slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
      spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
        1280: {    /* 1280px 이상일때 적용 */
          slidesPerView: 'auto',
          spaceBetween: 22,
        },
      },
      autoplay: {  /* 팝업 자동 실행 */
        delay: 2000,
        disableOnInteraction: true,
      },
      
  });

//  event_swiper_txt.on('slideChange', function(){
//    if(this.activeIndex  != event_swiper_photo.activeIndex ){
//       event_swiper_photo.slideTo(this.activeIndex )
//    }
//  });
 
  event_swiper_photo.on('slideChange', function(){
      if(this.realIndex  != event_swiper_txt.realIndex ){
        event_swiper_txt.slideTo(this.realIndex )
      }
  });
  

  /*word의 탭메뉴
    .word .tab > ul > li 를 등록하면
    클릭한 li에만 on 클래스를 줌
    1. 원래 html에 기본적으로 하나의 li에 on클래스가 있어야함
        jquery에서 클릭하면 on을 다른 li에는 주는 것뿐 */
        $('.word .tab > ul > li').on('click', function(){
          /* 모든 li에 있는 on클래스를 모두 지웠다가 */
          $('.word .tab > ul > li').removeClass('on')
          /* click한 li에만 다시 on 클래스를 줌 */
          $(this).addClass('on')
      })

    /* 
        footer .familysite .family_open을 클릭하면
    1. footer familysite에 open 클래스 추가
    2. footer .familysite ul을 열어줌
    
        footer .familysite .family_close를 클릭하면
    1. footer familysite에 open 클래스 삭제
    2. footer .familysite ul을 닫아줌  
    */

    $('footer .familysite .family_open').on('click', function(){
        $('footer .familysite .family').addClass('open')
        $('footer .familysite .family ul').slideDown()
    })
    $('footer .familysite .family_close').on('click', function(){
        $('footer .familysite .family').removeClass('open')
        $('footer .familysite .family ul').slideUp()
    })
    $('footer .familysite .culture_open').on('click', function(){
      $('footer .familysite .culture').addClass('open')
      $('footer .familysite .culture ul').slideDown()
    })
    $('footer .familysite .culture_close').on('click', function(){
        $('footer .familysite .culture').removeClass('open')
        $('footer .familysite .culture ul').slideUp()
    })

})//$(document).ready