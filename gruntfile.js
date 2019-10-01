module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/css/style.css' : 'sass/style.scss'
                }
            }
        },
        cssmin: {
            minifiy: {
                src: 'sass/style.scss',
                dest: 'dist/css/minified/style.min.css'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'dist/css/minified/style.min.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/style.scss',
                tasks: ['sass', 'cssmin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync','watch']);
}