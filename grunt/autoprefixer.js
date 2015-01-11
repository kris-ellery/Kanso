/**
 * Add browser vendor prefixes
 * https://github.com/nDmitry/grunt-autoprefixer
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
