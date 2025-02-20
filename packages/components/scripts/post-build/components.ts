export type Overwrite = {
	from: string | RegExp;
	to: string;
};

export type Component = {
	name: string;
	overwrites?: {
		global?: Overwrite[];
		angular?: Overwrite[];
		stencil?: Overwrite[];
		react?: Overwrite[];
		vue?: Overwrite[];
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
		overwrites: {
			stencil: [{ from: 'HTMLElement', to: 'HTMLInputElement' }]
		},
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
			angular: [{ from: 'attr.open', to: 'open' }],
			// TS issue
			stencil: [{ from: 'name={this.name}', to: '' }]
		},
		config: {
			react: {
				propsPassingFilter: ['onToggle']
			}
		}
	},

	{
		name: 'accordion'
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
			],
			stencil: [{ from: 'HTMLElement', to: 'HTMLTextAreaElement' }]
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
			],
			react: [
				{
					from: 'onMouseMove={(event)',
					to: 'onMouseMove={(event: any)'
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
			],
			stencil: [
				{ from: 'HTMLElement', to: 'HTMLSelectElement' },
				{ from: 'value={', to: '/* @ts-ignore */\nvalue={' }
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
			stencil: [{ from: /onClose/g, to: 'close' }]
		},
		config: {
			react: {
				propsPassingFilter: ['onClose']
			}
		}
	},

	{
		name: 'tag',
		config: {
			react: {
				propsPassingFilter: ['onRemove']
			}
		}
	},
	{
		name: 'checkbox',
		overwrites: {
			stencil: [{ from: 'HTMLElement', to: 'HTMLInputElement' }]
		},
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
		overwrites: {
			stencil: [{ from: 'HTMLElement', to: 'HTMLInputElement' }]
		},
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
		name: 'notification',
		config: {
			react: {
				propsPassingFilter: ['onClose']
			}
		}
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
			},
			react: {
				propsPassingFilter: ['onToggle']
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
			angular: [{ from: '(close)', to: '(onClose)' }]
		}
	},
	{
		name: 'brand'
	},
	{
		name: 'input',
		overwrites: {
			global: [{ from: ', KeyValueType', to: '' }],
			vue: [{ from: ', index', to: '' }],
			stencil: [{ from: 'HTMLElement', to: 'HTMLInputElement' }],
			angular: [
				{
					from: 'writeValue(value: any) {',
					to:
						'writeValue(value: any) {\n' +
						'if (!value && (this.type === "date" ||\n' +
						'			this.type === "time" ||\n' +
						'			this.type === "week" ||\n' +
						'			this.type === "month" ||\n' +
						'			this.type === "datetime-local"\n' +
						'			)) return;'
				}
			]
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
