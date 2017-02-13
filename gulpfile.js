var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('default', ['start'])

gulp.task('start', function () {
  nodemon({
    script: './index.js'
    , ext: 'js html'
    , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('lint', function() {
  gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./**/*.js', ['lint']);
});