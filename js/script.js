$(function(){
    $(".warp1").on('click', function(){
        $("html,body").animate({scrollTop:$(".q1").offset().top}, 700);
    });
    $(".warp2").on('click', function(){
        $("html,body").animate({scrollTop:$(".q2").offset().top}, 700);
    });
    $(".warp3").on('click', function(){
        $("html,body").animate({scrollTop:$(".q4").offset().top}, 1000);
    });
    $(".warp4").on('click', function(){
        $("html,body").animate({scrollTop:$(".a1").offset().top}, 1000);
    });
    $(".warp5").on('click', function(){
        $("html,body").animate({scrollTop:$(".q3").offset().top}, 700);
    });
    $(".warp6").on('click', function(){
        $("html,body").animate({scrollTop:$(".a1").offset().top}, 1000);
    });
    $(".warp7").on('click', function(){
        $("html,body").animate({scrollTop:$(".q6").offset().top}, 1000);
    });
    $(".warp8").on('click', function(){
        $("html,body").animate({scrollTop:$(".q5").offset().top}, 700);
    });
    $(".warp9").on('click', function(){
        $("html,body").animate({scrollTop:$(".q6").offset().top}, 1000);
    });
    $(".warp10").on('click', function(){
        $("html,body").animate({scrollTop:$(".a3").offset().top}, 1000);
    });
    $(".warp11").on('click', function(){
        $("html,body").animate({scrollTop:$(".a4").offset().top}, 1000);
    });
    $(".warp12").on('click', function(){
        $("html,body").animate({scrollTop:$(".a4").offset().top}, 1000);
    });
    $(".warp13").on('click', function(){
        $("html,body").animate({scrollTop:$(".a2").offset().top}, 1000);
    });
    $("#top-btn").click(function (){
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });
});


