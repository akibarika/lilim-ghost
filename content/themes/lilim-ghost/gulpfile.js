var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./assets/css/screen.less') //path to your main less file
    .pipe(less())
    .pipe(gulp.dest('./assets/css')); // your output folder
});