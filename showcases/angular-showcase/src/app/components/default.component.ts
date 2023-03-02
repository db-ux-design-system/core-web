import { Component, Input, TemplateRef } from '@angular/core';

import type { DefaultComponentProps } from '../../../../shared/default-component-data';

@Component({
	selector: 'app-default-component',
	templateUrl: './default.component.html'
})
export class DefaultComponent {
	@Input() title: DefaultComponentProps['title'] = '';
	@Input() variants: DefaultComponentProps['variants'] = [];
	@Input() exampleTemplate: TemplateRef<any>;
}
