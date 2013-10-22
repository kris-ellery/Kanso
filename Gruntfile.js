
module.exports = function( grunt ) {

  'use strict';
  
  var fs = require('fs'), pkginfo = grunt.file.readJSON('package.json');
  
  grunt.initConfig({
  
    // Get package meta
    pkg: pkginfo,
    
    // Create package meta banner
    meta: {
      banner: '/*! <%= pkg.title %> <%= pkg.version %> | <%= pkg.author.url %> |(c) 2013 <%= pkg.author.name %> | <%= pkg.license %> */'
    },
    
    // Compile SASS
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: { 'production/css/kanso.css' : 'development/sass/kanso.scss' }
      }
    },
    
    /* Compile LESS
    less: {
      dist: {
        files: { 'production/css/kanso.css' : 'development/less/kanso.less' }
      }
    },
    */
    
    // Append vendor prefixes
    autoprefixer: {
      dist: {
        files: { 'production/css/kanso.css' : 'production/css/kanso.css' }
      }
    },
    
    // Comb CSS
    csscomb: {
      dist: {
        files: { 'production/css/kanso.css' : 'production/css/kanso.css' }
      }
    },
    
    // Minify CSS
    csso: {
      dist: {
        options: {
          report: 'min'
        },
        files: { 'production/css/kanso.min.css' : 'production/css/kanso.css' },
      }
    },
    
    // Append package meta banner
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= meta.banner %>\n'
        },
        src: [ 'production/css/*.css' ]
      }
    },
    
    // Watch for changes
    watch: {
      css: {
        files: [ 'development/sass/**/*.scss', 'development/less/**/*.less'],
        tasks: [ 'build' ]
      }
    }
    
  });
  
  // Load Grunt Tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  /* grunt.loadNpmTasks('grunt-contrib-less'); */
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Register Grunt Tasks
  grunt.registerTask('build', [ 'sass', /* 'less', */ 'autoprefixer', 'csscomb', 'csso', 'usebanner' ]);
  
};
