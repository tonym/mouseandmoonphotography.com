module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      dist: {
        files: [
          {
            src: 'source/index.html',
            dest: 'dist/index.html'
          },
          {
            expand: true,
            cwd: 'source/css',
            src: '**/*',
            dest: 'dist/assets/css/'
          },
          {
            expand: true,
            cwd: 'node_modules/font-awesome/fonts',
            src: '**/*',
            dest: 'dist/assets/fonts/'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist',
            src: '**/*',
            dest: 'dist/assets/lib/bootstrap'
          },
          {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: '**/*',
            dest: 'dist/assets/lib/jquery/'
          },
          {
            expand: true,
            cwd: 'node_modules/mustache',
            src: '**/*.js',
            dest: 'dist/assets/lib/mustache/'
          },
          {
            expand: true,
            cwd: 'source/img',
            src: '**/*',
            dest: 'dist/assets/img/'
          },
          {
            expand: true,
            cwd: 'source/api',
            src: '**/*',
            dest: 'dist/assets/api/'
          }
        ]
      }
    },

    less: {
      development: {
        options: {
          // Specifies directories to scan for @import directives when parsing.
          // Default value is the directory of the source, which is probably what you want.
          paths: ['source/less/'],
          compress: true
        },
        files: {
          // compilation.css  :  source.less
          'dist/assets/css/main.css': 'source/less/main.less'
        }
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    watch: {
      files: ['source/**/*'],
      tasks: ['copy', 'less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'less']);

};
