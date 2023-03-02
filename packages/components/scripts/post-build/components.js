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
 *     vue?:{
 *         vModel?: {modelValue:string, binding:string}[]
 *     }
 * }
 * }]}
 */
const getComponents = () => [
	{
		name: 'alert',
		defaultStylePath: 'components/alert/alert.css',
		overwrites: {
			global: [
				{ from: 'handleClick(event)', to: 'handleClick(event:any)' },
				{
					from: 'getIcon(icon, variant) {',
					to: 'getIcon(icon:any, variant:any) {'
				}
			],
			vue: [
				{
					from: 'import { DBAlertState, DBAlertProps } from "./model";',
					to: ''
				}
			]
		}
	},

	{
		name: 'infotext',
		overwrites: {
			global: [
				{
					from: 'getIcon(icon, variant) {',
					to: 'getIcon(icon:any, variant:any) {'
				}
			],
			vue: [
				{
					from: 'import { DBInfotextState, DBInfotextProps } from "./model";',
					to: ''
				}
			]
		}
	},

	{
		name: 'link',
		overwrites: {
			global: [
				{ from: 'handleClick(event)', to: 'handleClick(event:any)' }
			],
			vue: [
				{
					from: 'import { DBLinkState, DBLinkProps } from "./model";',
					to: ''
				}
			]
		}
	},

	{
		name: 'section',
		overwrites: {
			vue: [
				{
					from: 'import { DBSectionState, DBSectionProps } from "./model";',
					to: ''
				}
			]
		}
	},

	{
		name: 'page',
		overwrites: {
			vue: [
				{
					from: 'import { DBPageProps, DBPageState } from "./model";',
					to: ''
				}
			]
		}
	},
	{
		name: 'header',
		overwrites: {
			vue: [
				{
					from: 'import { DBHeaderState, DBHeaderProps } from "./model";',
					to: ''
				}
			]
		}
	},
	{
		name: 'brand',
		overwrites: {
			vue: [
				{
					from: 'import { DBBrandState, DBBrandProps } from "./model";',
					to: ''
				}
			]
		}
	},
	{
		name: 'input',
		overwrites: {
			global: [
				{ from: 'handleChange(event)', to: 'handleChange(event:any)' },
				{ from: 'handleBlur(event)', to: 'handleBlur(event:any)' },
				{ from: 'handleFocus(event)', to: 'handleFocus(event:any)' },
				{
					from: 'getIcon(variant) {',
					to: 'getIcon(variant:any) {'
				}
			],
			angular: [
				{
					from: 'this.textInputRef.nativeElement',
					to: 'this.textInputRef?.nativeElement'
				}
			],
			vue: [
				{
					from: 'import { DBInputProps, DBInputState } from "./model";',
					to: ''
				},
				{
					from: '_isValid: undefined,',
					to: ''
				}
			]
		},
		config: {
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			}
		}
	},
	{
		name: 'divider',
		overwrites: {
			vue: [
				{
					from: 'import { DBDividerState, DBDividerProps } from "./model";',
					to: ''
				}
			]
		}
	},
	{
		name: 'card',
		overwrites: {
			global: [
				{ from: 'handleClick(event)', to: 'handleClick(event:any)' }
			]
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
		overwrites: {
			global: [
				{ from: 'handleClick(event)', to: 'handleClick(event:any)' }
			]
		}
	},
	{
		name: 'icon'
	}
];

module.exports = getComponents();
