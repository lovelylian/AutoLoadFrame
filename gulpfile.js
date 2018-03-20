var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sass = require('gulp-sass');
// 编译ts文件同时移动js文件
gulp.task("ts", function () {

    gulp.src("src/**/*.ts", { base: 'src' })
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
})
gulp.task("js", function () {
    gulp.src("src/**/*.js", { base: 'src' })
        .pipe(gulp.dest('dist'));
})
//执行上面两个命令
gulp.task("tsandjs",["ts","js"])

// 移动html文件
gulp.task("html",function(){
    gulp.src("src/**/*.html", { base: 'src' })
    .pipe(gulp.dest('dist'));
})

// 编译scss文件
gulp.task('sass', function () {
    return gulp.src('src/**/**/*.scss',{ base: 'src' })
      .pipe(sass())
      .pipe(gulp.dest('./dist'));
  });

// 默认命令
gulp.task('default',['tsandjs','html','sass'])

// 监视改动
gulp.task('serve:watch', function () {
    browserSync.init({
        server: "./dist"
    });
    // 暂时监控这四个变动，剩余的遇到了再添加
    gulp.watch("src/**/*.html",['html']).on('change', browserSync.reload);
    gulp.watch("src/**/*.js",['js']).on('change', browserSync.reload);
    gulp.watch("src/**/*.ts",['ts']).on('change', browserSync.reload);
    gulp.watch("src/**/**/*.scss",['sass']).on('change', browserSync.reload);
});