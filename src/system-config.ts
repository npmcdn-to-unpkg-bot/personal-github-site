(function(){
    "use strict";

    class AppSystemJSConfig implements SystemJSLoader.Config {
        /** @member {SystemJSLoader.ConfigMap} {map} Map tells the SystemJS loader where to look for things. */
        map: SystemJSLoader.ConfigMap;
        /** @member {SystemJSLoader.PackageList<SystemJSLoader.PackageConfig>} {packages} Packages tells the System loader how to load when no filename and/or no extension. */
        packages: SystemJSLoader.PackageList<SystemJSLoader.PackageConfig>;

        /**
         * Creates a new systemjs configuration for this app.
         * @class AppSystemJSConfig
         */
        constructor() {
            this.configureMap();
            this.configurePackages();
        }

        private configureMap = (): void => {
            this.map = {
                "app": ".",
                "@angular": "https://npmcdn.com/@angular",
                "rxjs": "https://npmcdn.com/rxjs",
                "symbol-observable": "https://npmcdn.com/symbol-observable",
                "primeng": "https://npmcdn.com/primeng"
            };
        }

        private configurePackages = (): void => {
            this.packages = {
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
        }
    }

    // Set system config
    SystemJS.config(new AppSystemJSConfig());
})();