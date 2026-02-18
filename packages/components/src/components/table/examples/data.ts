import { DBTableRowDefaultProps } from '../../table-row/model';
import { DBTableData } from '../model';

const defaultHeader: DBTableRowDefaultProps[] = [
	{ cells: [{ content: 'A' }, { content: 'B' }, { content: 'C' }] }
];
const defaultBody: DBTableRowDefaultProps[] = [
	{
		cells: [
			{ content: '1', headerCell: true },
			{ content: '2' },
			{ content: '3' }
		]
	},
	{
		cells: [
			{ content: '4', headerCell: true },
			{ content: '5' },
			{ content: '6' }
		]
	},
	{
		cells: [
			{ content: '7', headerCell: true },
			{ content: '8' },
			{ content: '9' }
		]
	}
];
const defaultFooter: DBTableRowDefaultProps[] = [
	{
		cells: [
			{ content: 'Footer 1', headerCell: true },
			{ content: 'Footer 2', colSpan: 2 }
		]
	}
];
export const defaultTable: DBTableData = {
	header: defaultHeader,
	body: defaultBody,
	footer: defaultFooter
};

export const horizontalAlignmentStartTable: DBTableData = {
	header: [
		{
			cells: [
				{ content: 'A', horizontalAlignment: 'start' },
				{ content: 'B', horizontalAlignment: 'start', colSpan: 2 }
			]
		}
	],
	body: [
		{
			cells: [
				{
					content: '1',
					headerCell: true,
					horizontalAlignment: 'start'
				},
				{ content: '2', horizontalAlignment: 'start' },
				{ content: '3', horizontalAlignment: 'start' }
			]
		}
	]
};

export const horizontalAlignmentCenterTable: DBTableData = {
	header: [
		{
			cells: [
				{ content: 'A', horizontalAlignment: 'center' },
				{ content: 'B', horizontalAlignment: 'center', colSpan: 2 }
			]
		}
	],
	body: [
		{
			cells: [
				{
					content: '1',
					headerCell: true,
					horizontalAlignment: 'center'
				},
				{ content: '2', horizontalAlignment: 'center' },
				{ content: '3', horizontalAlignment: 'center' }
			]
		}
	]
};

export const horizontalAlignmentEndTable: DBTableData = {
	header: [
		{
			cells: [
				{ content: 'A', horizontalAlignment: 'end' },
				{ content: 'B', horizontalAlignment: 'end', colSpan: 2 }
			]
		}
	],
	body: [
		{
			cells: [
				{ content: '1', headerCell: true, horizontalAlignment: 'end' },
				{ content: '2', horizontalAlignment: 'end' },
				{ content: '3', horizontalAlignment: 'end' }
			]
		}
	]
};

export const subHeaderEmphasisNoneTable: DBTableData = {
	header: [
		...defaultHeader,
		{
			cells: [
				{ content: 'Sub A' },
				{ content: 'Sub B' },
				{ content: 'Sub C' }
			]
		}
	],
	body: defaultBody,
	footer: defaultFooter
};

export const subHeaderEmphasisWeakTable: DBTableData = {
	header: [
		...defaultHeader,
		{
			subHeaderEmphasis: 'weak',
			cells: [
				{ content: 'Sub A' },
				{ content: 'Sub B' },
				{ content: 'Sub C' }
			]
		}
	],
	body: defaultBody,
	footer: defaultFooter
};

export const subHeaderEmphasisStrongTable: DBTableData = {
	header: [
		...defaultHeader,
		{
			subHeaderEmphasis: 'strong',
			cells: [
				{ content: 'Sub A' },
				{ content: 'Sub B' },
				{ content: 'Sub C' }
			]
		}
	],
	body: defaultBody,
	footer: defaultFooter
};

export const overflowTable: DBTableData = {
	header: [
		{
			cells: [
				{ content: 'A' },
				{ content: 'B' },
				{ content: 'C' },
				{ content: 'D' },
				{ content: 'E' },
				{ content: 'F' },
				{ link: { text: 'G', href: '#' } }
			]
		}
	],
	body: Array.from({ length: 20 }, (_, i) => ({
		cells: [
			{ content: `Row ${i + 1}`, headerCell: true },
			{ content: `Data ${i + 1}-B` },
			{ content: `Data ${i + 1}-C` },
			{ content: `Data ${i + 1}-D` },
			{ content: `Data ${i + 1}-E` },
			{ content: `Data ${i + 1}-F` },
			{ link: { text: `Data ${i + 1}-G`, href: '#' } }
		]
	})),
	footer: [
		{
			cells: [
				{ content: 'Footer 1', headerCell: true },
				{ link: { text: 'Footer 2', href: '#' }, colSpan: 6 }
			]
		}
	]
};
