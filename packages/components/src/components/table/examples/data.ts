import { DBTableRowDefaultProps } from '../../table-row/model';
import { DBTableData } from '../model';

const defaultHeader: DBTableRowDefaultProps[] = [
	{
		cells: [
			{ content: 'A', scope: 'col' },
			{ content: 'B', scope: 'col' },
			{ content: 'C', scope: 'col' }
		]
	}
];
const defaultBody: DBTableRowDefaultProps[] = [
	{
		cells: [
			{ content: '1', headerCell: true, scope: 'row' },
			{ content: '2' },
			{ content: '3' }
		]
	},
	{
		cells: [
			{ content: '4', headerCell: true, scope: 'row' },
			{ content: '5' },
			{ content: '6' }
		]
	},
	{
		cells: [
			{ content: '7', headerCell: true, scope: 'row' },
			{ content: '8' },
			{ content: '9' }
		]
	}
];
const defaultFooter: DBTableRowDefaultProps[] = [
	{
		cells: [
			{ content: 'Footer 1', headerCell: true, scope: 'row' },
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
				{ content: 'A', horizontalAlignment: 'start', scope: 'col' },
				{
					content: 'B',
					horizontalAlignment: 'start',
					colSpan: 2,
					scope: 'col'
				}
			]
		}
	],
	body: [
		{
			cells: [
				{
					content: '1',
					headerCell: true,
					horizontalAlignment: 'start',
					scope: 'row'
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
				{ content: 'A', horizontalAlignment: 'center', scope: 'col' },
				{
					content: 'B',
					horizontalAlignment: 'center',
					colSpan: 2,
					scope: 'col'
				}
			]
		}
	],
	body: [
		{
			cells: [
				{
					content: '1',
					headerCell: true,
					horizontalAlignment: 'center',
					scope: 'row'
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
				{ content: 'A', horizontalAlignment: 'end', scope: 'col' },
				{
					content: 'B',
					horizontalAlignment: 'end',
					colSpan: 2,
					scope: 'col'
				}
			]
		}
	],
	body: [
		{
			cells: [
				{
					content: '1',
					headerCell: true,
					horizontalAlignment: 'end',
					scope: 'row'
				},
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
				{ content: 'Sub A', scope: 'col' },
				{ content: 'Sub B', scope: 'col' },
				{ content: 'Sub C', scope: 'col' }
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
				{ content: 'Sub A', scope: 'col' },
				{ content: 'Sub B', scope: 'col' },
				{ content: 'Sub C', scope: 'col' }
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
				{ content: 'Sub A', scope: 'col' },
				{ content: 'Sub B', scope: 'col' },
				{ content: 'Sub C', scope: 'col' }
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
				{ content: 'A', scope: 'col' },
				{ content: 'B', scope: 'col' },
				{ content: 'C', scope: 'col' },
				{ content: 'D', scope: 'col' },
				{ content: 'E', scope: 'col' },
				{ content: 'F', scope: 'col' },
				{ link: { text: 'G', href: '#' }, scope: 'col' }
			]
		}
	],
	body: Array.from({ length: 20 }, (_, i) => ({
		cells: [
			{ content: `Row ${i + 1}`, headerCell: true, scope: 'row' },
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
				{ content: 'Footer 1', headerCell: true, scope: 'row' },
				{ link: { text: 'Footer 2', href: '#' }, colSpan: 6 }
			]
		}
	]
};
