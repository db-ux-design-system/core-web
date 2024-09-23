export type Overwrite = {
	from: string | RegExp;
	to: string;
};

export type Component = {
	name: string;
	overwrites?: {
		global?: Overwrite[];
		angular?: Overwrite[];
		react?: Overwrite[];
		vue?: Overwrite[];
		webComponents?: Overwrite[];
	};
	config?: {
		vue?: {
			vModel?: { modelValue: string; binding: string }[];
		};
		angular?: {
			controlValueAccessor?: string;
			directives?: { name: string; ngContentName?: string }[];
			initValues?: { key: string; value: any }[];
		};
		react?: {
			propsPassingFilter?: string[];
			containsFragmentMap?: boolean;
		};
	};
};

export const getComponents = (): Component[] => [

	{
		name: 'stack'
	},
	{
		name: 'switch',
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
		name: 'tab-panel'
	},
	{
		name: 'tab-item',
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
		name: 'tabs',
		overwrites: {
			angular: [
				{
					from: 'scrollContainer = null;',
					to: 'scrollContainer: Element | null = null;'
				},
				{
					from: '& > .db-tab-panel',
					to: '& > dbtabpanel > .db-tab-panel, & > db-tab-panel > .db-tab-panel'
				}
			]
		}
	},

	{
		name: 'tab-list'
	},

	{
		name: 'tooltip'
	},

	{
		name: 'popover',
		overwrites: { angular: [{ from: 'mouseEnter', to: 'mouseenter' }] }
	},

	{
		name: 'accordion-item',
		overwrites: {
			// this is an issue from mitosis always adding `attr`
			angular: [{ from: 'attr.open', to: 'open' }]
		}
	},

	{
		name: 'accordion',
		overwrites: {
			angular: [
				{ from: 'openItems = []', to: 'openItems: string[] = []' }
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
					from: '</textarea>',
					to: '{{value}}</textarea>'
				}
			]
		}
	},
	{
		name: 'badge'
	},

	{
		name: 'navigation'
	},
	{
		name: 'navigation-item',
		overwrites: {
			angular: [
				{
					from: 'navigationItemSafeTriangle = undefined;',
					to: 'navigationItemSafeTriangle: undefined | NavigationItemSafeTriangle = undefined;'
				}
			],
			vue: [
				{
					from: 'navigationItemSafeTriangle: undefined',
					to: 'navigationItemSafeTriangle: undefined as undefined | NavigationItemSafeTriangle'
				}
			]
		},
		config: {
			angular: {
				directives: [{ name: 'NavigationContent' }]
			}
		}
	},

	{
		name: 'select',
		overwrites: {
			react: [
				// React not allowing selected for options
				{ from: 'selected={option.selected}', to: '' },
				{ from: 'selected={optgroupOption.selected}', to: '' }
			]
		},
		config: {
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			},
			angular: {
				controlValueAccessor: 'value'
			},
			react: {
				containsFragmentMap: true
			}
		}
	},
	{
		name: 'drawer',
		overwrites: {
			webComponents: [{ from: '__prev.find', to: '!!__prev.find' }]
		},
		config: {
			react: {
				propsPassingFilter: ['onClose']
			}
		}
	},

	{
		name: 'tag',
		overwrites: {
			angular: [
				{
					from: /this.ref.nativeElement/g,
					to: 'this.ref?.nativeElement'
				}
			]
		}
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
				controlValueAccessor: 'checked'
			}
		}
	},

	{
		name: 'notification'
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
					{
						name: 'SecondaryAction',
						ngContentName: 'secondary-action'
					},
					{
						name: 'MetaNavigation',
						ngContentName: 'meta-navigation'
					},
					{
						name: 'Navigation'
					}
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
			angular: [{ from: '(close)', to: '(onClose)' }],
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
		name: 'button'
	},
	{
		name: 'icon'
	}
];

export default getComponents();
