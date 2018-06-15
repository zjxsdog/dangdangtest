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
    $(".empty").show();
    $(".logined").hide();
    $(".shopping").hide();
    $(".shopping_total").hide();
})

$.getJSON("http://localhost/dangdangtest/dangdang/php/data.php", function(data) {
    $conmmend_list = $(".shopping_ads .show_box");
    var $html = "";
    $(data["index7"]).each(function(i) {
        if (i < 5) {
            $html += `<li sid="index7">
                            <a href="javascript:;">
                                <img src=${this.url.split(",")[0]} style="width:150px;height:150px;" sid="7.${i.toString()}"></img>
                            </a>
                            <p><a href="javascript:;">${this.title}</a></p>
                            <i>￥
                                <span class="show_price">${this.price}</span>
                            </i>
                            <b>加入购物车</b>
                        </li>`;
            $conmmend_list.html($html)
        }
    })
})



var $list = $('.list');
if (getCookie("tel")) {
    $(".empty").hide();
    if (getCookie("cartsid")) {
        $(".shopping").show();
        $(".shopping_total").show();
        $(".logined").hide();
        for (var $i = 0; $i < getCookie("cartsid").split(",").length; $i++) {
            $clone = $list.clone(true);
            var index = "index" + getCookie("cartsid").split(",")[$i].split(".")[0];
            var id = getCookie("cartsid").split(",")[$i].split(".")[1];
            var id = Number(id);
            var number = getCookie("cartnum").split(",")[$i];
            $.ajax({
                url: "http://localhost/dangdangtest/dangdang/php/data.php",
                async: false,
                dataType: "json"
            }).done(function(data) {
                $clone.find("input[type='checkbox']").addClass("pick");
                $clone.find('.list_img').find('img').attr('src', data[index][id].url.split(",")[0]);
                $clone.find('.title').children("a").html(data[index][id].title);
                $clone.find('.price').find('span').html(Number(data[index][id].price).toFixed(2));
                $clone.find('.number').val(number);
                $clone.find(".sumprice span").html((number * data[index][id].price).toFixed(2));
                $clone.css('display', 'block');
                $clone.appendTo($(".shoppinglists"));
                countmoney();

            })
        }
    } else {
        $(".logined").show();
        $(".shopping").hide();
        $(".shopping_total").hide();
    }


} else {
    $(".empty").show();
    $(".logined").hide();
    $(".shopping").hide();
    $(".shopping_total").hide();
}

//按钮增加
$(".shoppinglists").on("click", function(ev) {
    if ($(ev.target).attr("class") == "addnum") {
        var nownumber = Number($(ev.target).parent(".amount").find("input[type='text']").val());
        nownumber++;
        $(ev.target).parent(".amount").find("input[type='text']").prop("value", nownumber);
        var numarr = getCookie("cartnum").split(",");
        numarr[$(ev.target).parents(".list").index() - 1] = nownumber;
        addCookie("cartnum", numarr.toString(), 7);
        $(ev.target).parents(".list_content").find(".sumprice span").html((nownumber * $(ev.target).parents(".list_content").find(".price span").html()).toFixed(2));
        countmoney();
    }

})
$(".shoppinglists").on("click", function(ev) {
    if ($(ev.target).attr("class") == "delnum") {
        var nownumber = Number($(ev.target).parent(".amount").find("input[type='text']").val());
        if (nownumber > 1) {
            nownumber--;
            $(ev.target).parent(".amount").find("input[type='text']").prop("value", nownumber);
            var numarr = getCookie("cartnum").split(",");
            numarr[$(ev.target).parents(".list").index() - 1] = nownumber;
            addCookie("cartnum", numarr.toString(), 7);
            $(ev.target).parents(".list_content").find(".sumprice span").html((nownumber * $(ev.target).parents(".list_content").find(".price span").html()).toFixed(2));
            countmoney();
        }
    }
})
//删除
$(".shoppinglists").on("click", function(ev) {
    if ($(ev.target).parent("li").attr("class") == "remove") {
        var numarr = getCookie("cartnum").split(",");
        numarr.splice($(ev.target).parents(".list").index() - 1, 1);
        addCookie("cartnum", numarr.toString(), 7);
        var sidarr = getCookie("cartsid").split(",");
        sidarr.splice($(ev.target).parents(".list").index() - 1, 1);
        addCookie("cartsid", sidarr.toString(), 7);
        $(ev.target).parents(".list").remove();
    }
    countmoney();
    if ($(".list").size() == 1) {
        $(".logined").show();
        $(".shopping").hide();
        $(".shopping_total").hide();
    }
})
var $batchmove = $(".batch-remove");

