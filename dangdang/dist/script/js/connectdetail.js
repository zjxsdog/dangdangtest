define(["jquery"], function($) {
	var $miaosha= $(".miaosha_list img,.miaosha_list .miaosha_title")
    var $bookup = $(".book_up img,.book_up .book_title ");
    var $booklow=$(".book_low img,.book_low .book_title ");

    //通过在地址栏中输入?""=""&""=""  来实现对详情页的传递两个下标,分别为数据表的下标和数据url数组的下标,再通过详情页中的detaildata.js文件连接data.php数据文件来渲染详情页的界面.
    $miaosha.on("click",function(){
        location.href = 'details.html?id=' + $(this).parents(".miaosha_list li").index()+'&data='+$(this).parents(".miaosha_list li").attr("mark");
    })


    $bookup.on("click", function() {
        location.href = 'details.html?id=' + $(this).parents(".book_up li").index()+'&data='+$(this).parents(".book_up li").attr("mark");
    })

    $booklow.on("click",function(){
        location.href = 'details.html?id=' + ($(this).parents(".book_low li").index()+2)+'&data='+$(this).parents(".book_low li").attr("mark");
    })
})