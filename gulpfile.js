var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var riot = require('gulp-riot');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');


gulp.task('browser-sync', function() {
    browserSync.init({
    	files: "dist/**",
        server: {
            baseDir: "./dist/"
        }
    });
})

gulp.task('riot',function(){
	return gulp.src('src/tags/**/*.tag')
	.pipe(riot().on('error',function(){}))
	.pipe(concat('tags.js'))
	.pipe(gulp.dest('src'))
})

gulp.task('concat-uglify-js',['riot'],function(){
    return gulp.src(['node_modules/riot/riot.min.js','src/**/*.js'],{base:'.'})
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))

})

gulp.task('clean',function(){
    setTimeout(function(){ del('src/tags.js')},1000)
})

gulp.task('copy',function() {
    gulp.src(['src/index.html','src/styles/*.*'])
    .pipe(gulp.dest('dist'))
})

gulp.task('watch',function(){
    gulp.watch(['src/**/*.tag','src/scripts/*.js'],['concat-uglify-js','clean'])
    gulp.watch(['src/index.html','src/styles/*.*'],['copy'])
})

gulp.task('default', ['browser-sync','concat-uglify-js','copy','clean','watch'])