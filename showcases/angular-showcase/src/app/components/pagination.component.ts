import { Component } from '@angular/core';
import { PaginationShowcase } from '@components/components/pagination/showcase/pagination.showcase';

@Component({
	selector: 'app-pagination',
	template: '<pagination-showcase></pagination-showcase>',
	imports: [PaginationShowcase],
	standalone: true
})
export class PaginationComponent {}
