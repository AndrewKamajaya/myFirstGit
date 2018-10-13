var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create();

gulp.task("watch", function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })

    watch("./app/index.html", function() {
        gulp.start("html")
    })

    watch("./app/assets/style/**/*.css", function() {
        gulp.start("cssInject")
    })

})

gulp.task("cssInject", ["style"], function () {
    return gulp.src("./app/temp/style/styles.css")
        .pipe(browserSync.stream())
})

gulp.task("html", function() {
    browserSync.reload();
})