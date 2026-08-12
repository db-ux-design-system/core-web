import { Component, signal } from '@angular/core';
import { DBHeading } from '@components/components/heading/heading';
import { HeadingShowcase } from '@components/components/heading/showcase/heading.showcase';

@Component({
	selector: 'app-heading',
	template: `
		<heading-showcase></heading-showcase>
		<div id="heading-dynamic-root-fixture" hidden>
			<db-heading
				[as]="dynamicLevel()"
				aria-label="Dynamic accessible name"
				class="dynamic-heading-class"
				data-forwarded="before-switch"
				style="text-transform: uppercase">
				Dynamic heading
			</db-heading>
			<button type="button" (click)="dynamicLevel.set('h6')">
				Switch heading level
			</button>
		</div>
	`,
	imports: [DBHeading, HeadingShowcase],
	standalone: true
})
export class HeadingComponent {
	protected readonly dynamicLevel = signal<'h1' | 'h6'>('h1');
}
