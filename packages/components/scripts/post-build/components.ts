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
			controlValueAccessorRequired?: boolean;
			directives?: { name: string; ngContentName?: string }[];
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
		name: 'custom-select-list-item',
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
		name: 'custom-select-list'
	},
	{
		name: 'custom-select-form-field'
	},
	{
		name: 'custom-select-dropdown'
	},
	{
		name: 'custom-select',
		config: {
			vue: {
				vModel: [{ modelValue: 'values', binding: ':values' }]
			},
			angular: {
				controlValueAccessor: 'values'
			},
			react: {
				propsPassingFilter: [
					'onOptionSelected',
					'onAmountChange',
					'onDropdownToggle'
				],
				containsFragmentMap: true
			}
		},
		overwrites: {
			angular: [
				{
					from: 'attr.checked',
					to: 'checked'
				}
			],
			react: [
				{ from: 'key={uuid()}', to: 'key={getOptionLabel(option)}' }
			]
		}
	},
	{
		name: 'switch',
		overwrites: {
			angular: [{ from: '<HTMLElement>', to: '<HTMLInputElement>' }],
			stencil: [{ from: 'HTMLElement', to: 'HTMLInputElement' }],
			react: [{ from: /HTMLAttributes/g, to: 'InputHTMLAttributes' }]
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
		overwrites: {
			react: [{ from: /HTMLAttributes/g, to: 'InputHTMLAttributes' }]
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
		name: 'tabs',
		config: {
			react: {
				propsPassingFilter: ['onTabSelect', 'onIndexChange']
			}
		}
	},

	{
		name: 'tab-list'
	},

	{
		name: 'tooltip'
	},

	{
		name: 'popover'
	},

	{
		name: 'accordion-item',
		overwrites: {
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
		name: 'accordion',
		overwrites: {
			angular: [
				{ from: 'this.initOpenIndex &&', to: 'this.initOpenIndex() &&' }
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
				{ from: '<HTMLElement>', to: '<HTMLTextAreaElement>' },
				{
					from: '</textarea>',
					to: '{{value()}}</textarea>'
				}
			],
			vue: [
				{
					from: '</textarea>',
					to: '{{value}}</textarea>'
				}
			],
			react: [{ from: /HTMLAttributes/g, to: 'TextareaHTMLAttributes' }],
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
			angular: [{ from: '<HTMLElement>', to: '<HTMLSelectElement>' }],
			react: [
				// React not allowing selected for options
				{ from: 'selected={option.selected}', to: '' },
				{ from: 'selected={optgroupOption.selected}', to: '' },
				{ from: /HTMLAttributes/g, to: 'SelectHTMLAttributes' }
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
			angular: [{ from: '<HTMLElement>', to: '<HTMLDialogElement>' }]
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
			stencil: [{ from: /onRemove/g, to: 'remove' }]
		},
		config: {
			react: {
				propsPassingFilter: ['onRemove']
			}
		}
	},
	{
		name: 'checkbox',
		overwrites: {
			angular: [{ from: '<HTMLElement>', to: '<HTMLInputElement>' }],
			stencil: [{ from: 'HTMLElement', to: 'HTMLInputElement' }],
			react: [{ from: /HTMLAttributes/g, to: 'InputHTMLAttributes' }]
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
			angular: [{ from: '<HTMLElement>', to: '<HTMLInputElement>' }],
			stencil: [{ from: 'HTMLElement', to: 'HTMLInputElement' }],
			react: [{ from: /HTMLAttributes/g, to: 'InputHTMLAttributes' }]
		},
		config: {
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			},
			angular: {
				controlValueAccessor: 'value',
				controlValueAccessorRequired: true
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
		name: 'link',
		overwrites: {
			react: [{ from: /HTMLAttributes/g, to: 'AnchorHTMLAttributes' }]
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
			react: [{ from: /HTMLAttributes/g, to: 'InputHTMLAttributes' }],
			angular: [
				{ from: '<HTMLElement>', to: '<HTMLInputElement>' },
				{
					from: 'writeValue(value: any) {',
					to:
						'writeValue(value: any) {\n' +
						'if (!value && (this.type() === "date" ||\n' +
						'			this.type() === "time" ||\n' +
						'			this.type() === "week" ||\n' +
						'			this.type() === "month" ||\n' +
						'			this.type() === "datetime-local"\n' +
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
		name: 'button',
		overwrites: {
			react: [{ from: /HTMLAttributes/g, to: 'ButtonHTMLAttributes' }]
		}
	},
	{
		name: 'icon'
	}
];

export default getComponents();
