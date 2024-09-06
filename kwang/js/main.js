$(document).ready(function(){

  gsap.registerPlugin(ScrollTrigger);
  const sections =  document.querySelector(".visual .inner");  //좌우요소를 감싸는 요소
  const large =  document.querySelector(".visual .inner .cont_wrap .cont"); //스크롤될 요소
  gsap.to(large, {
    y: () => (window.innerHeight - large.clientHeight - 0),  /* 실제 스크롤 값보다 더 스크롤 할 값 - 필요없으면 0 */
    ease: "none",
    scrollTrigger: {
      trigger: sections,
      pin: true,
      start: "center center", /* 좌우로 스크롤 될 동안의 위치, top top 상단에 고정, top 20% 상단에서 20% 떨어져서 */
      end: () => "+=500",
      scrub: 0.5, 
      markers: false,
      invalidateOnRefresh: true,
      snap: {
        snapTo: 0.5,
        duration: 1.2,
        delay: 0,
      }
    }
  });

  gsap.registerPlugin(ScrollTrigger);
  const sections2 =  document.querySelector(".search .wrapper");  //좌우요소를 감싸는 요소
  const large2 =  document.querySelector(".search .wrapper .right .pic"); //스크롤될 요소
  gsap.to(large2, {
    y: () => (window.innerHeight - large.clientHeight - 20),  // 실제 스크롤 값보다 더 스크롤 할 값 - 필요없으면 0 
    ease: "none",
    scrollTrigger: {
      trigger: sections2,
      pin: true,
      start: "top 30px",
      end: () => "+=3000",
      scrub: 0.5, 
      markers: false,
      invalidateOnRefresh: true,
    }
  });

  const tech_swiper = new Swiper('.tech .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
    spaceBetween: 24, /* li와 li사이 - 제일 작은 여백 */
    breakpoints: {
      1024: {  /* 1024px 이상이 되면 적용 */
        spaceBetween: 24,
      },
    },
    centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
  });

  const insta_swiper = new Swiper('.insta .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
    spaceBetween: 0, /* li와 li사이 - 제일 작은 여백 */
    breakpoints: {
      640: {  /* 640px 이상이 되면 적용 */
        spaceBetween: 0, 
      },
      1024: {  /* 1024px 이상이 되면 적용 */
        spaceBetween: 0,
      },
    },
    centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
  });

})//$(document).ready