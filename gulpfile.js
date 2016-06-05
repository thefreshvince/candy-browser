const gulp = require('gulp'),
  filter = require('gulp-filter'),
  webserver = require('gulp-webserver'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-cssmin'),
  autoprefixer = require('gulp-autoprefixer'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify');

gulp.task('sass', function(){

  const f_scss = filter([
      '**/*.scss',
      '!**/site.scss',
      '!**/site/*'
    ], {restore: true}),
    f_css = filter([
      '**/*.css',
      '!**/site.css',
      '!**/site/*',
      '!**/normalize.css'
    ], {restore: true});

  return gulp.src([
      './node_modules/normalizecss/normalize.css',
      './source/sass/**/*.scss'
    ])
    .pipe(plumber())
    .pipe(f_scss)
    .pipe(gulp.dest('./dist/scss/'))
    .pipe(f_scss.restore)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(notify('Sass compiled'))
    .pipe(f_css)
    .pipe(gulp.dest('./dist/'));

});

gulp.task('js', function(){});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }))
    .pipe(notify('Started webserver'));
});

gulp.task('watch', function(){
  gulp.watch('./source/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'webserver', 'watch'])
