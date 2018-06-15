
var gulp=require("gulp");//引入gulp插件
var html=require("gulp-minify-html");//引入html压缩插件
var sass=require("gulp-sass");//引入sass编译插件
var css=require("gulp-minify-css")//引入css压缩插件
var connect=require("gulp-connect");//配置自刷新插件
var jshint=require("gulp-jshint");//js错误检测
var concat=require("gulp-concat");//js代码合并
var uglify=require("gulp-uglify");//js压缩插件
var rename=require("gulp-rename");//重命名插件
var imagemin=require("gulp-imagemin");//图片压缩插件
//复制文件(目录拷贝)
// gulp.task("copyhtml",function(){
// 	gulp.src("*.html")
// 	.pipe(gulp.dest("../dist"))
// })

//压缩html文件到线上
gulp.task("uglifyhtml",function(){
	gulp.src("html/*.html")
	.pipe(html())
	.pipe(gulp.dest("../dist/html/"));
})
//监听html
gulp.task("watchhtml",function(){
	gulp.watch("html/*.html",function(){
		gulp.run("uglifyhtml")
	})
})
//sass编译
gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./css/"))
})
//sass编译监听
gulp.task("watchsass",function(){
	gulp.watch("scss/*.scss",function(){
		gulp.run("sass");
	})
})
//css压缩
gulp.task("uglifycss",function(){
	gulp.src("./css/*.css")
	.pipe(css())
	.pipe(gulp.dest("../dist/css/"))
})
//监听css压缩
gulp.task("watchcss",function(){
	gulp.watch("./css/*.css",function(){
		gulp.run("uglifycss");
	})
})
//页面自刷新
gulp.task("connect",function(){
	connect.server({//配置服务器
		port:8888,
		livereload:true
	});
});

gulp.task("connecthtml",function(){
	gulp.src(["html/*.html","css/*.css"])
	.pipe(connect.reload());
});

gulp.task("connectwatch",function(){
	gulp.watch(["html/*.html","css/*.css"],["connecthtml"]);
});

//压缩图片

gulp.task("imagemin",function(){
	gulp.src("img/*.png")
	.pipe(imagemin())
	.pipe(gulp.dest("../dist/img"));
})

//执行任务
gulp.task("default",["watchsass","watchcss","watchhtml","connect","connectwatch","imagemin"]);