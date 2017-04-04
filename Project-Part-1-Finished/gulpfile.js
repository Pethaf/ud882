const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
 
gulp.task('default', () =>
    gulp.src('images_src/*')
        .pipe(imagemin())
        .pipe(imageResize( { 
        	width : 1600,
        	height : 1200, 
        	crop : true, 
        	upscale : false

        }))
        .pipe(gulp.dest('images_dest/'))
);