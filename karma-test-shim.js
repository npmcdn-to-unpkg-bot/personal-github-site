"use strict";

// Test shim for Karma, needed to load files via SystemJS

Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {};

// Completely reconfigure systemjs here as the system-config.js file uses bundles from cdn. Bundled files don't work with Karma.

System.config({
  map: {
    "app": "base/src",
    "test": "base/test",
    "@angular": "base/node_modules/@angular",
    "rxjs": "base/node_modules/rxjs",
    "symbol-observable": "base/node_modules/symbol-observable",
    "primeng": "base/node_modules/primeng"  
  },
  packages: {
    "app": {
      main: "main",
      defaultExtension: "js"
    },
    "test": {
        main: "test",
        defaultExtension: "js"
    },
    "@angular/core": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/compiler": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/common": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/forms": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/http": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/platform-browser-dynamic": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/platform-browser": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/router": {
      main: "index",
      defaultExtension: "js"
    },
    "@angular/testing": {
      main: "index",
      defaultExtension: "js"
    },
    "rxjs": {
      main: "index",
      defaultExtension: "js"
    },
    "symbol-observable": {
      main: "index",
      defaultExtension: "js"
    },
    "primeng": {
      main: "primeng",
      defaultExtension: "js"
    },
    "base/src": {
      defaultExtension: 'js',
      format: 'cjs',
      map: Object.keys(window.__karma__.files).filter(onlyAppFiles).reduce(createPathRecords, {})
    },
    "base/test": {
      defaultExtension: 'js',
      format: 'cjs',
      map: Object.keys(window.__karma__.files).filter(onlyTestFiles).reduce(createPathRecords, {})
    }
  }
});

System.import('@angular/platform-browser/src/browser/browser_adapter')
    .then(function(browser_adapter) { browser_adapter.BrowserDomAdapter.makeCurrent(); })
    .then(function() {
      return Promise.all([
        System.import('@angular/core/testing'),
        System.import('@angular/platform-browser-dynamic/testing')
      ]);
    })
    .then(function(modules) {
      var testing = modules[0];
      var testingBrowser = modules[1];
      testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
    })
    .then(function() { return Promise.all(resolveTestFiles()); })
    .then(function() { __karma__.start(); }, function(error) { __karma__.error(error.stack || error); });

function createPathRecords(pathsMapping, appPath) {
    // creates local module name mapping to global path with karma's fingerprint in path, e.g.:
    // './vg-player/vg-player':
    // '/base/dist/vg-player/vg-player.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'
    //console.log('appPath = '+appPath);
    var pathParts = appPath.split('/');
    var moduleName = './' + pathParts.slice(Math.max(pathParts.length - 2, 1)).join('/');
    moduleName = moduleName.replace(/\.js$/, '');
    pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
    return pathsMapping;
}

function onlyAppFiles(filePath) {
  return /\/base\/dist\/(?!.*\.spec\.js$).*\.js$/.test(filePath);
}

function onlyTestFiles(filePath) {
  return /\/base\/test\/(?!.*\.spec\.js$).*\.js$/.test(filePath);
}

function onlySpecFiles(path) {
  return /\.spec\.js$/.test(path);
}

function resolveTestFiles() {
    return Object.keys(window.__karma__.files)  // All files served by Karma.
        .filter(onlySpecFiles)
        .map(function(moduleName) {
            // loads all spec files via their global module names (e.g.
            // 'base/dist/vg-player/vg-player.spec')
            return System.import(moduleName);
        });
}