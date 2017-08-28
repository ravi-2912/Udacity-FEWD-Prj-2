
module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            task_1: {
                options: {
                    /*engine: 'im',*/
                    sizes: [{
                        name: "1x",
                        width: 350,            
                        quality: 100
                    }, {
                        name: "2x",
                        width: 750,
                        quality: 80
                    }]
                },

                files: [{
                    expand: true,
                    src: ['article*.{gif,jpg,png}'],
                    cwd: '../img_src',
                    dest: '../img'
                }]
            },

            task_2: {
                options: {
                    /*engine: 'im',*/
                    sizes: [{
                        name: "1x",
                        width: 1110,            
                        quality: 80
                    }, {
                        name: "2x",
                        width: 2200,
                        quality: 80
                    }]
                },

                files: [{
                    expand: true,
                    src: ['jumbotron-1.{gif,jpg,png,webp}'],
                    cwd: '../img_src',
                    dest: '../img'
                }]
            },

            task_3: {
                options: {
                    /*engine: 'im',*/
                    sizes: [{
                        name: "1x",
                        width: 930,            
                        quality: 80
                    }, {
                        name: "2x",
                        width: 1860,
                        quality: 80
                    }]
                },

                files: [{
                    expand: true,
                    src: ['jumbotron-2.{gif,jpg,png,webp}'],
                    cwd: '../img_src',
                    dest: '../img'
                }]
            },

            task_4: {
                options: {
                    /*engine: 'im',*/
                    sizes: [{
                        name: "1x",
                        width: 690,            
                        quality: 80
                    }, {
                        name: "2x",
                        width: 1380,
                        quality: 80
                    }]
                },

                files: [{
                    expand: true,
                    src: ['jumbotron-3.{gif,jpg,png,webp}'],
                    cwd: '../img_src',
                    dest: '../img'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['../img']
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['../img']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: '../img_src',
                    src: 'fixed/*.{gif,jpg,png,svg}',
                    dest: '../img'
                }]
            },
        }
    });
  
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};