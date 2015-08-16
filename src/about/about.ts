/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/angular2/ng2.d.ts" />
/// <reference path="../../typings/webpack/webpack.d.ts" />

import { Component, View, coreDirectives } from 'angular2/angular2';
import { Router} from 'angular2/router';
import { SayName } from '../sayname/sayname';

@Component({
	selector: 'about'
})
@View({
	templateUrl: './src/about/about.html',
	directives: [coreDirectives, SayName]
})

export class About {
	message: string;
	constructor(public router: Router) {
	}
}