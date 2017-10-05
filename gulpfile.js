var gulp = require("gulp");
var del = require("del");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var tslint = require("gulp-tslint");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var build_dir = "bin/build";

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tslint({
            formatter: "msbuild"
        }))
        .pipe(tslint.report())
        .pipe(tsProject())
        .js.pipe(gulp.dest(build_dir));
});

gulp.task("copy_view", function () {
    var folder = ["src/views/**", "src/public/**"];
    return gulp.src(folder, { base: "src" })
        .pipe(gulp.dest(build_dir));
});

gulp.task("compress"), function () {
    return gulp.src(build_dir + "/**/*.{js,jsx}")
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(sourcemaps.write("."));
}

gulp.task("clean", function () {
    return del(build_dir);
});

gulp.task("default", ["compile", "copy_view", "compress"]);
