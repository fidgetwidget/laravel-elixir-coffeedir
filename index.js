var gulp    = require('gulp');
var coffee  = require('gulp-coffee');
var uglify  = require('gulp-uglify')
var gulpif  = require('gulp-if');
var elixir  = require('laravel-elixir');

var utilities = require('laravel-elixir/ingredients/commands/Utilities');
var Notification = require('laravel-elixir/ingredients/commands/Notification');


/*
 |----------------------------------------------------------------
 | CoffeeScript Compilation
 |----------------------------------------------------------------
 |
 | This task will compile your CoffeeScript, minify it, and then
 | optionally generate a "manifest" file that helps with your
 | browser cache-busting of previous versions of your code.
 |
 */

elixir.extend('coffeedir', function(src, output, options) {

  var config  = this;
  var baseDir = config.assetsDir + 'coffee/';
  var search  = '**/*.coffee';
  var options = options || {};

  var onError = function(e) {
    new Notification().error(e, 'CoffeeScript Compilation Failed!');

    this.emit('end');
  };

  src = utilities.buildGulpSrc(src, baseDir, search);

  gulp.task('coffeedir', function() {

    return gulp.src(src)
      .pipe(coffee(options).on('error', onError))
      .pipe(gulpif(config.production, uglify()))
      .pipe(gulp.dest(output || config.jsOutput))
      .pipe(new Notification().message('CoffeeScript Compiled!'));

  });

  this.registerWatcher('coffeedir', baseDir + search);

  return this.queueTask('coffeedir');

});