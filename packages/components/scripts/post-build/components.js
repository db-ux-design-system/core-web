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
		name: 'alert',
		defaultStylePath: 'components/alert/alert.css',
		config: {
			isClickComponent: true,
			isIconComponent: true
		}
	},

	{
		name: 'infotext',
		defaultStylePath: 'components/infotext/infotext.css',
		config: {
			isIconComponent: true
		}
	},

	{
		name: 'link',
		defaultStylePath: 'components/link/link.css',
		config: {
			isClickComponent: true
		}
	},

	{
		name: 'section',
		defaultStylePath: 'components/section/section.css'
	},

	{
		name: 'page',
		defaultStylePath: 'components/page/page.css'
	},
	{
		name: 'header',
		defaultStylePath: 'components/header/header.css'
	},
	{
		name: 'brand',
		defaultStylePath: 'components/brand/brand.css'
	},
	{
		name: 'input',
		defaultStylePath: 'components/input/input.css',
		config: {
			isFormComponent: true,
			isIconComponent: true,
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			}
		}
	},
	{
		name: 'divider',
		defaultStylePath: 'components/divider/divider.css'
	},
	{
		name: 'card',
		defaultStylePath: 'components/card/card.css',
		config: {
			isClickComponent: true
		}
	},
	{
		name: 'tab-bar',
		defaultStylePath: 'components/tab-bar/tab-bar.css',
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
		name: 'tab',
		defaultStylePath: 'components/tab/tab.css'
	},
	{
		name: 'button',
		defaultStylePath: 'components/button/button.css',
		config: {
			isClickComponent: true
		}
	},
	{
		name: 'icon',
		defaultStylePath: 'components/icon/icon-web-component.css'
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
