let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));

gulp.task("style",()=>{
    return gulp.src('./source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', gulp.series(['style']));
gulp.task('watch', ()=>{
    gulp.watch('./source/scss/**/*.scss', (done) => {
        gulp.series(['style'])(done);
    });
});