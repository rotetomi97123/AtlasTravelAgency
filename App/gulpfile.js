const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");

// Compile SCSS to CSS
function style() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

// Compile JSX to JavaScript
function scripts() {
  return gulp
    .src("src/js/**/*.jsx")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env", "@babel/preset-react"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
}

// Watch and Serve
function watch() {
  browserSync.init({
    proxy: "http://localhost:5173/",
  });

  gulp.watch("src/scss/*.scss", style);
  gulp.watch("src/js/**/*.jsx", scripts);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("src/css/*.css").on("change", browserSync.reload);
}

// Define default task that can be called by just running `gulp`
exports.style = style;
exports.scripts = scripts;
exports.watch = watch;
exports.default = watch;
