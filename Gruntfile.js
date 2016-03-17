module.exports = function(grunt) {
		grunt.initConfig({
				pkg: grunt.file.readJSON('package.json'),

				sass: {
						options: {
								includePaths: ['bower_components/bootstrap-sass/assets/stylesheets']
						},
						dist: {
								options: {
										outputStyle: 'expanded',
										sourceMap: true,
										style: 'expanded',
								},
								files: {
										//'css/app.css': 'scss/app.scss'
										'css/app.css': 'bower_components/bootstrap-sass/assets/stylesheets/style.scss'
								}
						}
				},

				autoprefixer: {
						dist: {
								files: {
										'css/app.css': 'css/app.css',
								},
						},
				},

				watch: {
						grunt: {
								options: {
										reload: true
								},
								files: ['Gruntfile.js']
						},

						sass: {
								files: 'bower_components/bootstrap-sass/assets/stylesheets/**/*.scss',
								tasks: ['sass']
						}
				},

				copy: {
						build: {
								cwd: 'bower_components/animate.css',
								src: ['animate.min.css'],
								dest: 'css',
								expand: true
						},
				},

				bower_concat: {
						all: {
								dest: "js/scripts.js",
								mainFiles: {
										'jquery': ['dist/jquery.min.js'],
										'bootstrap-sass': ['assets/javascripts/bootstrap.min.js'],
										'jquery.stellar': ['src/jquery.stellar.min.js'],
										'okaynav': ['dist/js/jquery.okayNav-min.js'],
										'owl.carousel': ['dist/owl.carousel.min.js'],
										'sneakpeek': ['index.js'],
										'sneakpeek': ['dist/wow.min.js']
								}
						}
				},

				uglify: {
						bower: {
								options: {
										mangle: true,
										compress: true
								},
								files: {
										'js/scripts.min.js': 'js/scripts.js'
								}
						}
				}

		});

		require('load-grunt-tasks')(grunt);

		grunt.registerTask('build', ['sass']);
		grunt.registerTask('default', ['build', 'watch']);
		grunt.registerTask('buildbower', [
				'bower_concat',
				'uglify:bower'
		]);
}
