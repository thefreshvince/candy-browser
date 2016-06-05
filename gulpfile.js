const gulp = require('gulp'),
  filter = require('gulp-filter'),
  webserver = require('gulp-webserver'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-cssmin'),
  autoprefixer = require('gulp-autoprefixer'),
  watch = require('gulp-watch'),
  notify = require('gulp-notify');

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
    watch('./source/sass/**/*.scss', function () {
      gulp.src([
          './node_modules/normalizecss/normalize.css',
          './source/sass/**/*.scss'
        ])
        .pipe(scss)
        .pipe(gulp.dest('./dist/scss/'))
        .pipe(scss.restore)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./assets/css/'))
        .pipe(notify('Sass compiled'))
        .pipe(css)
        .pipe(gulp.dest('./dist/'));
    });
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

gulp.task('default', ['sass', 'webserver'])
