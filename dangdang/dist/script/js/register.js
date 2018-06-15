var $tel = $("input[name='tel']");
var $pw = $("input[name='password']");
var $repw = $("input[name='repassword']");
var $clause=$("input[type='checkbox']");
var $tel_checkmessage = $(".tel_checkmessage");
var $pw_checkmessage = $(".pw_checkmessage .content");
var $re_checkmessage = $(".re_checkmessage");
var $tel_reg = /^1\d{10}$/;
var $pw_reg = /^(\w|\W){6,20}$/;
var $pw_reg1 = /\d/g;
var $pw_reg2 = /([a-z]|[A-Z])/;
var $pw_reg3 = /\W/;
var $tel_isright = $(".tel_isright");
var $pw_isright = $(".pw_isright");
var $re_isright = $(".re_isright");
var $pw_level = $(".pw_level");
var $submit = $(".submit");
var $telkey = false; //判断手机是否填写完成并正确
var $pwkey = false; //判断密码是否填写完成并正确
var $repwkey = false;//判断密码确认是否填写完成并正确
$tel.on("blur", function() {
    if (!$tel.val() == "") {
        if ($tel_reg.test($tel.val())) {
            $tel_checkmessage.html("").css({ "color": "#787878" });
            $.ajax({
                type: "POST",
                url: "../../php/data.php",
                async: "true",
                data: "tel=" + $tel.val()
            }).done(function(data) {
                if (!data) {
                    $tel_isright.show().css({ "background-position": "0 -40px" });
                    $tel.css({ "background-color": "#fff", "border-color": "#e6e6e6" });
                    $telkey = true;
                } else {
                    $tel_isright.show().css({ "background-position": "0 -20px" });
                    $tel.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
                    $tel_checkmessage.html("此手机号已注册，请更换其它手机号").css({ "color": "red" });
                }
            })
        } else {
            $tel.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
            $tel_checkmessage.html("手机格式不正确，请重新输入").css({ "color": "red" });
            $tel_isright.show().css({ "background-position": "0 -20px" });
        }
    } else {
        $tel_isright.hide();
        $tel_checkmessage.html("手机号可用于登录、找回密码、接收订单通知等服务");
    }
})
$pw.bind("input", function() {
    if ($pw.val() != "") {
        if ($pw_reg.test($pw.val())) {
            $pw_isright.show().css({ "background-position": "0 -40px" });
            $pw.css({ "background-color": "#fff", "border-color": "#e6e6e6" });
            var $i = 0;
            if ($pw_reg1.test($pw.val())) {
                $i++;
            }
            if ($pw_reg2.test($pw.val())) {
                $i++;
            }
            if ($pw_reg3.test($pw.val())) {
                $i++;
            }
            if ($i == 1) {
                $pw_level.css({ "display": "inline-block" });
                $pw_checkmessage.html("密码过于简单").css({ "color": "#787878" });
            }
            if ($i == 2) {
                $pw_level.css({ "display": "inline-block" });
                $pw_level.eq(1).css({ "background-color": "#ff0" });
                $pw_checkmessage.html("试试字母、符号、数字的组合更安全").css({ "color": "#787878" });
            }
            if ($i == 3) {
                $pw_level.css({ "display": "inline-block" });
                $pw_level.eq(2).css({ "background-color": "#0f0" });
                $pw_checkmessage.html("密码设置安全，放心使用").css({ "color": "#787878" });
            }
            $pwkey = true;
        } else {
            $pw_level.hide();
            $pw_isright.show().css({ "background-position": "0 -20px" });
            $pw_checkmessage.html("密码长度6-20个字符，请重新输入").css({ "color": "red" });
            $pw.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
        }
    } else {
        $pw_level.hide();
        $pw_checkmessage.html("");
        $pw_isright.hide();
    }
})
$repw.on("focus", function() {
    $re_checkmessage.html("请再次输入密码").css({ "color": "#787878" });
})
$repw.on("blur", function() {
    if ($repw.val() != "") {
        if ($repw.val() == $pw.val()) {
            if ($repw.val().length >= 6 &&$repw.val().length<=20) {
                $re_isright.show().css({ "background-position": "0 -40px" });
                $repw.css({ "background-color": "#fff", "border-color": "#e6e6e6" });
                $re_checkmessage.html("");
                $repwkey = true;
            } else {
                $re_isright.show().css({ "background-position": "0 -20px" });
                $re_checkmessage.html("两次输入的密码不一致，请重新输入").css({ "color": "red" });
                $repw.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
            }

        } else {
            $re_isright.show().css({ "background-position": "0 -20px" });
            $re_checkmessage.html("两次输入的密码不一致，请重新输入").css({ "color": "red" });
            $repw.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
        }
    } else {
        $re_isright.hide();
        $re_checkmessage.html("");
    }
})
$pw.on("blur", function() {
    if ($repw.val() != "") {
        if ($repw.val() == $pw.val()) {
            if ($repw.val().length >= 6 && $repw.val().length<=20) {
                $re_isright.show().css({ "background-position": "0 -40px" });
                $repw.css({ "background-color": "#fff", "border-color": "#e6e6e6" });
                $re_checkmessage.html("");
                $repwkey = true;
            } else {
                $re_isright.show().css({ "background-position": "0 -20px" });
                $re_checkmessage.html("两次输入的密码不一致，请重新输入").css({ "color": "red" });
                $repw.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
            }

        } else {
            $re_isright.show().css({ "background-position": "0 -20px" });
            $re_checkmessage.html("两次输入的密码不一致，请重新输入").css({ "color": "red" });
            $repw.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
        }
    }

})
$("form").on("submit", function() {
    var key=true;  //判断各个内容是否填写完成
    if ($tel.val() == "") {
        $tel_checkmessage.html("手机号码不能为空").css({ "color": "red" });
        $tel_isright.show().css({ "background-position": "0 -20px" });
        $tel.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
        key=false;
    }
    if($pw.val() == ""){
        $pw_checkmessage.html("登录密码不能为空").css({ "color": "red" });
        $pw_isright.show().css({ "background-position": "0 -20px" });
        $pw.css({ "background-color": "#fef0ef", "border-color": "#ff4646" }); 
        key=false;
    }
    if($repw.val() == ""){
        $re_checkmessage.html("登录密码不能为空").css({ "color": "red" });
        $re_isright.show().css({ "background-position": "0 -20px" });
        $repw.css({ "background-color": "#fef0ef", "border-color": "#ff4646" });
        key=false; 
    }
    if(!$clause.prop("checked")){
        key=false;
    }
    if(!($submit && $pwkey && $repwkey)){   //有一个key为false时 总的key为false
        key=false;
    }
    if(!key){
        return false;        
    }

})