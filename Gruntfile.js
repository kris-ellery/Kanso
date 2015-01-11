module.exports = function(grunt) {

  'use strict';

  grunt.config.init({

    /* Project details */
    pkg: grunt.file.readJSON('package.json'),

    /* Paths */
    path: {
      source  : 'source',
      temp    : '.tmp',
      build   : 'dist',
      styles  : 'kanso',
      vendors : 'vendors',
      views   : 'example'
    },

    /* Banner */
    banner:
      '/**\n' +
      ' * <%= pkg.title %> v<%= pkg.version %>\n' +
      ' * <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
      ' * \n' +
      ' * 2014 <%= pkg.author.name %> | <%= pkg.author.url %>\n' +
      ' */\n\n',

    /* Global tasks */
    watch        : require( './grunt/watch.js' ).task,
    connect      : require( './grunt/connect.js' ).task,
    clean        : require( './grunt/clean.js' ).task,
    copy         : require( './grunt/copy.js' ).task,

    /* CSS tasks */
    sass         : require( './grunt/sass.js' ).task,
    autoprefixer : require( './grunt/autoprefixer.js' ).task,
    csscomb      : require( './grunt/csscomb.js' ).task,
    csso         : require( './grunt/csso.js' ).task,

    /* Notifications */
    notify       : require( './grunt/notify.js' ).task

  }); // grunt.config.init()

  /* Dependencies */
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  /* Tasks */
  grunt.registerTask('default', [
    'build',
    'server'
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'styles',
    'vendors',
    'views',
    'notify:build'
  ]);

  grunt.registerTask('server', [
    'connect:static',
    'watch',
    'notify:server'
  ]);

  grunt.registerTask('vendors', [
    'copy:vendors',
    'notify:vendors'
  ]);

  grunt.registerTask('views', [
    'copy:views',
    'notify:views'
  ]);

  grunt.registerTask('styles', [
    'sass:styles',
    'autoprefixer:styles',
    'csscomb:styles',
    'csso:styles',
    'copy:styles',
    'clean:temp',
    'notify:styles'
  ]);

};
