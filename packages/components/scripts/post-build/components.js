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
 *     	vue?:{
 *         vModel?: {modelValue:string, binding:string}[]
 *     }
 * }
 * }]}
 */
const getComponents = () => [
	{
		name: 'sub-navigation'
	},

	{
		name: 'main-navigation'
	},

	{
		name: 'navigation-item'
	},

	{
		name: 'select'
	},
	{
		name: 'drawer',
		overwrites: {
			react: [
				{
					from: 'const dialogRef = useRef<HTMLDialogElement>(null);',
					to: 'const dialogRef = useRef<HTMLDialogElement>(component);'
				}
			],
			webComponents: [{ from: '__prev.find', to: '!!__prev.find' }]
		}
	},

	{
		name: 'tag'
	},
	{
		name: 'code-docs'
	},

	{
		name: 'checkbox',
		config: {
			vue: {
				vModel: [{ modelValue: 'checked', binding: ':checked' }]
			}
		}
	},

	{
		name: 'radio',
		config: {
			vue: {
				vModel: [{ modelValue: 'checked', binding: ':checked' }]
			}
		}
	},

	{
		name: 'alert'
	},

	{
		name: 'infotext'
	},

	{
		name: 'link'
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
		overwrites: {
			global: [{ from: ', KeyValueType', to: '' }],
			vue: [{ from: ', index', to: '' }]
		},
		config: {
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			}
		}
	},
	{
		name: 'divider'
	},
	{
		name: 'card'
	},
	{
		name: 'tab-bar'
	},
	{
		name: 'tab'
	},
	{
		name: 'button'
	},
	{
		name: 'icon'
	}
];

module.exports = {
	components: getComponents()
};
