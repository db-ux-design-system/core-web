/**
 * @returns {[{
 * name:string,
 * defaultStylePath:string,
 * overwrites?:{
 * 	global?:{from:string,to:string}[],
 * 	angular?:{from:string,to:string}[],
 * 	react?:{from:string,to:string}[],
 * 	vue?:{from:string,to:string}[]
 * },
 * config?:{
 * 		isFormComponent?:boolean,
 * 		isClickComponent?:boolean,
 * 		isIconComponent?:boolean,
 *     	vue?:{
 *         vModel?: {modelValue:string, binding:string}[]
 *     }
 * }
 * }]}
 */
const getComponents = () => [
	{
		name: 'code-docs',
		defaultStylePath: 'components/code-docs/code-docs.css',
		overwrites: {
			global: [
				{
					from: '(event) => copyCode(snippet)',
					to: '() => copyCode(snippet)'
				},
				{
					from: 'copyCode(code)',
					to: 'copyCode(code:any)'
				},
				{
					from: '(event) => toggleCode()',
					to: '() => toggleCode()'
				}
			],
			vue: [
				{
					from: 'import { DBCodeDocsProps, DBCodeDocsState } from "./model";',
					to: ''
				},
				{ from: '(snippet, index)', to: '(snippet)' }
			]
		}
	},

	{
		name: 'alert',
		config: {
			isClickComponent: true,
			isIconComponent: true
		}
	},

	{
		name: 'infotext',
		config: {
			isIconComponent: true
		}
	},

	{
		name: 'link',
		config: {
			isClickComponent: true
		}
	},

	{
		name: 'section'
	},

	{
		name: 'page'
	},
	{
		name: 'header'
	},
	{
		name: 'brand'
	},
	{
		name: 'input',
		config: {
			isFormComponent: true,
			isIconComponent: true,
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			}
		}
	},
	{
		name: 'divider'
	},
	{
		name: 'card',
		config: {
			isClickComponent: true
		}
	},
	{
		name: 'tab-bar',
		overwrites: {
			angular: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{ from: '[key]="tab.name"', to: '' }
			],
			react: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{
					from: 'convertTabs(props.tabs)?.map((tab)',
					to: 'convertTabs(props.tabs)?.map((tab:any)'
				},
				{
					from: 'import type { DBTabProps } from "../tab/model";',
					to: ''
				}
			],
			vue: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{
					from: 'v-for="(tab, index)',
					to: 'v-for="(tab)'
				}
			]
		}
	},
	{
		name: 'tab'
	},
	{
		name: 'button',
		config: {
			isClickComponent: true
		}
	},
	{
		name: 'icon'
	}
];

const formComponentChanges = [
	{ from: 'handleChange(event)', to: 'handleChange(event:any)' },
	{ from: 'handleBlur(event)', to: 'handleBlur(event:any)' },
	{ from: 'handleFocus(event)', to: 'handleFocus(event:any)' }
];

const clickComponentChanges = [
	{ from: 'handleClick(event)', to: 'handleClick(event:any)' }
];

const iconComponentChanges = [
	{
		from: 'getIcon(icon, variant) {',
		to: 'getIcon(icon:any, variant:any) {'
	},
	{
		from: 'getIcon(variant) {',
		to: 'getIcon(variant:any) {'
	}
];

module.exports = {
	components: getComponents(),
	formComponentChanges,
	clickComponentChanges,
	iconComponentChanges
};
