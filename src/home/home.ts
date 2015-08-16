/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/angular2/ng2.d.ts" />
/// <reference path="../../typings/webpack/webpack.d.ts" />

import { Component, View } from 'angular2/angular2';
import { coreDirectives } from 'angular2/angular2';
import { Router} from 'angular2/router';

@Component({
	selector: 'home'
})
@View({
	templateUrl: './src/home/home.html',
	directives: [coreDirectives]
})

export class Home {
	message: string;
	
	constructor(public router: Router) {
		this.message = 'Hi';
	}
}