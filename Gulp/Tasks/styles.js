var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins");

gulp.task('styles', function(){
	console.log('Changes in CSS or PostCSS.');
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([autoprefixer, cssImport, mixins, nested, cssvars]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
	 	.pipe(gulp.dest('./app/temp/styles'));
});