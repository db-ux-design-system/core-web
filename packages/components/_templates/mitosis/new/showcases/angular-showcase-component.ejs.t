---
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/components/${name}.component.ts` : null %>"
---
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { <%= h.changeCase.pascal(name) %>Showcase } from '@components/components/<%= name %>/showcase/<%= name %>.showcase';

@Component({
	selector: 'app-<%= name %>',
	template: '<<%= name %>-showcase></<%= name %>-showcase>',
	imports: environment.webComponents ? [] : [<%= h.changeCase.pascal(name) %>Showcase],
	standalone: true
})
export class <%= h.changeCase.pascal(name) %>Component {}
