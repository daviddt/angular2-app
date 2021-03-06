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
var SayName = (function () {
    function SayName() {
        this.name = "John doe";
    }
    SayName.prototype.hello = function () {
        alert(this.name);
    };
    SayName = __decorate([
        angular2_1.Component({
            selector: 'say-name'
        }),
        angular2_1.View({
            templateUrl: './src/sayname/sayname.html',
            directives: [angular2_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], SayName);
    return SayName;
})();
exports.SayName = SayName;
