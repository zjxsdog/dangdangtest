define(["jquery"], function($) {

    return {
        "countdown": (function() {
            $hour = $(".hour");
            $minute = $(".minute");
            $second = $(".second");
            $time = $(".miaosha_head ul a");
            setInterval(function() {
                var d = new Date();
                var num1 = d.getTime();
                if (d.getHours() < 10) {
                    d.setHours(10, 0, 0, 0);
                    var num2 = d.getTime();
                    var num = Math.floor((num2 - num1) / 1000);
                    $time.eq(0).css({ "color": "#ff2832" });
                } else if (10 <= d.getHours() && d.getHours() < 12) {
                    d.setHours(12, 0, 0, 0);
                    var num2 = d.getTime();
                    var num = Math.floor((num2 - num1) / 1000);
                    $time.eq(1).css({ "color": "#ff2832" });
                } else if (12 <= d.getHours() && d.getHours() < 17) {
                    d.setHours(17, 0, 0, 0);
                    var num2 = d.getTime();
                    var num = Math.floor((num2 - num1) / 1000);
                    $time.eq(2).css({ "color": "#ff2832" });
                } else if (17 <= d.getHours() < 22) {
                    d.setHours(22, 0, 0, 0);
                    var num2 = d.getTime();
                    var num = Math.floor((num2 - num1) / 1000);
                    $time.eq(3).css({ "color": "#ff2832" });
                } else if (d.getHours() >= 22) {
                    d.setHours(24, 0, 0, 0);
                    var num2 = d.getTime();
                    var num = Math.floor((num2 - num1) / 1000);
                    $time.eq(4).css({ "color": "#ff2832" });
                }
                var hour = parseInt(num / 3600);
                if (hour < 10) {
                    hour = "0" + hour;
                }
                var minute = parseInt(num % 3600 / 60);
                if (minute < 10) {
                    minute = "0" + minute;
                }
                var second = num % 60;
                if (second < 10) {
                    second = "0" + second;
                }
                $hour.html(hour);
                $minute.html(minute);
                $second.html(second);
                if (17 <= d.getHours() < 22) {
                    d.setHours(22, 0, 0, 0);
                    var num2 = d.getTime();
                    var num = Math.floor((num2 - num1) / 1000);
                }
            }, 1000)

        })()
    }
})