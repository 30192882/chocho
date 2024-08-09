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

    let idx = 1
    let obj_left = 0

    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        /*
            idx = 1 ---0
                  2 ---1200
                  3 ---2400
        */
        obj_left = -(idx-1)*1200
        console.log(obj_left)

        $('.popup ul').animate({
            left: obj_left
        }, 500)
    }, 3000)
})