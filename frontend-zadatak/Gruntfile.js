module.exports = function (grunt) {

    grunt.initConfig({

        settings: {
            srcPath: 'src/',
            distPath: 'public/'
        },

        sass: {
            app: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.srcPath %>scss',
                    src: ['**/*.scss'],
                    dest: '<%= settings.distPath %>css',
                    ext: '.css'
                }],
                options: {
                    outputStyle: 'expanded',
                    sourceMap: false,
                    precision: 5,
                    includePaths: [
                        'node_modules'
                    ]
                }
            }
        },

        sync: {
            iconFont: {
                files: [{
                    cwd: '<%= settings.srcPath %>font/icons/fonts',
                    src: ['**/*'],
                    dest: '<%= settings.distPath %>fonts'
                }],
                updateAndDelete: true
            }
        },

        includereplace: {
            dist: {
                options: {
                    prefix: '{{ ',
                    suffix: ' }}'
                },
                files: [{
                    src: '<%= settings.srcPath %>html/index.html',
                    dest: '<%= settings.distPath %>index.html'
                }, {
                    src: '<%= settings.srcPath %>html/login-modal.html',
                    dest: '<%= settings.distPath %>login-modal.html'
                }
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporterOutput: '',
            },
            files: {
                src: ['<%= settings.srcPath %>js/**/*.js']
            }
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },
            scripts: {
                files: {
                    src: ['<%= settings.srcPath %>js/**/*.js']
                }
            }
        },

        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= settings.srcPath %>images',
                        src: ['**/*.png'],
                        dest: '<%= settings.distPath %>images/imagemin',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= settings.srcPath %>images',
                        src: ['**/*.jpg'],
                        dest: '<%= settings.distPath %>images/imagemin',
                        ext: '.jpg'
                    }
                ]
            }
        },

        watch: {
            javascript: {
                expand: true,
                files: ['<%= settings.srcPath %>js/**/*.js'],
                tasks: ['jshint', 'jscs'],
                options: {
                    spawn: false
                }
            },
            scss: {
                expand: true,
                files: ['<%= settings.srcPath %>scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            html: {
                expand: true,
                files: ['<%= settings.srcPath %>html/**/*.html'],
                tasks: ['includereplace'],
                options: {
                    spawn: false
                }
            },
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch', 'imagemin']);
    grunt.registerTask('build', ['jscs', 'jshint', 'sass', 'includereplace', 'sync', 'imagemin']);

};