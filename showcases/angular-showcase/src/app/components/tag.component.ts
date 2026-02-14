import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TagShowcase } from '@components/components/tag/showcase/tag.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-tag',
	template: '<tag-showcase></tag-showcase>',
	imports: environment.webComponents ? [] : [TagShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class TagComponent {}
