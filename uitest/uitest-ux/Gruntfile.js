/* jshint node: true *//* eslint-env node */

"use strict";

const loadTasksRelative = require('grunt-niagara/lib/loadTasksRelative');

const SRC_FILES = [
  'src/rc/**/*.js',
  'Gruntfile.js',
  '!**/*.built.js',
  '!**/*.built.min.js'
];
const TEST_FILES = [
  'srcTest/rc/**/*.js'
];
const JS_FILES = SRC_FILES.concat(TEST_FILES);
const ALL_FILES = JS_FILES.concat('src/rc/**/*.css');

module.exports = function runGrunt(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsdoc: {
      src: SRC_FILES.concat([ 'README.md' ])
    },
    eslint: {
      src: JS_FILES
    },
    babel: {
      options: {
        presets: [ '@babel/preset-env' ]
      }
    },
    watch: {
      src: ALL_FILES
    },
    karma: {},
    requirejs: {},
    niagara: {
      station: {
        stationName: 'uitest',
        forceCopy: true,
        sourceStationFolder: './srcTest/rc/stations/uitestUnitTest'
      }
    }
  });

  loadTasksRelative(grunt, 'grunt-niagara');
};
