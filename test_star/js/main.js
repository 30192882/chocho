$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb').on('mouseleave', function(){
        $('header .gnb .depth1 > li').removeClass('over')
    })

    $('.news .tab > li').on('click', function(){
        $('.news .tab > li').removeClass('active')
        $(this).addClass('active')
    })

    $('.layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup button').on('click', function(){
        $('.layer_popup').hide()
    })


    /*
        idx 팝업의 번호
        1 > 2 > 3 > 1 > 2 > 3
        ->번호가 무한 재생
    */

    let idx = 1

    setInterval(function(){
        if(idx < 3){
            idx++ //1더하기
        }else{
            idx = 1
        }
        console.log(idx)

        $('.popup ul li').removeClass('active')
        $('.popup ul li').eq(idx - 1).addClass('active')
    }, 3000)//3초

})