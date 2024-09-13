$(document).ready(function(){
  let boost_top
  let life_top
  let hanhwa_top
  let nature_top
  let paper_top
  let window_h
  let scrolling
  let life_w

  function scroll_chk(){
    window_h = $(window).height() //브라우저 높이
    scrolling = $(window).scrollTop() //스크롤된 값
    boost_top = $('.boost').offset().top
    life_top = $('.life').offset().top
    hanhwa_top = $('.hanhwa').offset().top
    nature_top = $('.nature').offset().top
    paper_top = $('.paper').offset().top
    console.log(window_h, scrolling, life_top)

    if(scrolling > (boost_top-window_h + (window_h / 3))) {
      $('.boost').addClass('active')
    }
    if(scrolling > (life_top-window_h + (window_h / 5))) {
      
      life_w = (scrolling - (life_top - window_h))*1.2 + 618
      //넓이가 브라우저 설정을 초과하지 않게
      if(life_w > $(window).width()){
          life_w = $(window).width()
          $('.life').addClass('end')
      }
      console.log(life_w)
      $('.life .photo_wrap .photo').width(life_w)
    }
    if(scrolling > (hanhwa_top-window_h + (window_h / 3))) {
      $('body').addClass('black_bg')
    }else{
      $('body').removeClass('black_bg')
    }
    if(scrolling > (hanhwa_top-window_h + (window_h / 3))) {
      $('.hanhwa').addClass('active')
    }
    if(scrolling > (nature_top-window_h + (window_h / 3))) {
      $('.nature').addClass('active')
      nature_h2 = (scrolling - (nature_top - window_h))*0.2
      console.log(nature_h2)
      $('.nature h2').css('transform', 'translateY(-'+nature_h2+'%)')
      //transform: translate(0);
      //.nature h2
    }
    if(scrolling > (paper_top-window_h + (window_h / 3))) {
      $('.paper').addClass('active')
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