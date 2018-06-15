define(["jquery"], function($) {
    function Billbord() {
        this.init();
    }
    Billbord.prototype = {
        init() {
            this.line = $(".lines li");
            this.btn = $(".book_tab ol li");
            this.box=$(".lines");
            this.box.eq(0).children("li").eq(0).children(".detail").show();
            this.box.eq(0).children("li").eq(0).children(".line").hide();
            this.box.eq(0).children("li").eq(0).css({ "height": "133px" });
            this.box.eq(1).children("li").eq(0).children(".detail").show();
            this.box.eq(1).children("li").eq(0).children(".line").hide();
            this.box.eq(1).children("li").eq(0).css({ "height": "133px" });//显示图书畅销榜和童书新书榜的第一名的详细栏
            this.lineover();//移入某一书名时详细栏打开，其他关闭
            this.btnover();//tab切换
        },
        lineover() {
            var that = this;
            this.line.on("mouseover", function() {
                $(this).parent(".lines").find("li").css({ "height": "33px" });
                $(this).parent(".lines").find(".detail").hide();
                $(this).parent(".lines").find(".line").show();
                $(this).css({ "height": "133px" });
                $(this).find(".detail").show();
                $(this).find(".line").hide();
            })
        },
        btnover() {
        	var that=this;
            this.btn.on("mouseover", function() {
            	$(this).addClass("active").siblings().removeClass("active");
                that.box.eq($(this).index()).show().siblings(".lines").hide();
            })
        }
    }
    var $book_biilbord = new Billbord;
    return {
        "bookBillbord": $book_biilbord
    }
})