/*
 * grunt-nmouse-deps
 * https://github.com/sepand/grunt-nmouse-deps
 *
 * Copyright (c) 2015 Sepand Parhami
 * Licensed under the MIT license.
 */

'use strict';

var nmouseDeps = require('nmouse-deps');

module.exports = function(grunt) {
    grunt.registerMultiTask('nmouse_deps', 'Records dependency information for HTML imports', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            basePath: '.',
            outputPath: 'deps.html'
        });

        var mapping = this.files
            .map(function(file) {
                return nmouseDeps.generateMapping(options.basePath, file.src);
            })
            .reduce(function(p, c) {
                return p.concat(c);
             });

        var output = nmouseDeps.generateOutput(mapping);

        grunt.file.write(options.outputPath, output);
    });
};
