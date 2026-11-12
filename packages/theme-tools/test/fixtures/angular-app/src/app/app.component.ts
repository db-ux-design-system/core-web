import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/*
 * Minimal usage surface for the theme-tools detector, as real Angular.
 *
 * No component package is installed — the `db-*` tags are bare markup the
 * detector scans, and `CUSTOM_ELEMENTS_SCHEMA` lets Angular compile them as
 * unknown custom elements (the fixture only needs to exercise `ng build` + the
 * CLI scan, not a component runtime). The CLI's component-aware detection reads
 * these tags and unions in the colors/materials each component can emit:
 *
 *   - `db-notification` -> blue/green/red/yellow + filled-2
 *   - `db-badge`        -> grey/blue/green/red/yellow + filled-1/vibrant
 *   - `db-button`       -> brand + filled-1/origin/semi-transparent/transparent
 *
 * plus the literal `data-adaptive-color="violet"` / `data-material="filled-3"`.
 * `yellow` is dropped by the config's `exclude`, proving the escape hatch.
 */
@Component({
	selector: 'app-root',
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	template: `
		<db-notification semantic="critical">Something broke</db-notification>
		<db-badge semantic="successful">New</db-badge>
		<db-button>Press</db-button>
		<div data-adaptive-color="violet" data-material="filled-3">Surface</div>
	`
})
export class AppComponent {}
