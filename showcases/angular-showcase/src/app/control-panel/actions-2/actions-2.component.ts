import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DBButton, DBControlPanelActions2, DBSwitch } from '@components';

@Component({
	selector: 'app-actions-2',
	schemas: [],
	imports: [DBControlPanelActions2, DBButton, DBSwitch],
	templateUrl: './actions-2.component.html'
})
export class Actions2Component {
	shell = true;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters['shell'] !== undefined) {
				this.shell = parameters['shell'] === 'true';
			}
		});
	}

	onShellToggle(): void {
		this.shell = !this.shell;
		void this.router.navigate([], {
			relativeTo: this.route,
			queryParams: { shell: String(this.shell) },
			queryParamsHandling: 'merge'
		});
	}
}
