import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableShowcase } from '@components/components/table/showcase/table.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-table',
	template: '<table-showcase></table-showcase>',
	imports: environment.webComponents ? [] : [TableShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class TableComponent {}
