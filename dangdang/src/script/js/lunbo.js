define(["jquery"], function($) {
    function Lb() {
        this.btns = $(".lbbox ol li");
        this.bimgs = $(".bigpic li img");
        this.cimgs = $(".spic li");
        this.lbbox = $(".bigpic");
        this.left = $(".bigpic .bleft");
        this.right = $(".bigpic .bright");
        this.sleft = $(".sleft");
        this.sright = $(".sright");
        this.sleft = $(".sleft");
        this.sright = $(".sright");
        this.slbbox = $(".spic");
        this.cimgs.index = 0;
        this.pre = 0;
        this.cur = 0;
        var timer = null;
        this.init();
    }
    Lb.prototype = {
        init() {
            this.btnsclick();//按钮点击
            this.rightclick();//上方右箭头点击
            this.leftclick();//上方左箭头点击
            this.lbboxio();//上方图片鼠标移入移出
            this.autoplay();//自动播放
            this.sleftclick();//下方左箭头点击
            this.srightclick();//下方右箭头点击
            this.s_lbboxio();//下方图片鼠标移入移出
        },
        s_lbboxio() {
            var that = this;
            this.slbbox.hover(function() {
                that.sleft.show();
                that.sright.show();
                clearInterval(timer);
            }, function() {
                that.sleft.hide();
                that.sright.hide();
                that.autoplay();
            })
        },
        srightclick() {
            var that = this;
            this.sright.on("click", function() {
                that.cur++;
                if (that.cur > 7) {
                    that.cur = 0;
                }
                that.picswitch();
            })
        },
        sleftclick() {
            var that = this;
            this.sleft.on("click", function() {
                that.cur--;
                if (that.cur < 0) {
                    that.cur = 7;
                }
                that.picswitch();
            })
        },
        rightclick() {
            var that = this;
            this.right.on("click", function() {
                that.cur++;
                if (that.cur > 7) {
                    that.cur = 0;
                }
                that.picswitch();
            })
        },
        leftclick() {
            var that = this;
            this.left.on("click", function() {
                that.cur--;
                if (that.cur < 0) {
                    that.cur = 7;
                }
                that.picswitch();
            })
        },
        btnsclick() {
            var that = this;
            this.btns.on("mouseover", function() {
                that.cur = $(this).index();
                that.picswitch();
            })

        },
        lbboxio() {
            var that = this;
            this.lbbox.hover(function() {
                that.left.animate({ left: 0 });
                that.right.animate({ right: 0 });
                clearInterval(timer);
            }, function() {
                that.left.animate({ left: "-40px" });
                that.right.animate({ right: "-40px" });
                that.autoplay();
            })
        },
        autoplay() {
            var that = this;
            timer = setInterval(function() {
                that.cur++;
                if (that.cur > 7) {
                    that.cur = 0;
                }
                that.picswitch();
            }, 4000)
        },
        picswitch() {
            var that = this;
            that.bimgs.eq(that.pre).animate({ opacity: 0 }, 100, function() {
                that.bimgs.eq(that.cur).animate({ opacity: 1 }, 100);
            })
            if (that.cimgs.index) {
                that.cimgs.eq(1).animate({ opacity: 0 }, 100, function() {
                    that.cimgs.eq(0).animate({ opacity: 1 }, 100);
                    that.cimgs.index = 0;
                });
            } else {
                that.cimgs.eq(0).animate({ opacity: 0 }, 100, function() {
                    that.cimgs.eq(1).animate({ opacity: 1 }, 100);
                    that.cimgs.index = 1;
                });
            }
            that.btns.eq(that.cur).addClass("active").siblings().removeClass("active");
            that.pre = that.cur;
        }
    }
    var $lb = new Lb();
    return {
        lunbo: $lb
    }
})