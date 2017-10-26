var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	tslint = require("gulp-tslint"),
	browserify = require('browserify'),
	transform = require('vinyl-transform'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	runSequence = require('run-sequence'),
	KarmaServer = require('karma').Server,
	browserSync = require('browser-sync'),
	dirSync = require( 'gulp-directory-sync' ),
	exec = require('child_process').exec;


var tsProject = ts.createProject({
  removeComments: true,
  noImplicitAny: true,
  target: 'ES3',
  module:'commonjs',
  declarationFiles: false
});

gulp.task("tsc", () => {
	return gulp.src('./src/**/*.ts')
	.pipe(tsProject())
	.js.pipe(gulp.dest("./tmp/"));
});

gulp.task("tslint", () => {
	return gulp.src('./src/**/*.ts')
		.pipe(tslint({
			formatter: 'stylish'
		}))
		.pipe(tslint.report());
});

gulp.task('default', (cb) => {
	runSequence('tslint', 'tsc', cb);
});

gulp.task("watch", () => {
	gulp.watch([
		'gulpfile.js',
		'src/*'
	], ["default"])
	.on('change', (event) => {
  		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
})


gulp.task('sync', function() {
	return gulp.src( '' )
		.pipe(dirSync( 'src', 'test', { printSummary: true } ))
		.on('error', () => {
			console.log("sync >>>>>>>");
		});
} );