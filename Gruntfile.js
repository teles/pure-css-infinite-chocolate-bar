module.exports = function(grunt) {
  'use strict';
 
  // configuração do projeto
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),
    
    // Sass task
    // Generates css file from sass
    sass: {
      dist: {
        files: [{
          'css/index.css':'sass/index.sass'
        }]
      }
    },

    // Clean tasks
    // These tasks clean css and font files
    // clean: {
    //   css: {
    //     src: 'css/*'
    //   },
    //   fonts: {
    //     src: 'fonts/*'
    //   }
    // },

    // watch: {
    //   sass: {
    //     files: 'scss/*.scss',
    //     tasks: ['clean:css','sass']
    //   },
    //   fonts: {
    //     files: ['glyphs/*.svg'],
    //     tasks: ['clean:fonts','webfont']
    //   }      
    // }    

  };
 
  grunt.initConfig(gruntConfig);
 
  // carregando plugins
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
 
  // tarefas
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('start', ['clean','sass']);
};