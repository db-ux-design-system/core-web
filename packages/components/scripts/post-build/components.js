/**
 * @returns {[{
 * name:string,
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
 *     },
 *     angular?: {
 * 			controlValueAccessor?: string,
 * 			directives?: {name:string, ngContentName?:string}[]
 * 		}
 * }
 * }]}
 */
const getComponents = () => [
	{
		name: 'accordion-item'
	},

	{
		name: 'accordion',
		overwrites: {
			angular: [
				{ from: 'openItems = []', to: 'openItems: string[] = []' }
			],
			react: [
				{
					from: 'const ref = useRef<HTMLDivElement>(null);',
					to: 'const ref = useRef<HTMLDivElement>(component);'
				}
			]
		}
	},

	{
		name: 'textarea',
		config: {
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			},
			angular: {
				controlValueAccessor: 'value'
			}
		},
		overwrites: {
			angular: [
				{
					from: '[attr.defaultValue]="defaultValue ?? children"',
					to: ''
				},
				{
					from: '</textarea>',
					to: '{{value || defaultValue}}</textarea>'
				}
			],
			vue: [
				{
					from: ':defaultValue="defaultValue || $slots.default"',
					to: ''
				}
			]
		}
	},
	{
		name: 'badge'
	},

	{
		name: 'main-navigation'
	},
	{
		name: 'navigation-item',
		config: {
			angular: {
				directives: [{ name: 'NavigationContent' }]
			}
		}
	},

	{
		name: 'select',
		config: {
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			},
			angular: {
				controlValueAccessor: 'value'
			}
		}
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
			},
			angular: {
				controlValueAccessor: 'checked'
			}
		}
	},

	{
		name: 'radio',
		config: {
			vue: {
				vModel: [{ modelValue: 'checked', binding: ':checked' }]
			},
			angular: {
				controlValueAccessor: false
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
		config: {
			angular: {
				directives: [
					{ name: 'ActionBar', ngContentName: 'action-bar' },
					{
						name: 'MetaNavigation',
						ngContentName: 'meta-navigation'
					},
					{ name: 'Navigation' }
				]
			}
		},
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
			},
			angular: {
				controlValueAccessor: 'value'
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
