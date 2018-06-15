;
(function($) {

    //详情页数据获取，通过地址栏

    $bf = $("#bf");
    $spic = $("#spic");
    $list = $("#list ul");
    $price=$(".price_cur b");
    $title=$(".name_info h1");
    $preprice=$(".price_cur strong span");
    $discount=$(".price_cur i");
    //index为找到数据所在的数据表在数据中的对象
    //id为对象url数组中对应的下标
    $id = location.search.split("?")[1].split("&")[0].split("=")[1];
    $index=location.search.split("?")[1].split("&")[1].split("=")[1];
    $indexnum=$index.substr(5);
    $.getJSON("http://localhost/dangdangtest/dangdang/php/data.php", function(data) {
        var $html = "";
        var $html1 = $("#spic").html();
        $bf.html(`<img src=${data[$index][$id].url.split(",")[0]}></img>`)
        $spic.html(`<img src=${data[$index][$id].url.split(",")[0]} sid=${''+$indexnum+"."+$id} style="width:320px;height:320px"></img>` + $html1)
        $(data[$index][$id].url.split(",")).each(function(index) {
            $html += `<li><img src=${data[$index][$id].url.split(",")[index]} style="width:54px;height:54px"></li>`
        })
        $list.html($html);
        $price.html(Number(data[$index][$id].price).toFixed(2));
        $title.html(data[$index][$id].title);
        $preprice.html("￥"+Number(data[$index][$id].preprice.substr(1)).toFixed(2));
        $discount=$discount.html("（"+(data[$index][$id].preprice.substr(1)/data[$index][$id].price).toFixed(2)+"折）");
    })





    //登录登出

    function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }



    function getCookie(key) {
        var str = decodeURI(document.cookie);
        var arr = str.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split('=');
            if (arr1[0] == key) {
                return arr1[1];
            }
        }
    }

    function delCookie(key) {
        addCookie(key, '', -1); //添加的函数,将时间设置为过去时间
    }


    if (getCookie("tel")) {
        $(".noname").hide();
        $(".loginout").show();
        $(".haslogin").html(getCookie("tel"));
    }

    $(".loginout").on("click", function() {
        delCookie("tel");
        $(".haslogin").html("");
        $(".noname").show();
        $(".loginout").hide();
    })
})(jQuery);