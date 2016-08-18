"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var primeng_1 = require("primeng/primeng");
var AppComponent = (function () {
    function AppComponent() {
        this.messages = [];
        this.introText = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.introText = "Welcome to my GitHub site.";
        var initMessage = { severity: "info", summary: "Info Message", detail: "Detailed info message." };
        this.messages.push(initMessage);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "dt-app",
            templateUrl: "src/app/app.component.html",
            styleUrls: ["src/app/app.component.min.css"],
            directives: [primeng_1.Messages]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map