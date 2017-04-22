// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
    sass  = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');

// process sass files to css files
gulp.task('build-css', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
	.pipe(sourcemaps.write()) // Add the map to modified source.
	.pipe(gulp.dest('dist/assets/css'));
});

// create watch task
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['build-css']);
});

// create a default task and just log a message
gulp.task('default', ['build-css']);