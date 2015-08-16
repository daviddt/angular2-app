/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />

import { bootstrap, bind } from 'angular2/angular2';
import { routerInjectables, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { App } from './app/app';

bootstrap(App, [routerInjectables, bind(LocationStrategy).toClass(HashLocationStrategy)]);