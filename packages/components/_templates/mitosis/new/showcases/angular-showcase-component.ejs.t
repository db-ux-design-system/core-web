---
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/components/${name}/${name}.component.ts` : null %>"
---
import { Component } from '@angular/core';

import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/<%= name %>.json';

@Component({
	selector: 'app-<%= name %>',
	templateUrl: './<%= name %>.component.html',
	imports: [DefaultComponent],
	standalone: true
})
export class <%= h.changeCase.pascal(name) %>Component {
	variants = defaultComponentVariants;
}


