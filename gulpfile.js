var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var fs          = require('fs');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var semver      = require('semver');
var rimraf      = require('rimraf');
var path        = require('path');
var replace     = require('gulp-replace');
var jeditor     = require("gulp-json-editor");

var gulpLoadPlugins = require('gulp-load-plugins'),
   plugins = gulpLoadPlugins();

gulp.task('browserify',function(cb) {
  return browserify({
    entries: ['./public/index.js']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(gulpif(gulp.dest('./public')))
}); 