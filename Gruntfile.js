module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        nodemon: {
          dev: {
            script: 'server.js'
          }
        },
	forever: {
	    server: {
		options: {
		    index: 'server.js',
		    logDir: 'logs',
		    errFile: 'err',
		    outFile: 'out',
		    logFile: 'log'
		}
	    }
	}
      });
};
