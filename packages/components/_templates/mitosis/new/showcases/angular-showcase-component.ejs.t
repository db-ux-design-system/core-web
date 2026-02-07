---
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/components/${name}/${name}.component.ts` : null %>"
---
import { Component } from '@angular/core';

import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/<%= name %>.json';
import { DB<%= h.changeCase.pascal(name) %> } from '@db-ux/ngx-core-components/src/components/<%= name %>';

@Component({
	selector: 'app-<%= name %>',
	templateUrl: './<%= name %>.component.html',
	imports: [DefaultComponent, DB<%= h.changeCase.pascal(name) %>],
	standalone: true
})
export class <%= h.changeCase.pascal(name) %>Component {
	variants = defaultComponentVariants;
}


