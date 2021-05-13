const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('sassToCSS', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('watchFiles', function() {
  gulp.watch('src/scss/*.scss', gulp.series('sassToCSS'));
});

gulp.task('default', gulp.parallel('watchFiles'));
