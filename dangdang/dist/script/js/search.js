define(["jquery"], function($) {
    function Search() {
        this.search = $(".searchbox input");
        this.search_list = $(".search_list");
        this.search_content = $(".search_list li");
        this.init();
    }
    Search.prototype = {
        init() {
            this.searchclick();
            this.searchblur();
            this.searchblind();
        },
        searchclick() {
            var that = this;
            this.search.on("click", function() {
                that.search.attr("value", "");
            })
        },
        searchblind() {
            var that = this;
            this.search.bind("input", function() {
                if (that.search.val().length != 0) {
                    that.search_list.show();
                } else {
                    that.search_list.hide();
                }
                require(["https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + that.search.val() + "&cb=define"], function(d1) {
                    that.search_content.each(function() {
                        $(this).find("a").html(d1.s[$(this).index()]);
                    })
                })
            })
        },
        searchblur() {
            var that = this;
            this.search.on("blur", function() {
                if (that.search.val().length == 0) {
                    that.search.prop("value", "苹果");
                }
                that.search_list.hide();
            })
        }
    }
    var search = new Search();
    return {
        "search": search,
    }
})