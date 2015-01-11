/**
 * Task status notification
 * https://github.com/dylang/grunt-notify
 * --------------------------------------------------
 */

exports.task = {
  build: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Build completed!'
    }
  },
  server: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Server was started!'
    }
  },
  styles: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Styles task completed!'
    }
  },
  vendors: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Vendors task completed!'
    }
  },
  views: {
    options: {
      title: '<%= pkg.title %>',
      message: 'Views task completed!'
    }
  }
};
