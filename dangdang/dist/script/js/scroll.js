define(["jquery"], function($) {
    function Aside() {
        this.loutinav = $(".main_aside");
        this.louti = $(".main_aside li");
        this.louc = $(".louc");
        this.fixhead=$(".fixhead");
        this.init();
    }
    Aside.prototype = {
        init() {
            this.scrolling();
            this.louticlick();
        },
        scrolling() {
            var that = this;
            $(window).on("scroll", function() {
                if($(window).scrollTop() >= 1200){
                    that.fixhead.show();   // 页面向下移动大于1200时顶层固定搜索栏
                }else{
                    that.fixhead.hide();
                }
                if ($(window).scrollTop() >= 1500) {
                    that.loutinav.show();
                    that.loutiover();
                } else {
                    that.loutinav.hide();

                }
                that.louc.each(function() {//第一张偏移值大于滚轮距离-200的楼梯高亮显示

                        if ($(this).offset().top > $(window).scrollTop() - 200) { 
                            that.louti.find( "b").css({ "background-color": "rgba(0, 0, 0, 0)" });
                            that.louti.css({ "background": "#f6f6f6" });
                            $index = $(this).index(".louc");
                            if ($index == 0) {
                                that.louti.eq($(this).index(".louc")).css({ "background": "#93d46f" });
                            } else if ($index == 1 || $index == 4) {
                                that.louti.eq($(this).index(".louc")).css({ "background": "#f97f67" });
                            } else if ($index == 2) {
                                that.louti.eq($(this).index(".louc")).css({ "background": "#72d599" });
                            } else if ($index == 3) {
                                that.louti.eq($(this).index(".louc")).css({ "background": "#ff857f" });
                            }
                            return false;
                        }


                })
            })
        },
        loutiover() {  //楼梯鼠标滑入效果
            var that = this;
            this.louti.hover(function() {
                if ($(this).index() == 0) {
                    $(this).css({ "background": "#93d46f", "width": "110px" });
                } else if ($(this).index() == 1 || $(this).index() == 4) {
                    $(this).css({ "background": "#f97f67", "width": "110px" });
                } else if ($(this).index() == 2) {
                    $(this).css({ "background": "#72d599", "width": "110px" });
                } else if ($(this).index() == 3) {
                    $(this).css({ "background": "#ff857f", "width": "110px" });
                }
            }, function() { $(this).css({ "background": "#f6f6f6", "width": "33px" }); })
        },
        louticlick() { //跳到指定楼层
            var that = this;
            var ostop = true; //开关判断一个跳转指令是否完成
            if (ostop) {      //上一跳转指令完成才能再次触发
                ostop = false;
                this.louti.on("click", function() {
                    $(window).off("scroll");  //跳转时关闭楼层高亮事件
                    that.louti.find("b").css({ "background-color": "rgba(0, 0, 0, 0)" });
                    if ($(this).index() == 0) {
                        $(this).find("b").css({ "background-color": "#93d46f" });
                    } else if ($(this).index() == 1 || $(this).index() == 4) {
                        $(this).find("b").css({ "background-color": "#f97f67" });
                    } else if ($(this).index() == 2) {
                        $(this).find("b").css({ "background-color": "#72d599" });
                    } else if ($(this).index() == 3) {
                        $(this).find("b").css({ "background-color": "#ff857f" });
                    }
                    $("html,body").animate({ scrollTop: that.louc.eq($(this).index()).offset().top }, 200, function() {
                        that.scrolling();
                        ostop = true;
                    });
                })
            }

        }
    }
    var aside = new Aside();
    return {
        "aside": aside
    }
})