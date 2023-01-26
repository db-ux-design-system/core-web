module.exports = [
	{
		name: 'page',
		defaultStylePath: 'components/page/page.css',
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
		defaultStylePath: 'components/header/header.css',
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
		defaultStylePath: 'components/brand/brand.css',
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
		defaultStylePath: 'components/input/input.css',
		overwrites: {
			global: [
				{ from: 'handleChange(event)', to: 'handleChange(event:any)' },
				{ from: 'handleBlur(event)', to: 'handleBlur(event:any)' },
				{ from: 'handleFocus(event)', to: 'handleFocus(event:any)' }
			],
			angular: [
				{
					from: 'this.textInputRef.nativeElement',
					to: 'this.textInputRef?.nativeElement'
				}
			],
			vue: [
				{
					from: 'import { DBInputState, DBInputProps, iconVariants } from "./model";',
					to: 'import { iconVariants } from "./model";'
				},
				{
					from: '_isValid: undefined,',
					to: ''
				}
			]
		}
	},
	{
		name: 'divider',
		defaultStylePath: 'components/divider/divider.css',
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
		defaultStylePath: 'components/card/card.css',
		overwrites: {
			global: [
				{ from: 'handleClick(event)', to: 'handleClick(event:any)' }
			]
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
		overwrites: {
			global: [
				{ from: 'handleClick(event)', to: 'handleClick(event:any)' }
			]
		}
	},
	{
		name: 'icon',
		defaultStylePath: 'components/icon/icon.css'
	}
];
