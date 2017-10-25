var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require("gulp-tslint");
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var KarmaServer = require('karma').Server;
var browserSync = require('browser-sync');
var exec = require('child_process').exec;

var browserified = uglify((filename) => {
  return browserify({
    entries: filename,
    debug: true
  }).bundle();
});

var tsProject = ts.createProject({
  removeComments: true,
  noImplicitAny: true,
  tartget: 'ES3',
  module:'commonjs',
  declarationFiles: false
});

var tsTestProject = ts.createProject({
  removeComments: false,
  noImplicitAny: true,
  tartget: 'ES3',
  module: 'commonjs',
  declarationFiles: false
});

gulp.task('sdsf', ['tslint', 'ts-test', 'tsc'], () => {
  console.log("Hello Gulp!");
} );

gulp.task('tslint', () => {
  return gulp.src([
    './src/**/*.ts'
  ]).pipe(tslint({
    formatter: "stylish"
  }))
   .pipe(tslint.report());
});

gulp.task('tsc', () => {
  console.log("tsc >>>>>>>>>>>>>");
  return gulp.src('./src/**/*.ts')
            .pipe(tsProject())
            .js.pipe(gulp.dest('./tmp/js'));
});

gulp.task('ts-test', () => {
  return gulp.src('./src/test/**/*.ts')
  .pipe(tsTestProject())
  .js.pipe(gulp.dest('./tmp/test'));
});

gulp.task('bundle', () => {
  return gulp.src('./tmp/**/*.js')
    .pipe(browserified)
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/source/'))
});

// 自动化测试
gulp.task("karma", (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    // singleRun: true
    }, done).start();
});

gulp.task("copy-html", ["bundle"], (cb) => {
  exec("cp index.html dist/", error => {
    if(error) {
      cb(error);
    }
    cb();
  })
})

gulp.task("browse", ['copy-html'], () => {
  browserSync({
    server: {
      baseDir: "dist"
    }
  });
  return gulp.watch([
    "./dist/source/js/**/*.js",
    "./index.html",
    "./gulpfile.js"
    ], [browserSync.reload]);
});
// gulp 执行顺序控制
gulp.task("task1", () => {
  console.log("task1");
});

gulp.task("task2", () => {
  console.log("task2");
});

gulp.task("task3", () => {
  console.log("task3");
});

gulp.task("task", ["task1", "tsc", "sync","task3"], () => {
  console.log("task");
});

gulp.task("sync", ["tsc", "task3"], (cb) => {
  console.log("sync");

  exec("rm -rf  dist", (error) => {
    if(error) {
      cb(error);
    }
    cb();
  });
  setTimeout(() => {
    cb();
  }, 3000);
});

gulp.task("promise", ["task2", "tsc","task1"], () => {
  return new Promise((resole, reject) => {
    console.log("promise innnner");
    resole("promise");
  });
});


gulp.task("async2", ["promise", "task2"], () => {
  console.log("async2");
} );

// gulp.task("stream", (cb) => {
//    console.log("tsc");
//   return gulp.src('./src/**/*.ts')
//             .pipe(tsProject())
//             .js.pipe();
// });

gulp.task("sequence", (cb) => {
  runSequence(
    'task1',
    ["tsc", "task2"],
    "task3",
    cb
    );
});


/*gulp.task('bundle2', ["stream"], (stream) => {
  console.log("stream done")
  return stream
    .pipe(browserified)
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/source/'))
});

gulp.task("test-stream", ["stream"], () => {
  console.log("bundle2 done");
  console.log("test-stream");
})
*/