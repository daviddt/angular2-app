/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_1 = require('./app/app');
angular2_1.bootstrap(app_1.App, [router_1.routerInjectables, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
