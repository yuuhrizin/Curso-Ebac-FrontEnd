var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

function compilarSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/styles'));
}

function minificarJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function minificarImg() {
    return gulp.src('./src/img/*')
        .pipe(imagemin()) 
        .pipe(gulp.dest('./build/img'));
}

exports.default = gulp.parallel(compilarSass, minificarJS, minificarImg);
