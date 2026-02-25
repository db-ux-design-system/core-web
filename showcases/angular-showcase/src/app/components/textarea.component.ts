import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TextareaShowcase } from '@components/components/textarea/showcase/textarea.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-textarea',
	template: '<textarea-showcase></textarea-showcase>',
	imports: environment.webComponents ? [] : [TextareaShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class TextareaComponent {}
