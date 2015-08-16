/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/angular2/ng2.d.ts" />
/// <reference path="../../typings/webpack/webpack.d.ts" />

import { Component, View } from 'angular2/angular2';
import { coreDirectives } from 'angular2/angular2';
import { Router} from 'angular2/router';

@Component({
	selector: 'about'
})
@View({
	templateUrl: './src/about/about.html',
	directives: [coreDirectives]
})

export class About {
	constructor(public router: Router) {
	}
}