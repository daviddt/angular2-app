/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/router.d.ts" />
/// <reference path="../../typings/webpack/webpack.d.ts" />

import { View, Component } from 'angular2/angular2';
import { Location, RouteConfig, RouterLink, Router, RouterOutlet } from 'angular2/router';
import { Home } from '../home/home';
import { About } from '../about/about';

@Component({
	selector: 'my-app'
})
@View({
	templateUrl: './src/app/app.html',
	directives: [RouterLink, RouterOutlet, Home, About]
})
@RouteConfig([
	{ path: '/', 	 	redirectTo: '/home' },
	{ path: '/home', 	as: 'home', 	component: Home },
	{ path: '/about', 	as: 'about', 	component: About }
])

export class App {
	constructor(public router: Router, public location: Location) {
		this.router = router;
		this.location = location;
	}
	getLinkStyle(path) {
        return this.location.path() === path;
    }

}
