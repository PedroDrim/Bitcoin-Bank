var gulp = require("gulp");
var del = require("del");
var sourcemaps = require("gulp-sourcemaps")
var uglify = require('gulp-uglify');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var build_dir = "bin/build";

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(build_dir));
});

gulp.task("copy_view", function () {
    var folder = ["dev/views/**", "dev/public/**"];
    return gulp.src(folder, { base: "dev" })
        .pipe(gulp.dest(build_dir));
});

gulp.task("compress"), function () {
    return gulp.src(build_dir + "/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write());
}

gulp.task("clean", function () {
    return del(build_dir);
});

gulp.task("default", ["compile", "copy_view", "compress"]);