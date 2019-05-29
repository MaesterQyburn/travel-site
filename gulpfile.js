var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested");


gulp.task('default',function(){
	console.log('Hurray! You created a gulp task.');
});


gulp.task('html', function(){
	console.log('Changes in HTML.');
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([autoprefixer, nested, cssvars]))
	 	.pipe(gulp.dest('./app/temp/styles'));

	console.log('Changes in CSS or PostCSS.');
});

gulp.task('watch',function(){
	
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});