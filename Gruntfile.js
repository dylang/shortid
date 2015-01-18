'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    var derequire = require('derequire');
    var envify = require('envify/custom');

    var envifyTransform = envify({NODE_UNIQUE_ID: 0})

    grunt.initConfig({
        browserify: {
            dist: {
                src: ['lib/shortid.js'],
                dest: 'shortid.js'
            },
            options: {
                browserifyOptions: {
                    standalone: 'generate',
                    transform: [envifyTransform]
                },
                external: ['crypto'], // Mark 'crypto' as external so browserify doesn't load its (huge) shim
                postBundleCB: function(err, src, next) {
                    // Run derequire
                    var modifiedSrc = false;

                    if(!err) {
                        modifiedSrc = derequire(src);
                        if(!modifiedSrc) {
                            err = true;
                        }
                    }

                    next(err, modifiedSrc);
                }
            }
        },

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
