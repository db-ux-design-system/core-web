import { Component } from '@angular/core';
import { TableShowcase } from '@components/components/table/showcase/table.showcase';

@Component({
	selector: 'app-table',
	template: '<table-showcase></table-showcase>',
	imports: [TableShowcase],
	standalone: true
})
export class TableComponent {}
