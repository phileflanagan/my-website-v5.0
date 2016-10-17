var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './'
    });
    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
      .pipe(plumber({
        errorHandler: function(error) {
          notify().write({
            title: 'Gulp: SCSS',
            message: error.message
          });
          console.log(error.message);
          browserSync.notify(error.message);
          this.emit('end');
        }
      }))
      .pipe(sass())
      .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
       }))
      .pipe(gulp.dest('./css/'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['serve']);
