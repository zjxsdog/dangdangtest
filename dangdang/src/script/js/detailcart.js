define(["jquery"], function() {
    var $addbtn = $(".num_add");
    var $delbtn = $(".num_del");
    var nownumber=Number($("input[name='number']").val());
    $addbtn.on("click", function() {
        nownumber++;
        $("input[name='number']").prop("value", nownumber);
    })
    $delbtn.on("click", function() {
        if (nownumber > 1) {
            nownumber--;
            $("input[name='number']").prop("value", nownumber);
        }
    })

    var sidarr=[];
    var numarr=[];
    function getcookievalue() {
        if (getCookie('cartsid')) { //cartsid：cookie里面id的名称
            sidarr = getCookie('cartsid').split(','); //cookie转数组
        }

        if (getCookie('cartnum')) { //cartnum：cookie里面数量的名称
            numarr = getCookie('cartnum').split(',');
        }
    }


    $("#gift_card_button").on("click", function() {
        var sid = $(this).parents(".scale_box").find("#spic").children("img").attr("sid");
        getcookievalue();
        if ($.inArray(sid, sidarr) != -1) {
            var prenumber=getCookie("cartnum").split(",")[$.inArray(sid, sidarr)];
            nownumber=Number($("input[name='number']").val());
            number=Number(prenumber)+nownumber;
            numarr[$.inArray(sid, sidarr)]=number;
            addCookie("cartnum", numarr.toString(), 7);
        } else {
            sidarr.push(sid);
            addCookie("cartsid", sidarr.toString(), 7);
            numarr.push($("input[name='number']").val());
            addCookie("cartnum", numarr.toString(), 7);
        }
    })






    //添加cookie的函数
    function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }
    //得到cookie
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
    //删除cookie

    function delCookie(key) {
        addCookie(key, '', -1); //添加的函数,将时间设置为过去时间
    }
})