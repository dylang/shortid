'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        mochaTest: {
            notify: {
                src: 'test/**/*.test.js',
                options: {
                    reporter: 'spec',
                    timeout: 50000
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'lib/**/*.js',
                'tests/**/*',
                'examples.js'
            ]
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', [
        'jshint',
        'mochaTest'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);

};
