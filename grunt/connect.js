/**
 * Local server
 * https://github.com/gruntjs/grunt-contrib-connect
 * --------------------------------------------------
 */

exports.task = {
  static: {
    options: {
      port: 8000,
      livereload: true,
      hostname: 'localhost',
      base: '<%= path.build %>',
      open: {
        target: 'http://localhost:8000/example.html'
      }
    }
  }
};
