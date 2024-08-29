$(document).ready(function(){

  $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        $('header').addClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
  })
  $('header').on('mouseleave', function(){
    $('header').removeClass('menu_over')
    $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
  })
  $('header .header_sub .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
      $('header').removeClass('menu_over')
      $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
  })

  const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
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
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1280: {    /* 1280px 이상일때 적용 */
        slidesPerView: 4,
        spaceBetween: 40,
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

})//$(document).ready