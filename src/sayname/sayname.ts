/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/angular2/ng2.d.ts" />
/// <reference path="../../typings/webpack/webpack.d.ts" />

import { Component, View, formDirectives } from 'angular2/angular2';

@Component({
	selector: 'say-name'
})
@View({
	templateUrl: './src/sayname/sayname.html',
	directives: [formDirectives]
})

export class SayName {
	name: string;
	constructor() {
		this.name = "John doe";
	}
	hello() {
		alert(this.name);
	}
}