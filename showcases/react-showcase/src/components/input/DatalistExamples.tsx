import { DBInput } from '../../../../../output/react/src';

// Sample data for demonstrations
const cities = ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen'];

const countries = [
	{ value: 'de', label: 'Germany' },
	{ value: 'fr', label: 'France' },
	{ value: 'it', label: 'Italy' },
	{ value: 'es', label: 'Spain' },
	{ value: 'at', label: 'Austria' },
	{ value: 'ch', label: 'Switzerland' }
];

const products = ['Train Ticket', 'Bus Pass', 'Subway Card', 'City Tour', 'Hotel Booking'];

const stations = ['Berlin Hauptbahnhof', 'München Hauptbahnhof', 'Hamburg Hauptbahnhof', 'Köln Hauptbahnhof', 'Frankfurt (Main) Hauptbahnhof'];

const DatalistExamples = () => {
	return (
		<>
			{/* Simple String List */}
			<DBInput
				label="Search Cities"
				placeholder="Type to search..."
				dataList={cities}
				variant="floating"
			/>

			{/* Value-Label Pairs */}
			<DBInput
				label="Search Countries" 
				placeholder="Type to search..."
				dataList={countries}
				variant="floating"
			/>

			{/* Regular Variant with Datalist */}
			<DBInput
				label="Search Products"
				placeholder="Type to search..."
				dataList={products}
			/>

			{/* With Search Icon */}
			<DBInput
				label="Search Stations"
				placeholder="Type to search..."
				dataList={stations}
				variant="floating"
				type="search"
				icon="magnifying_glass"
				showIcon={true}
			/>
		</>
	);
};

export default DatalistExamples;