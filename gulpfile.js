var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'

    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(autoprefixer())
});

gulp.task('default', function(){
  gulp.watch('./scss/**/*.scss',['sass']);
});
