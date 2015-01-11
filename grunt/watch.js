/**
 * Watch files and/or directories
 * https://github.com/gruntjs/grunt-contrib-watch
 * --------------------------------------------------
 */

exports.task = {
  options: {
    livereload: true
  },
  styles: {
    files: [ '<%= path.source %>/<%= path.styles %>/**/*.scss' ],
    tasks: [ 'styles' ]
  },
  vendors: {
    files: [ '<%= path.source %>/<%= path.vendors %>/**/*' ],
    tasks: [ 'vendors' ]
  },
  views: {
    files: [ '<%= path.source %>/<%= path.views %>/**/*.html' ],
    tasks: [ 'views' ]
  }
};
