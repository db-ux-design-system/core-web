import { Component } from '@angular/core';
import { HeadingShowcase } from '@components/components/heading/showcase/heading.showcase';

@Component({
	selector: 'app-heading',
	template: '<heading-showcase></heading-showcase>',
	imports: [HeadingShowcase],
	standalone: true
})
export class HeadingComponent {}
