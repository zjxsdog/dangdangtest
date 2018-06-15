;(function($) {
    $lunbo1_ul = $(".lbbox .bigpic");
    $lunbo1_simg_ul = $(".lbbox .spic");
    $lunbo2_ul = $(".lbbox2 .pic");
    $miaosha_left = $(".miaosha_list");
    $miaosha_right = $(".firm_week_content ul");
    $book_ppt = $(".book_em .pic");
    $book_up = $(".book_up");
    $book_low = $(".book_low");
    $clothes_ppt = $(".clothes_em .pic");
    $clothes = $(".clothes_em>ul");
    $commodity_left = $(".dangdangyp_content .content_left");
    $commodity_right = $(".dangdangyp_content .content_right");
    $yp_left = $(".commodity_content .content_left");
    $yp_right = $(".commodity_content .content_right");
    $brand_logo1=$(".clothes_new .over ul");
    $brand_logo2=$(".commodity_foot ul");
    $brand_logo3=$(".children_foot ul");





    
    $.getJSON("../../php/data.php", function(data) {

        $html = "";
        $(data["index1"]).each(function(i) {
            $html += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`
        })
        $content = $lunbo1_ul.html();
        $lunbo1_ul.html($content + $html);
        $lunbo1_ul.find("img").eq(0).css({ opacity: 1 });
        $html1 = "";
        $html2 = "";
        $(data["index2"]).each(function(i) {
            if (i < 4) {
                $html1 += `<a href="javascript:;"><img src=${this.url}></img></a>`;
            } else {
                $html2 += `<a href="javascript:;"><img src=${this.url}></img></a>`;
            }
        })

        $lunbo1_simg_ul.find("li").eq(0).html($html1);
        $lunbo1_simg_ul.find("li").eq(1).html($html2);

        $html = "";
        $(data["index3"]).each(function(i) {
            $html += `<li mark="index3">
            			<a href="javascript:;">
            				<img src=${this.url.split(",")[0]} style="width:150px;height:150px;"></img>
            			</a>
            			<div class="bar">
                            <span class="progress_bar"></span>
                            <span class="sold_num">已秒杀50%</span>
                        </div>
            			<div class="miaosha_title"><a href="javascript:;">${this.title}</a></div>
            			<div class="price">秒杀价：¥
							<b>${this.price}</b>
							<i>${this.preprice}</i>
            			</div>
            		</li>`;
        })
        $miaosha_left.html($html);

        $html1 = "";
        $html2 = "";
        $(data["index4"]).each(function(i) {
            if (i < 4) {
                $html1 += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`;
            } else {
                $html2 += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`;
            }
        })
        $miaosha_right.eq(0).html($html1);
        $miaosha_right.eq(1).html($html2);

        $html = "";
        $(data["index5"]).each(function(i) {
            $html += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`
        })
        $content = $lunbo2_ul.html();
        $lunbo2_ul.html($content + $html);
        $lunbo2_ul.find("li").eq(0).show();

        $html = "";
        $(data["index6"]).each(function(i) {
            $html += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`
        })
        $content = $book_ppt.html();
        $book_ppt.html($content + $html);
        $book_ppt.find("li").eq(0).show();




        $html1 = "";
        $html2 = "";
        $(data["index7"]).each(function(i) {
            if (i < 2) {
                $html1 += `<li mark="index7">
	            			<a href="javascript:;">
	            				<img src=${this.url.split(",")[0]} style="width:150px;height:150px;"></img>
	            			</a>
	            			<div class="book_title"><a href="javascript:;">${this.title}</a></div>
	            			<div class="book_price">
								<b>${this.price}</b>
								<i>${this.preprice}</i>
	            			</div>
	            		</li>`;
            } else {
                $html2 += `<li mark="index7">
	            			<a href="javascript:;">
	            				<img src=${this.url.split(",")[0]} style="width:150px;height:150px;"></img>
	            			</a>
	            			<div class="book_title"><a href="javascript:;">${this.title}</a></div>
	            			<div class="book_price">
								<b>${this.price}</b>
								<i>${this.preprice}</i>
	            			</div>
	            		</li>`;
            }

        })
        $book_up.html($html1);
        $book_low.html($html2);



        $html = "";
        $(data["index8"]).each(function(i) {
            $html += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`
        })
        $content = $clothes_ppt.html();
        $clothes_ppt.html($content + $html);

        $html1 = "";
        $html2 = "";
        $(data["index9"]).each(function(i) {
            if (i < 3) {
                $html1 += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`;
            } else {
                $html2 += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`;
            }
        })
        $clothes.eq(0).html($html1);
        $clothes.eq(1).html($html2);

        $html1 = "";
        $html2 = "";
        $(data["index9"]).each(function(i) {
            if (i < 3) {
                $html1 += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`;
            } else {
                $html2 += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`;
            }
        })
        $clothes.eq(0).html($html1);
        $clothes.eq(1).html($html2);


        $html1 = "";
        $html2 = "";
        $(data["index10"]).each(function(i) {
            if (i < 4) {
                $html1 += `<a href="javascript:;"><img src=${this.url}></img></a>`;
            } else {
                $html2 += `<a href="javascript:;"><img src=${this.url}></img></a>`;
            }
        })
        $commodity_left.html($html1);
        $commodity_right.html($html2);
        $yp_left.html($html1);
        $yp_right.html($html2);
        $html1 = "";
        $html2 = "";

        $html = "";
        $(data["index11"]).each(function(i) {
            $html += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`
        })
        $brand_logo1.html($html);
        $html = "";
        $(data["index12"]).each(function(i) {
            $html += `<li><a href="javascript:;"><img src=${this.url}></img></a></li>`
        })
        $brand_logo2.html($html);
        $brand_logo3.html($html);
    })
})(jQuery);