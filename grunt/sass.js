/**
 * Compile Sass
 * https://github.com/gruntjs/grunt-contrib-sass
 * --------------------------------------------------
 */

exports.task = {
  options: {
    sourcemap: 'none',
    style: 'expanded',
    banner: '<%= banner %>'
  },
  styles: {
    src: '<%= path.source %>/<%= path.styles %>/kanso.scss',
    dest: '<%= path.temp %>/<%= path.styles %>/kanso.css'
  }
};
