module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['css/src/*.scss'],
        tasks: ['compass:development']
      },
      scripts: {
        files: ['js/src/*.js'],
        tasks: ['concat']
      }
    },
    clean: {
      css: ["css/dist"],
      js: ["js/dist"]
    },
    compass: {
      development: {
        options: {
          bundleExec: true,
          config: 'config.rb'
        }
      }
    },
    cssmin: {
      minify: {
        options: {
          report: 'gzip'
        },
        expand: true,
        cwd: 'css/dist/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/dist/'
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      default: {
        src: ['js/src/default.jquery.js'], // Add more files to concat in this line
        dest: 'js/dist/default.jquery.js'
      }
    },
    uglify: {
      default: {
        files:{
          'js/dist/default.jquery.js':['js/dist/default.jquery.js'],
        }
      }
    },
    smushit: {
      all: {
        src: 'images'
      },
    },
    webfont: {
      icons: {
        src: 'fonts/src/*.svg',
        dest: 'fonts',
        destCss: 'css/src',
        options: {
            stylesheet: 'scss',
            relativeFontPath: '/frontend/fonts'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-smushit');
  grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'compass:development', 'concat']);
  grunt.registerTask('production', ['cssmin', 'uglify', 'smushit']);

};