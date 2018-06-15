;(function($){
	function Allpick(){
		this.$allpick=$("input[name='allpick']");
		this.$list=$("input[class='pick']").not(this.$allpick);
		this.init();
	}
	Allpick.prototype.init=function(){
		this.allpickclick();
		this.listclick();
	}
	Allpick.prototype.allpickclick=function(){
		this.$allpick.on("click",function(){
			if($(this).prop("checked")){
				$("input").prop("checked",true);				
			}else{
				$("input").prop("checked",false);								
			}
		})
	}
	Allpick.prototype.listclick=function(){
		var that=this;
		this.$list.on("click",function(){	
			if($("input:checked").not(that.$allpick).size()==that.$list.size()){
				that.$allpick.prop("checked",true);				
			}else{
				that.$allpick.prop("checked",false);								
			}			
		})
	}
	var allpick=new Allpick();
})(jQuery);