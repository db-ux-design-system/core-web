/**
 * @returns {[{
 * name:string,
 * defaultStylePath:string,
 * overwrites?:{
 * 	global?:{from:string,to:string}[],
 * 	angular?:{from:string,to:string}[],
 * 	react?:{from:string,to:string}[],
 * 	vue?:{from:string,to:string}[],
 * 	webComponents?:{from:string,to:string}[]
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
		name: 'drawer',
		defaultStylePath: 'components/drawer/drawer-web-component.css',
		overwrites: {
			global: [
				{ from: '(event) => handleClose', to: '() => handleClose' },
				{ from: 'handleClose(event)', to: 'handleClose(event: any)' }
			],
			angular: [
				{
					from: 'this.dialogRef.nativeElement',
					to: 'this.dialogRef?.nativeElement'
				}
			],
			vue: [
				{
					from: 'import { DBDrawerState, DBDrawerProps } from "./model";',
					to: ''
				}
			],
			webComponents: [{ from: '__prev.find', to: '!!__prev.find' }]
		}
	},

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
			vue: [{ from: '(snippet, index)', to: '(snippet)' }]
		}
	},

	{
		name: 'radio',
		overwrites: {
			vue: [
				{
					from: 'immediate: true,',
					to: 'immediate: true,\nflush: "post"'
				}
			]
		},
		config: {
			isFormComponent: true,
			isClickComponent: true,
			vue: {
				vModel: [{ modelValue: 'checked', binding: ':checked' }]
			}
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
		name: 'header',
		overwrites: {
			global: [
				{
					from: '(event) => toggle()',
					to: '() => toggle()'
				},
				{
					from: '(event) => toggle()',
					to: '() => toggle()'
				}
			],
			angular: [
				{ from: '(close)', to: '(onClose)' },
				{
					from: '<ng-content select="[action-bar]">',
					to: '<ng-content *ngTemplateOutlet="dbActionBar">'
				},
				{
					from: '<ng-content select="[meta-navigation]">',
					to: '<ng-content *ngTemplateOutlet="dbMetaNavigation">'
				},
				{
					from: '<ng-content>',
					to: '<ng-content *ngTemplateOutlet="dbNavigation">'
				},
				{
					from: '<ng-content select="[action-bar]">',
					to: '<ng-content *ngTemplateOutlet="dbActionBar">'
				},
				{
					from: '<ng-content select="[meta-navigation]">',
					to: '<ng-content *ngTemplateOutlet="dbMetaNavigation">'
				},
				{
					from: '<ng-content>',
					to: '<ng-content *ngTemplateOutlet="dbNavigation">'
				},
				{
					from: 'export class DBHeader {\n',
					to:
						'export class DBHeader {\n' +
						'\t@ContentChild(ActionBarDirective, { read: TemplateRef }) dbActionBar: any;\n' +
						'\t@ContentChild(NavigationDirective, { read: TemplateRef }) dbNavigation: any;\n' +
						'\t@ContentChild(MetaNavigationDirective, { read: TemplateRef }) dbMetaNavigation: any;\n'
				},
				{
					from: 'import { NgModule } from "@angular/core";',
					to:
						"import { NgModule, ContentChild, TemplateRef } from '@angular/core';\t\n" +
						"import { ActionBarDirective } from './action-bar.directive';\n" +
						"import { NavigationDirective } from './navigation.directive';\n" +
						"import { MetaNavigationDirective } from './meta-navigation.directive';"
				}
			],
			webComponents: [
				{
					from: '<slot></slot>',
					to: '<slot name="navigation-mobile"></slot>'
				},
				{
					from: 'name="meta-navigation"',
					to: 'name="meta-navigation-mobile"'
				},
				{
					from: 'name="action-bar"',
					to: 'name="action-bar-mobile"'
				},
				{
					from:
						'        el.removeEventListener("close", this.onDbDrawerDbHeaderClose);\n' +
						'        el.addEventListener("close", this.onDbDrawerDbHeaderClose);',
					to: 'el.props.onClose = this.onDbDrawerDbHeaderClose;'
				},
				{
					from: 'if(this.props.drawerOpen)         el.setAttribute("open", this.props.drawerOpen);',
					to: '        el.setAttribute("open", Boolean(this.props.drawerOpen));'
				}
			]
		}
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
			isIconComponent: true,
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
	},
	{
		from: 'iconVisible(icon) {',
		to: 'iconVisible(icon:any) {'
	}
];

module.exports = {
	components: getComponents(),
	formComponentChanges,
	clickComponentChanges,
	iconComponentChanges
};
