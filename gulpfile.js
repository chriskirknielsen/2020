const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task('css', function () {
    return gulp.src([
        './src/_includes/assets/scss/*.scss',
        '!_*.scss',
    ])
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./src/_includes/assets/css'));
});

gulp.task("watch", function () {
    gulp.watch('./src/_includes/assets/scss/**/*.scss', gulp.parallel('css'));
    //gulp.watch('./src/_includes/assets/js/**/*.js', gulp.parallel('js'));
});

gulp.task('build', gulp.parallel(
    'css'
));