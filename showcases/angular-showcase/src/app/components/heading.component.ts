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
				[className]="dynamicClassName()"
				aria-label="Dynamic accessible name"
				class="dynamic-forwarded-class"
				data-forwarded="before-switch"
				style="text-transform: uppercase">
				Dynamic heading
			</db-heading>
			<button type="button" (click)="switchHeading()">
				Switch heading level
			</button>
		</div>
	`,
	imports: [DBHeading, HeadingShowcase],
	standalone: true
})
export class HeadingComponent {
	protected readonly dynamicLevel = signal<'h1' | 'h6'>('h1');
	protected readonly dynamicClassName = signal('dynamic-heading-before');

	protected switchHeading(): void {
		this.dynamicLevel.set('h6');
		this.dynamicClassName.set('dynamic-heading-after');
	}
}
