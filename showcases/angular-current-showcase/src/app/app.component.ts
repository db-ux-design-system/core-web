import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'angular-current-showcase';

	tabs = [
		{
			name: 'tab-bar-2',
			label: '2-Tab1',
			active: true,
			children: 'Content 2-1'
		},
		{ name: 'tab-bar-2', label: '2-Tab2', content: 'Content 2-2' }
	];

	onClick() {
		// eslint-disable-next-line no-console
		console.log('click button');
	}
}
