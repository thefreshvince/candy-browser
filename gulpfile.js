const gulp = require('gulp'),
  filter = require('gulp-filter'),
  webserver = require('gulp-webserver'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-cssmin'),
  autoprefixer = require('gulp-autoprefixer'),
  watch = require('gulp-watch');

gulp.task('sass', function(){
  const scss = filter([
      '**/*.scss',
      '!**/site.scss',
      '!**/site/*'
    ], {restore: true}),
    css = filter([
      '**/*.css',
      '!**/site.css',
      '!**/site/*'
    ]);
  return gulp.src('./source/sass/**/*.scss')
    .pipe(watch('./source/sass/**/*.scss'))
    .pipe(scss)
    .pipe(gulp.dest('./dist/scss/'))
    .pipe(scss.restore)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(css)
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function(){

});
