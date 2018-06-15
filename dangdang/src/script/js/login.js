var $login_btn = $(".btn .submit")
var $tel = $("input[name='username']");
var $password = $("input[name='password']");
$login_btn.on("click", function() {
    $.ajax({
        type: "POST",
        async: "true",
        url: "http://localhost/dangdangtest/dangdang/php/login.php",
        data: {
            "tel": $tel.val(),
            "password": $password.val()
        }
    }).done(function($data) {
        if ($data) {
                location.href = 'index.html';
                addCookie('tel', $tel.val(), 7);
        } else {
            $("#username_checkmessage").html('用户名或密码输入错误，请核对后重新输入。').css({ "font-size": "12px", "color": "#f00" });
            $(".user").css({ "border": "1px solid #ff0000" });
            $(".user").children("span").css({ "background-position": "-14px -110px" });
            $(".pw").children("span").css({ "background-position": "-14px -150px" });
            $(".pw").css({ "border": "1px solid #ff0000" });
        }
    })

})

function addCookie(key, value, day) {
    var date = new Date(); //创建日期对象
    date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
    document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
}