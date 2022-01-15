const root = 'src'; // Root folder
const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass')); // dart-sass
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

gulp.task('css', function () {
    return gulp.src([
        './'+root+'/_includes/assets/scss/*.scss',
        '!_*.scss',
    ])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./'+root+'/_includes/assets/css'));
});

gulp.task('js', function () {
    return gulp.src([
        './'+root+'/_includes/assets/js/*.js',
    ])
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./'+root+'/_includes/assets/jsmin'));
});

gulp.task('watch', function () {
    gulp.watch('./'+root+'/_data/tokens.json', gulp.parallel('tokens'));
    gulp.watch('./'+root+'/_includes/assets/scss/**/*.scss', gulp.parallel('css'));
    gulp.watch('./'+root+'/_includes/assets/js/**/*.js', gulp.parallel('js'));
});

gulp.task('tokens', function (cb) {
    const cmd = spawn('npx', ['json-to-scss', root+'/_data/tokens.json', root+'/_includes/assets/scss/settings/_tokens.scss', '--k="dq"'], {stdio: 'inherit'});
    cmd.on('close', function (code) {
        console.log('tokens exited with code ' + code);
        cb(code);
    });
    return cmd;
})

gulp.task('build-css', gulp.series('tokens', 'css'));