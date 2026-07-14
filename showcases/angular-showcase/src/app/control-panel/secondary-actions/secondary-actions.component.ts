import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	DBButton,
	DBControlPanelSecondaryActions,
	DBSwitch
} from '@components';

@Component({
	selector: 'app-secondary-actions',
	schemas: [],
	imports: [DBControlPanelSecondaryActions, DBButton, DBSwitch],
	templateUrl: './secondary-actions.component.html'
})
export class SecondaryActionsComponent {
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
