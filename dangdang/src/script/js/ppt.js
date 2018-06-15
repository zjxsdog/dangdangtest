define(["jquery"], function($) {
    function PPT($box) {    //传入盒子的元素对象
    	this.box=$box;
    	this.ulbox=$box.find(".pic");
        this.img=$box.find(".pic li");
        this.circle=$box.find("ol li");
        this.left=$box.find(".left");
        this.right=$box.find(".right");
        this.onew =this.img.eq(1).width();
        this.img.eq(this.circle.size() - 1).clone().prependTo(this.ulbox);//最后一张图片clone到第一张前面
        this.img.eq(0).clone().appendTo(this.ulbox);//第一张图片clone到最后一张图片后面
        this.ulbox.css({
            width: this.onew * (this.img.size()+2), //盒子图片宽度
            left: -this.onew
        });
        this.num = 0;
        this.timer = null;
        this.init();
    }
    PPT.prototype = {
        init() {
            this.banner();//鼠标移入移出
            this.circleover();//按钮移入移出
            this.rightclick();//右箭头点击
            this.leftclick();//左箭头点击
            this.autoplay();//自动播放
        },
        banner() {
            var that = this;
            this.box.hover(function() {
                that.left.show();
                that.right.show();
                clearInterval(that.timer);
            }, function() {
                that.left.hide();
                that.right.hide();
                that.timer = setInterval(function() {
                    that.right.click();
                }, 1500)
            })
        },
        circleover() {
            var that = this;
            this.circle.on("mouseover", function() {
            	that.num=$(this).index();
                $(this).addClass("active").siblings().removeClass("active");
                that.ulbox.stop(true).animate({ left: -($(this).index() + 1) * that.onew })
            })
        },
        rightclick() {
            var that = this;
            var ostop = true
            this.right.on("click", function() {
                if (ostop) {
                    that.num++;
                    ostop = false;
                    if (that.num == that.circle.size()) {
                        that.ulbox.animate({ left: -(that.num + 1) * that.onew }, function() {
                            $(this).css("left", -that.onew);
                            ostop = true;
                        });
                        that.num = 0;
                        that.circle.eq(that.num).addClass("active").siblings().removeClass("active");
                    } else {
                        that.circle.eq(that.num).addClass("active").siblings().removeClass("active");
                        that.ulbox.animate({ left: -(that.num + 1) * that.onew }, function() {
                            ostop = true;
                        })
                    }
                }

            })
        },
        leftclick() {
            var that = this;
            var ostop = true;
            this.left.on("click", function() {
                if (ostop) {
                    that.num--;
                    ostop = false;
                    if (that.num < 0) {
                        that.ulbox.stop(true).animate({ left: -(that.num + 1) * that.onew }, function() {
                            $(this).css("left", -that.circle.size() * that.onew)
                            ostop = true;
                        });
                        that.num = that.circle.size() - 1;
                        that.circle.eq(that.num).addClass("active").siblings().removeClass("active");

                    } else {
                        that.circle.eq(that.num).addClass("active").siblings().removeClass("active");
                        that.ulbox.animate({ left: -(that.num + 1) * that.onew }, function() { ostop = true; })
                    }
                }
            })
        },
        autoplay() {
            var that = this;
            this.timer = setInterval(function() {
                that.right.click();
            }, 4000)
        }
    }
    var ppt = new PPT($(".lbbox2"));    //三个对象都是ppt效果
    var ppt2 =new PPT($(".book_em ._lunbo"));
    var ppt3 =new PPT($(".clothes_em ._lunbo"));
    return{
    	"ppt1":ppt,
    	"ppt2":ppt2,
    	"PPT3":ppt3
    }
})