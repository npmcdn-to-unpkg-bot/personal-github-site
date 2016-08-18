(function () {
    "use strict";
    var AppSystemJSConfig = (function () {
        /**
         * Creates a new systemjs configuration for this app.
         * @class AppSystemJSConfig
         */
        function AppSystemJSConfig() {
            var _this = this;
            this.configureMap = function () {
                _this.map = {
                    "app": ".",
                    "@angular": "https://npmcdn.com/@angular",
                    "rxjs": "https://npmcdn.com/rxjs",
                    "symbol-observable": "https://npmcdn.com/symbol-observable",
                    "primeng": "https://npmcdn.com/primeng"
                };
            };
            this.configurePackages = function () {
                _this.packages = {
                    "app": {
                        main: "main",
                        defaultExtension: "js"
                    },
                    "@angular/core": {
                        main: "bundles/core.umd.js",
                        defaultExtension: "js"
                    },
                    "@angular/compiler": {
                        main: "bundles/compiler.umd.js",
                        defaultExtension: "js"
                    },
                    "@angular/common": {
                        main: "bundles/common.umd.js",
                        defaultExtension: "js"
                    },
                    "@angular/forms": {
                        main: "bundles/forms.umd.js",
                        defaultExtension: "js"
                    },
                    "@angular/http": {
                        main: "bundles/http.umd.js",
                        defaultExtension: "js"
                    },
                    "@angular/platform-browser-dynamic": {
                        main: "bundles/platform-browser-dynamic.umd.js",
                        defaultExtension: "js"
                    },
                    "@angular/platform-browser": {
                        main: "bundles/platform-browser.umd.js",
                        defaultExtension: "js"
                    },
                    "@angular/router": {
                        main: "bundles/router.umd.js",
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
                    }
                };
            };
            this.configureMap();
            this.configurePackages();
        }
        return AppSystemJSConfig;
    }());
    // Set system config
    SystemJS.config(new AppSystemJSConfig());
})();
//# sourceMappingURL=system-config.js.map