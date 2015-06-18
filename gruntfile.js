module.exports = function(grunt) {
  
  grunt.initConfig({

  // Configure grunt tasks

    jshint: {},
    mochaTest: {}.
    watch: {},
    shell: {}
  });
  
  // Add tasks; Remember to save new dev-dependencies with --save-dev

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('load-grunt-tasks');

  // Main grunt tasks

  grunt.registerTask('default', []);
  grunt.registerTask('push', []);
}