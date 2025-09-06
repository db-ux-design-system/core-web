import { Component } from '@angular/core';

@Component({
	selector: 'app-datalist-examples',
	template: `
		<!-- Simple String List -->
		<db-input
			label="Search Cities"
			placeholder="Type to search..."
			[dataList]="cities"
			variant="floating">
		</db-input>

		<!-- Value-Label Pairs -->
		<db-input
			label="Search Countries" 
			placeholder="Type to search..."
			[dataList]="countries"
			variant="floating">
		</db-input>

		<!-- Regular Variant with Datalist -->
		<db-input
			label="Search Products"
			placeholder="Type to search..."
			[dataList]="products">
		</db-input>

		<!-- With Search Icon -->
		<db-input
			label="Search Stations"
			placeholder="Type to search..."
			[dataList]="stations"
			variant="floating"
			type="search"
			icon="magnifying_glass"
			[showIcon]="true">
		</db-input>
	`,
	standalone: true
})
export class DatalistExamplesComponent {
	// Sample data for demonstrations
	cities = ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen'];

	countries = [
		{ value: 'de', label: 'Germany' },
		{ value: 'fr', label: 'France' },
		{ value: 'it', label: 'Italy' },
		{ value: 'es', label: 'Spain' },
		{ value: 'at', label: 'Austria' },
		{ value: 'ch', label: 'Switzerland' }
	];

	products = ['Train Ticket', 'Bus Pass', 'Subway Card', 'City Tour', 'Hotel Booking'];

	stations = ['Berlin Hauptbahnhof', 'München Hauptbahnhof', 'Hamburg Hauptbahnhof', 'Köln Hauptbahnhof', 'Frankfurt (Main) Hauptbahnhof'];
}