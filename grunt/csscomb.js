/**
 * Reorder CSS properties
 * https://github.com/csscomb/grunt-csscomb
 * --------------------------------------------------
 */

exports.task = {
  styles: {
    expand: true,
    cwd: '<%= path.temp %>',
    src: '<%= path.styles %>/**/*.css',
    dest: '<%= path.temp %>'
  }
};
