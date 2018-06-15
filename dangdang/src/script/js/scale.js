define(["jquery"],function(){
    function Scale(){
        this.spic=$("#spic");
        this.sf=$("#sf");
        this.bf=$("#bf");
        this.bpic=$("#bf img");
        this.lis=$("#list li");
        this.src='';
        this.init();
    }
    Scale.prototype.init=function(){
        this.lisclick();
        this.spichover();
    }
    Scale.prototype.lisclick=function(){
        var that=this;
        this.lis.on("click",function(){
            that.src=$(this).find("img").attr("src");
            that.spic.find("img").attr("src",that.src);
            that.bpic.attr("src",that.src);
        })
    }
    Scale.prototype.spichover=function(){
        var that=this;
        this.spic.hover(function(ev){
            that.sf.show().css({
                "width":that.spic.width()/that.bpic.width()*that.bf.width(),
                "height":that.spic.height()/that.bpic.height()*that.bf.height(),
            })
            that.bf.css({"visibility":"visible"});
            that.spicmousemove();
        },function(){
            that.bf.css({"visibility":"hidden"});
            that.sf.hide();
        })
    }
    Scale.prototype.spicmousemove=function(){
        var that=this;
        this.numscale=this.bf.width()/this.sf.width();  
        this.spic.on("mousemove",function(ev){
            that.l=ev.pageX-$(this).offset().left-that.sf.width()/2;
            that.t=ev.pageY-$(this).offset().top-that.sf.height()/2;
            if(that.l<0){
                that.l=0;
            }else if(that.l>that.spic.width()-that.sf.width()){
                that.l=that.spic.width()-that.sf.width();
            }
            if(that.t<0){
                that.t=0;
            }else if(that.t>that.spic.height()-that.sf.height()){
                that.t=that.spic.height()-that.sf.height();
            }               
            that.sf.css({
                "left":that.l,
                "top":that.t
            })
            that.bpic.css({
                "left":-that.l*that.numscale,
                "top":-that.t*that.numscale
            })

        })
    }
    var scale=new Scale();
    return{
        scale:scale
    }   
})