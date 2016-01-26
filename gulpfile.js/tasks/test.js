var gulp = require('gulp');
var jshint = require('gulp-mocha');

gulp.task('test', function() {
	return gulp.src('mochaTests.js', {read: false})
		.pipe(mocha());
});