module.exports = function(grunt){

  // Configure main project settings
  grunt.initConfig({

      // Basic settings and info about our plugins
      pkg: grunt.file.readJSON('package.json'),

      watch: {
          less:  { files: ['less/*.less', 'css/*.css'], tasks: [ 'less', 'cssmin' ] },
          js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
      },

      less: {
        development: {
          options: {
            paths: ['less/']
          },
          files: {
            'css/app.css': 'less/app.less'
          }
        }
      },

      cssmin: {
        my_target: {
          files: [{
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
      },

      uglify: {
          files: {
              src: 'js/*.js',  // source files mask
              dest: 'js/',    // destination folder
              expand: true,    // allow dynamic building
              flatten: true,   // remove all unnecessary nesting
              ext: '.min.js'   // replace .js to .min.js
          }
      }

  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Execute task
  grunt.registerTask('default', ['watch', 'less', 'cssmin', 'uglify']);

};
