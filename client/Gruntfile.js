module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          almond: true,
          wrap: {
            start: ";(function() {",
            end: "}());"
          },
          preserveLicenseComments: false,
          baseUrl: "js/app",
          name: "../lib/almond",
          include: [
            "../main",
            "router",
            "pages/home"
          ],
          mainConfigFile: "js/main.js",
          out: "dist/main.js",
          done: function(done, output) {
            var duplicates = require('rjs-build-analysis').duplicates(output);

            if (duplicates.length > 0) {
              grunt.log.subhead('Duplicates found in requirejs build:');
              grunt.log.warn(duplicates);
              done(new Error('r.js built duplicate modules, please check the excludes option.'));
            }

            done();
          }
        }
      }
    },
    
    sass: {
      dist: {
        options: {
            outputStyle: 'compressed',
            sourceMap: true,
        },
        files: {
            'main.css': 'main.scss'
        }
      },
      dev: {
        options: {
          style: 'expanded',
          sourceMap: true
        },
        files: {
          'css/main.css' : 'css/main.scss'
        }
      }
    },

    watch: {
      compile: {
        files: ['styles/*.scss', 'css/partials/*.scss'],
        tasks: ['sass:dev']
      },
      livereload: {
        options: { livereload: true },
        files: ['css/main.css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['requirejs', 'sass:dev', 'watch']);




};