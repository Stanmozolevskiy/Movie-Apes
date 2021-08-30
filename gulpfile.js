//
// Gulpfile
//

"use strict";

const gulp                   = require('gulp');
const sass                   = require('gulp-sass');
const changed                = require('gulp-changed');
const autoprefixer           = require('gulp-autoprefixer');
const rename                 = require('gulp-rename');
const del                    = require('del');
const concat                 = require('gulp-concat');
const cleanCSS               = require('gulp-clean-css');
const uglify                 = require('gulp-uglify-es').default;
const cache                  = require('gulp-cache');
const fileinclude            = require('gulp-file-include');
const browsersync            = require('browser-sync').create();



//
// Gulp plumber error handler - displays if any error occurs during the process on your command
//

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}



//
// SASS - Compile SASS files into CSS
//

function scss() {
  return gulp
    .src('./assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./assets/css/'))
    .on('error', sass.logError)
    .pipe(autoprefixer([
        "last 1 major version",
        ">= 1%",
        "Chrome >= 45",
        "Firefox >= 38",
        "Edge >= 12",
        "Explorer >= 10",
        "iOS >= 9",
        "Safari >= 9",
        "Android >= 4.4",
        "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browsersync.stream());
}



//
// BrowserSync (live reload) - keeps multiple browsers & devices in sync when building websites
//

function browserSync(done) {
  browsersync.init({
    files: "./*.html",
    startPath: "./html/landings/",
    server: {
      baseDir: "./",
      routes: {},
      middleware: function (req, res, next) {
        if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() == 'POST') {
          console.log('[POST => GET] : ' + req.url);
          req.method = 'GET';
        }
        next();
      }
    }
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}



//
// Gulp Watch and Tasks
//

function watch() {
  gulp.watch('./src/assets/scss/**/*.scss', scss);
  gulp.watch(
    [
      './html/**/*.html',
      // './snippets/**/*.html',
      // './documentation/**/*.html'
    ],
    gulp.series(browserSyncReload)
  );
  gulp.watch('./snippets/partials/**/*.html', fileInclude);
  // gulp.watch('./documentation/partials/**/*.html', fileIncludeDocs);
}

// Gulp Tasks
// gulp.task('default', gulp.parallel(watch, scss, browserSync, fileInclude, fileIncludeDocs));
gulp.task('default', gulp.parallel(scss));



//
// CSS minifier - merges and minifies the below given list of Space libraries into one theme.min.css
//

function minCSS() {
  return gulp
    .src([
      './src/assets/css/theme.css',
    ])
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/assets/css/'));
}



//
// JavaSript minifier - merges and minifies the below given list of Space libraries into one theme.min.js
//

function minJS() {
  return gulp
    .src([
      './src/assets/js/hs.core.js',
      './src/assets/js/hs.chartjs.js',
      './src/assets/js/hs.circles.js',
      './src/assets/js/hs.clipboard.js',
      './src/assets/js/hs.countdown.js',
      './src/assets/js/hs.cubeportfolio.js',
      './src/assets/js/hs.datatables.js',
      './src/assets/js/hs.dropzone.js',
      './src/assets/js/hs.fancybox.js',
      './src/assets/js/hs.flatpickr.js',
      './src/assets/js/hs.ion-range-slider.js',
      './src/assets/js/hs.leaflet.js',
      './src/assets/js/hs.pwstrength.js',
      './src/assets/js/hs.selectpicker.js',
      './src/assets/js/hs.slick-carousel.js',
      './src/assets/js/hs.summernote-editor.js',
      './src/assets/js/hs.tagify.js',
      './src/assets/js/hs.validation.js',
      './src/assets/js/theme-custom.js',
    ])
    .pipe(concat('theme.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/dist/assets/js/'));
}



//
// Copy Vendors - a utility to copy client-side dependencies into a folder
//

function copyVendors() {
  return gulp
    .src([
      './node_modules/*aos/**/*',
      './node_modules/*bootstrap/**/*',
      './node_modules/*bootstrap-select/**/*',
      './node_modules/*chart.js/**/*',
      './node_modules/*clipboard/**/*',
      './node_modules/*datatables/**/*',
      './node_modules/*dropzone/**/*',
      './node_modules/*flag-icon-css/**/*',
      './node_modules/*flatpickr/**/*',
      './node_modules/*ion-rangeslider/**/*',
      './node_modules/*jquery/**/*',
      './node_modules/*jquery-countdown/**/*',
      './node_modules/*jquery-migrate/**/*',
      './node_modules/*jquery-validation/**/*',
      './node_modules/*leaflet/**/*',
      './node_modules/*pwstrength-bootstrap/**/*',
      './node_modules/*summernote/**/*',
      './node_modules/*tagify/**/*',
      './node_modules/*typed.js/**/*',
    ])
    .pipe(gulp.dest('./dist/assets/vendor/'))
};



//
// File Include
//

function fileInclude() {
  return gulp
    .src(['./snippets/partials/src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true
    }))
    .pipe(gulp.dest('./snippets/'))
    .pipe(browsersync.stream());
};

// function fileIncludeDocs() {
//   return gulp
//     .src(['./documentation/partials/src/**/*.html'])
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file',
//       indent: true
//     }))
//     .pipe(gulp.dest('./documentation/'))
//     .pipe(browsersync.stream());
// };



gulp.task('minCSS', minCSS);
gulp.task('minJS', minJS);
gulp.task('copyVendors', copyVendors);
// gulp.task('fileInclude', fileInclude);
// gulp.task('fileIncludeDocs', fileIncludeDocs);
gulp.task('dist', gulp.series(copyVendors, minCSS, minJS));
