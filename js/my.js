/**
 * Created by 孙帅男 on 2017/7/19.
 */
$(function(){
    $(".banner_list>li").hover(
        function(){
            $(this).find(".cont_list_a").fadeToggle()
        }
    );
    $(".cont_a>ul>li").on("mouseenter",function(){
        console.log(1)
            $(this).find(".contall").css({
                "display":"block"
            })
    })

    $(".cont_a>ul>li").on("mouseleave",function(){
        $(this).find(".contall").css({
            "display":"none"
        })
    })
    $(".left-but").rr();
    $(".right-but").ll();
})