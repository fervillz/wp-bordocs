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
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
