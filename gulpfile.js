const gulp = require("gulp");
const babel = require("gulp-babel");
const concat=require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const sass=require("gulp-sass");
sass.compiler=require("node-sass")
const connect =require("gulp-connect");
const proxy = require("http-proxy-middleware");
const uglify = require('gulp-uglify');

gulp.task("html",()=>{
    return gulp.src("*.html")
    .pipe(gulp.dest("./dist/"))
    .pipe(connect.reload())
})
gulp.task("script",()=>{
    return gulp.src([
            "./javascripts/Accordion.js",
            "./javascripts/banner-swiper.js",
            "./javascripts/index.js",
            "./javascripts/Mounting.js",
            "./javascripts/renderPage.js",
            "./javascripts/select-check.js",
            "./javascripts/select1.js",
            "./javascripts/swiper.js",
            "./javascripts/time.js",
            "./javascripts/top_active.js",
            "./javascripts/totop-swiper.js",
        ])
    .pipe(sourcemaps.init())
    // .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/javascripts"))
})
gulp.task("script",()=>{
    return gulp.src([
            "./javascripts/list.js",
        ])
    .pipe(sourcemaps.init())
    // .pipe(babel())
    .pipe(concat("list.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/javascripts"))
})
gulp.task("uglifyjs",function(){
    return gulp.src("./dist/javascripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/javascripts/min.js"))
})
gulp.task("build",["script","uglifyjs"])
gulp.task("images",()=>{
    return gulp.src(["images/*.*"])
    .pipe(gulp.dest("dist/images/"))
})
gulp.task("styles", ()=>{
    return gulp.src(["stylesheets/*.css"])
    .pipe(gulp.dest("dist/stylesheets/"));
})
gulp.task("sass",()=>{
    return gulp.src("./sass/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("./dist/stylesheets/"))
})
gulp.task("connect",()=>{
    connect.server({
        port: 8001,
        root:"dist/",
        livereload:true,
        middleware:function(connect,opt){
            return [
                proxy("/douban",{
                    target:"https://api.douban.com",
                    pathRewrite:{
                        "/douban":"/"
                    }
                })
            ]
        }
    })
})
gulp.task("watch",()=>{
    gulp.watch("*.html",["html"])
    gulp.watch("images/*.*",["html","images"]);
    gulp.watch("javascripts/*.js",["html","script"])
    gulp.watch("sass/*.scss",["html","sass"])

})
gulp.task("default",["watch","connect","html","script","images","sass"]);
