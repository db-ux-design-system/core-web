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

export const alignmentStartTable: DBTableData = {
	header: [
		{
			cells: [
				{ content: 'A', alignment: 'start' },
				{ content: 'B', alignment: 'start', colSpan: 2 }
			]
		}
	],
	body: [
		{
			cells: [
				{ content: '1', headerCell: true, alignment: 'start' },
				{ content: '2', alignment: 'start' },
				{ content: '3', alignment: 'start' }
			]
		}
	]
};

export const alignmentCenterTable: DBTableData = {
	header: [
		{
			cells: [
				{ content: 'A', alignment: 'center' },
				{ content: 'B', alignment: 'center', colSpan: 2 }
			]
		}
	],
	body: [
		{
			cells: [
				{ content: '1', headerCell: true, alignment: 'center' },
				{ content: '2', alignment: 'center' },
				{ content: '3', alignment: 'center' }
			]
		}
	]
};

export const alignmentEndTable: DBTableData = {
	header: [
		{
			cells: [
				{ content: 'A', alignment: 'end' },
				{ content: 'B', alignment: 'end', colSpan: 2 }
			]
		}
	],
	body: [
		{
			cells: [
				{ content: '1', headerCell: true, alignment: 'end' },
				{ content: '2', alignment: 'end' },
				{ content: '3', alignment: 'end' }
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
