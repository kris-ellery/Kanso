/**
 * Clean file and/or directories
 * https://github.com/gruntjs/grunt-contrib-clean
 * --------------------------------------------------
 */

exports.task = {
  build: [ '<%= path.build %>' ],
  sassdoc: [ '<%= path.docs.sass %>' ],
  dox: [ '<%= path.docs.js %>' ],
  temp: [ '<%= path.temp %>' ]
};
