// 디자인패턴으로 변경하기
// 싱글톤 디자인 패턴
var oneScrollPage = (function($){
    
    return{
        init : { }
    }
    
}(jQuery));

$(document).ready(function(){
   
    //이벤트 스크롤 이벤트
    $(window).on('scroll',function(){
       
        // 스크롤을 할때마다 현재 스크롤 상의 상단 위치를 알아야 한다.
        var now = $(this).scrollTop();
//        console.log(now);
        
        // 현재 스크롤의 위치를 기반으로 해서 메뉴를 고정시켜라.
        if ( now >= 200){
            $('.nav').addClass('fixed');
        } else {
            $('.nav').removeClass('fixed');
            $('.menu li a').removeClass('active');
        }
        
        $('.content').each(function(index){
            
            var posStart = $(this).position().top; //200px ,1000px , 800px, 2600px, 3400px;
            var posEnd = posStart + $(this).height(); // 1000,1800,2600,3400,4200
            
            if ( posStart <= now && posEnd > now ){
                $('.menu li a').removeClass();
                $('.menu li').eq(index).children('a').addClass('active');
            }
        });
        
        // 각 섹션별 이동시 메뉴 활성화시키기
        /*
        if ( now >= 200 ){
            $('.menu li a').removeClass('active');
            $('.menu li').eq(0).children('a').addClass('active');
        }
        
        if ( now >= 1000 ){
            $('.menu li a').removeClass('active');
//            $('.menu li').eq(1).prev().children('a').removeClass('active');
//            $('.menu li').eq(1).siblings().children('a').removeClass('active');
            $('.menu li').eq(1).children('a').addClass('active');
        }
        if ( now >= 1800 ){
            $('.menu li a').removeClass('active');
            $('.menu li').eq(2).children('a').addClass('active');
        }
        */
        
    });
    
    $('.menu a').on('click',function(e){
        
        e.preventDefault(); //.menu a의 html 기능을 막아줌
        
        var index = $(this).parent().index();
        var section = $('.content').eq(index);
        
        var sectionTop = section.position().top;
        
        $('html, body').animate({ scrollTop : sectionTop });
        
        
    });
});