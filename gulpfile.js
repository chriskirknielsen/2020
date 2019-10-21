const root = 'src'; // Root folder
const gulp = require("gulp");
//const sass = require("gulp-sass");
const sass = require('gulp-dart-sass');

gulp.task('css', function () {
    return gulp.src([
        './'+root+'/_includes/assets/scss/*.scss',
        '!_*.scss',
    ])
        .pipe(sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./'+root+'/_includes/assets/css'));
});

gulp.task("watch", function () {
    gulp.watch('./'+root+'/_includes/assets/scss/**/*.scss', gulp.parallel('css'));
    //gulp.watch('./'+root+'/_includes/assets/js/**/*.js', gulp.parallel('js'));
});

gulp.task('build', gulp.parallel(
    'css'
));