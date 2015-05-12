module.exports = function(grunt) {
  'use strict';
 
  // configuração do projeto
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),
    
    // Sass task
    // Generates css file from sass
    sass: {
      options: {
        loadPath: 'bower_components/compass-mixins/lib/'        
      },
      dist: {
        files: [{
          'css/index.css':'sass/index.sass'
        }]
      }
    },
    autoprefixer: {
      index: {
        src: 'css/index.css',
        dest: 'css/index.css'
      }
    }     
  };
 
  grunt.initConfig(gruntConfig);
 
  // carregando plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
 
  // tarefas
  grunt.registerTask('default', ['sass', 'autoprefixer']);
};