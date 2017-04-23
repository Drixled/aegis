// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');
    sass  = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');
    bs = require('browser-sync').create(); // create a browser sync instance.

// process sass files to css files
gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sourcemaps.init())  // Process the original sources
		.pipe(sass())
	.pipe(sourcemaps.write()) // Add the map to modified source.
	.pipe(gulp.dest('dist/assets/css'))
	.pipe(bs.reload({stream: true}));
});


gulp.task('browser-sync', function() {
	bs.init({
		server: {
			baseDir: "./"
		}
	});
});

// create watch task
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});

// create a default task and just log a message
gulp.task('default', ['sass']);