define(["jquery"], function($) {
    return {
        nav: (function() {
            $area=$(".header .area");
            $area_content=$(".header .area ul");
            $second_nav = $(".list_content_sort");
            $third_nav = $(".list_detail");
            $second_nav.hover(function() {
            	var that=$(this);
                $third_nav.show();
                $(this).addClass("active");
                $third_nav.hover(function() {
                    $(this).show();
                    $second_nav.removeClass("active");
                    that.addClass("active");
                }, function() {
                    $(this).hide();
                     $second_nav.removeClass("active");
                })
            }, function() {
                $third_nav.hide();
                $(this).removeClass("active");
            })
            $area.hover(function(){
                $area_content.show();
            },function(){
                $area_content.hide();
            })
        })()
    }
})