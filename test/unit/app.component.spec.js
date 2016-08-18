"use strict";
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("../../src/app/app.component");
describe("Component: AppComponent", function () {
    beforeEach(function () {
        testing_1.addProviders([app_component_1.AppComponent]);
    });
    it("should create the app", testing_1.inject([app_component_1.AppComponent], function (app) {
        expect(app).toBeTruthy();
    }));
    it("should have as intro text 'Welcome to my GitHub site.' after OnInit", testing_1.inject([app_component_1.AppComponent], function (app) {
        app.ngOnInit();
        expect(app.introText).toEqual("Welcome to my GitHub site.");
    }));
    it("should have one message", testing_1.inject([app_component_1.AppComponent], function (app) {
        app.ngOnInit();
        expect(app.messages.length).toEqual(1);
    }));
});
//# sourceMappingURL=app.component.spec.js.map