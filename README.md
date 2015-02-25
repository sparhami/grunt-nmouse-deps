# grunt-nmouse-deps

> Records dependency information for HTML imports

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nmouse-deps --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nmouse-deps');
```

## The "nmouse_deps" task

### Overview
In your project's Gruntfile, add a section named `nmouse_deps` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  nmouse_deps: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Option defaults
This is the equivalent of not specifying an options object
```js
grunt.initConfig({
  nmouse_deps: {
    options: {
      basePath: '.',
      outputPath: './deps.html'
    },
    files: 'components/**/*.html'
  },
});
```

#### Serving files out of a subfolder

```js
grunt.initConfig({
  nmouse_deps: {
    options: {
      basePath: public',
      outputPath: 'public/deps.html'
    },
    files: 'public/components/**/*.html'
  },
});
```

