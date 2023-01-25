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

	formData = {
		username: 'Test',
		password: '1234'
	};

	onClick() {
		// eslint-disable-next-line no-console
		console.log('click event');
	}

	onSubmitForm(event: any): void {
		event.preventDefault();
		// eslint-disable-next-line no-console
		console.log('on submit Form', this.formData);
	}
}
