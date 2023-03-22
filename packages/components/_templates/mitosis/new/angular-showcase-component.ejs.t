---
to: ../../showcases/angular-showcase/src/app/components/<%= name %>/<%= name %>.component.ts
---
import { Component } from '@angular/core';

import defaultComponentVariants from '../../../../../shared/<%= name %>';

@Component({
	selector: 'app-<%= name %>',
	templateUrl: './<%= name %>.component.html'
})
export class <%= h.changeCase.pascal(name) %>Component {
	variants = defaultComponentVariants;
}


