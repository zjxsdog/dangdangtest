define(["jquery"],function($){
	function Tab(btn_exp,box_exp){
		this.btn_exp=btn_exp;
		this.box_exp=box_exp;
		this.init();
	}
	Tab.prototype={
		init(){
			this.btnclick();
		},
		btnclick(){
			var that=this;
			$(this.btn_exp).on("mouseover",function(){
				$(this).addClass("active").siblings().removeClass("active");
				$(that.box_exp).eq($(this).index()).show().siblings(that.box_exp).hide();
			})
		}
	}
	var $tab=new Tab(".main_head_right_m ol li",".main_head_right_m ul");
	var $firm_week_tab=new Tab(".firm_week_head ul li",".firm_week_content ul");
	return{
		"tab":$tab,
		"tab2":$firm_week_tab
	}
})