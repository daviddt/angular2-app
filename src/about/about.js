/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/angular2/ng2.d.ts" />
/// <reference path="../../typings/webpack/webpack.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var sayname_1 = require('../sayname/sayname');
var About = (function () {
    function About(router) {
        this.router = router;
    }
    About = __decorate([
        angular2_1.Component({
            selector: 'about'
        }),
        angular2_1.View({
            templateUrl: './src/about/about.html',
            directives: [angular2_1.coreDirectives, sayname_1.SayName]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], About);
    return About;
})();
exports.About = About;