$batchmove.on("click", function() {
    var $batch = $(".pick:checked").parents(".list");
    $batch.each(function() {
        var numarr = getCookie("cartnum").split(",");
        numarr.splice($(this).index() - 1, 1);
        addCookie("cartnum", numarr.toString(), 7);
        var sidarr = getCookie("cartsid").split(",");
        sidarr.splice($(this).index() - 1, 1);
        addCookie("cartsid", sidarr.toString(), 7);
        $(this).remove();
    })
    countmoney();
    if ($(".list").size() == 1) {
        $(".logined").show();
        $(".shopping").hide();
        $(".shopping_total").hide();
    }
})
//总价
function countmoney() {
    var shoppingtotal = $(".shopping_total .price");
    var allmoney = 0;
    $money = $(".sumprice span");
    $money.each(function() {
        allmoney += +$(this).html();
    })
    shoppingtotal.html(allmoney.toFixed(2));
};




var sidarr = [];
var numarr = [];

function getcookievalue() {
    if (getCookie('cartsid')) { //cartsid：cookie里面id的名称
        sidarr = getCookie('cartsid').split(','); //cookie转数组
    }

    if (getCookie('cartnum')) { //cartnum：cookie里面数量的名称
        numarr = getCookie('cartnum').split(',');
    }
}

$(".show_box").on("click", function(ev) {
    $(".shoppinglists").html($list);
    if (ev.target.nodeName == "B") {
        var sid = $(ev.target).parents("li").find("img").attr("sid");
        getcookievalue();
        if ($.inArray(sid, sidarr) != -1) {
            var prenumber = getCookie("cartnum").split(",")[$.inArray(sid, sidarr)];
            number = Number(prenumber) + 1;
            numarr[$.inArray(sid, sidarr)] = number;
            addCookie("cartnum", numarr.toString(), 7);
        } else {
            sidarr.push(sid);
            addCookie("cartsid", sidarr.toString(), 7);
            numarr.push(1);
            addCookie("cartnum", numarr.toString(), 7);
        }
    }
    if (getCookie("cartsid")) {
        $(".shopping").show();
        $(".shopping_total").show();
        $(".logined").hide();
        for (var $i = 0; $i < getCookie("cartsid").split(",").length; $i++) {
            $clone = $list.clone(true);
            var index = "index" + getCookie("cartsid").split(",")[$i].split(".")[0];
            var id = getCookie("cartsid").split(",")[$i].split(".")[1];
            var id = Number(id);
            var number = getCookie("cartnum").split(",")[$i];
            $.ajax({
                url: "http://localhost/dangdangtest/dangdang/php/data.php",
                async: false,
                dataType: "json"
            }).done(function(data) {
                $clone.find("input[type='checkbox']").addClass("pick");
                $clone.find('.list_img').find('img').attr('src', data[index][id].url.split(",")[0]);
                $clone.find('.title').children("a").html(data[index][id].title);
                $clone.find('.price').find('span').html(Number(data[index][id].price).toFixed(2));
                $clone.find('.number').val(number);
                $clone.find(".sumprice span").html((number * data[index][id].price).toFixed(2));
                $clone.css('display', 'block');
                $clone.appendTo($(".shoppinglists"));
                countmoney();

            })
        }
    } else {
        $(".logined").show();
        $(".shopping").hide();
        $(".shopping_total").hide();
    }

})