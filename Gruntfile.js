'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    var derequire = require('derequire');
    var envify = require('envify/custom');

    var envifyTransform = envify({NODE_UNIQUE_ID: 0});

    // String to be prepended to source files
    var banner = "/*! shortId.js\n https://github.com/dylang/shortid\n Copyright (c) Dylan Greene\n License: MIT +no-false-attribs License\n*/\n";

    grunt.initConfig({
        browserify: {
            dist: {
                src: ['lib/shortid.js'],
                dest: 'shortId.js'
            },
            options: {
                browserifyOptions: {
                    standalone: 'shortId',
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

        uglify: {
            shortId: {
                src: 'shortId.js',
                dest: 'shortId.min.js',
                options: {
                    sourceMap: true,
                    report: 'gzip'
                }
            }
        },

        concat: {
            shortId: {
                options: {
                    banner: banner
                },
                files: {
                    'shortId.js': ['shortId.js'],
                    'shortId.min.js': ['shortId.min.js']
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
                'tests/*'
            ]
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', [
        'browserify',
        'uglify',
        'concat'
    ]);

    grunt.registerTask('test', [
        'jshint',
        'mochaTest'
    ]);

    grunt.registerTask('default', [
        'build',
        'test'
    ]);

};
