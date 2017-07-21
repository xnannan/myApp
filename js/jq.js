/**
 * Created by 孙帅男 on 2017/7/20.
 */
$(function(){
    var i=0;
    $.fn.extend({
        ll:function(){
            function fn(){
                i++;
                if(i>=2){
                    i=2;
                }
                $(".ul-left").animate({"left":i*(-1200)+"px"},{duration:1000});
            }
            $(this).on("click",fn)
        },
        rr:function(){
            function fn1(){
                i--;
                if(i<0){
                   i=0;
                }
                $(".ul-left").animate({"left":i*(-1200)+"px"},{duration:1000});
            }
            $(this).on("click",fn1)
        }
    })
})