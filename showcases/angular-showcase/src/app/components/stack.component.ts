import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StackShowcase } from '@components/components/stack/showcase/stack.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-stack',
	template: '<stack-showcase></stack-showcase>',
	imports: environment.webComponents ? [] : [StackShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class StackComponent {}
