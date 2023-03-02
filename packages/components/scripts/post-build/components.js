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
 *     vue?:{
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
		defaultStylePath: 'components/infotext/infotext.css',
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
		defaultStylePath: 'components/link/link.css',
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
		defaultStylePath: 'components/section/section.css',
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
		defaultStylePath: 'components/header/header-web-component.css',
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
			vue: [
				{
					from: 'import { DBHeaderState, DBHeaderProps } from "./model";',
					to: ''
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
		defaultStylePath: 'components/divider/divider-web-component.css',
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
		defaultStylePath: 'components/icon/icon-web-component.css'
	}
];

module.exports = getComponents();
