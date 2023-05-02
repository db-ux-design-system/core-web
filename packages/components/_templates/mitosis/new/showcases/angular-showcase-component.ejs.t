---
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/components/${name}/${name}.component.ts` : null %>"
---
import { Component } from '@angular/core';

import defaultComponentVariants from '../../../../../shared/<%= name %>.json';

@Component({
	selector: 'app-<%= name %>',
	templateUrl: './<%= name %>.component.html'
})
export class <%= h.changeCase.pascal(name) %>Component {
	variants = defaultComponentVariants;
}


