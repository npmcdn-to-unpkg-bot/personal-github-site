var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sass = require("gulp-sass");
var merge = require("merge-stream");

var cssVersion = "0.0.1";

gulp.task("default", ["NoDefault"]);

gulp.task("NoDefault", function () {
    // I do nothing. I don't like running things by default.
});

gulp.task("CopyBootstrapToSrc", function () {
    return gulp.src([
        "bootstrap/scss/**"
    ], { cwd: "node_modules/**" }).pipe(gulp.dest('./src/css'));
});

gulp.task("CopyFontAwesomeToSrc", function () {
    var fonts = gulp.src([
        "font-awesome/fonts/*"
    ], { cwd: "node_modules/**" }).pipe(gulp.dest('./src/fonts'));

    var styles = gulp.src([
        "font-awesome/css/font-awesome.css",
        "font-awesome/css/font-awesome.min.css",
    ], { cwd: "node_modules/**" }).pipe(replace("../fonts", "../../../fonts/font-awesome/fonts")).pipe(gulp.dest('./src/css'));

    return merge(fonts, styles);
});

gulp.task("CopyPrimeNGToSrc", function () {
    var styles = gulp.src([
        "primeui/primeui-ng-all.min.css",
        "primeui/themes/bootstrap/theme.css",
        "primeui/themes/bootstrap/images/ui-icons_333333_256x240.png",
        "primeui/themes/bootstrap/images/ui-icons_ffffff_256x240.png"
    ], { cwd: "node_modules/**" }).pipe(gulp.dest("./src/css"));

    return styles;
});

gulp.task("CompileSass", function () {
    return gulp.src("./src/css/app.scss")
        .pipe(sass({ includePaths: ["./src/css/bootstrap/scss", "./src/css"] }))
        .pipe(rename("app-" + cssVersion + ".css"))
        .pipe(gulp.dest("./src/css"))
        .pipe(cleanCSS())
        .pipe(rename("app-" + cssVersion + ".min.css"))
        .pipe(gulp.dest("./src/css"));
});

gulp.task("CompileAppSass", function () {
    return gulp.src("./src/app/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/app"))
        .pipe(cleanCSS())
        .pipe(rename(function (path) {
            path.extname = ".min.css"
        }))
        .pipe(gulp.dest("./src/app"));
});

gulp.task("CopyToDist", function () {
    return gulp.src([
        "**/*.js",
        "**/*.js.map",
        "**/*.css",
        "**/*.html",
        "**/*.png",
        "**/*.otf",
        "**/*.eot",
        "**/*.svg",
        "**/*.ttf",
        "**/*.woff",
        "**/*.woff2"
    ], { cwd: "src/**" }).pipe(gulp.dest("./dist"));
});