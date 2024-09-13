$(document).ready(function(){
  let life_top
  let window_h
  let scrolling
  let life_w

  function scroll_chk(){
    window_h = $(window).height() //브라우저 높이
    scrolling = $(window).scrollTop() //스크롤된 값
    life_top = $('.life').offset().top
    console.log(window_h, scrolling, life_top)

    if(scrolling > (life_top-window_h + (window_h / 1))) {
      
      life_w = (scrolling - (life_top - window_h))*1.2 + 618
      //넓이가 브라우저 설정을 초과하지 않게
      if(life_w > $(window).width()){
          life_w = $(window).width()
          $('.life').addClass('end')
      }
      console.log(life_w)
      $('.life .photo_wrap .photo').width(life_w)
    }
  }
  scroll_chk()//로딩된 이후 한번
  $(window).scroll(function(){ //스크롤 될때마다
    scroll_chk()
  })
  $(window).resize(function(){ //브라우저가 리사이즈 될때마다
    scroll_chk()
  })
})//$(document).ready