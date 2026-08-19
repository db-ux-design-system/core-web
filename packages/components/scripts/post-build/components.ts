export type Overwrite = {
	from: string | RegExp;
	to: string;
};

export type Component = {
	name: string;
	/**
	 * Folder the generated component lives in, when it is not the component name
	 * itself. Needed for families that share one folder, such as the seven
	 * Heading components in `components/heading/`.
	 */
	folder?: string;
	/**
	 * Base name of the Playwright component spec, when it is not the component
	 * name itself. Set it on exactly one member of a family that shares a spec.
	 */
	spec?: string;
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

/*
 * The seven Heading components share one folder, one model, one stylesheet and
 * one spec, so every entry points at the `heading` folder and only the first one
 * declares the shared spec.
 *
 * The vue overwrite runs after the built-in `className` -> `props.class`
 * rewrite and restores the alias, so the shared spec can assert both the react
 * `className` and the vue `class` API.
 */
const headingComponents: Component[] = [
	'custom-heading',
	'heading-h1',
	'heading-h2',
	'heading-h3',
	'heading-h4',
	'heading-h5',
	'heading-h6'
].map((name, index) => ({
	name,
	folder: 'heading',
	spec: index === 0 ? 'heading' : undefined,
	overwrites: {
		vue: [{ from: 'props.class', to: 'props.className ?? props.class' }]
	}
}));

export const getComponents = (): Component[] => [
	...headingComponents,

	{
		name: 'table-data-cell'
	},

	{
		name: 'table-header-cell'
	},

	{
		name: 'table-row'
	},

	{
		name: 'table-footer'
	},

	{
		name: 'table-body'
	},

	{
		name: 'table-head'
	},

	{
		name: 'table-caption'
	},

	{
		name: 'table'
	},

	{
		name: 'custom-button'
	},

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
				},
				{
					from: `
      <select`,
					to: '<select'
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
			react: [{ from: /HTMLAttributes/g, to: 'ButtonHTMLAttributes' }]
		}
	},

	{
		name: 'tabs',
		config: {
			react: {
				propsPassingFilter: ['onIndexChange', 'onValueChange']
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
				propsPassingFilter: ['onToggle', 'defaultOpen']
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
			],
			stencil: [
				{
					from: '<slot>',
					/* This is a workaround for stencil.
						At the moment the navigation is broken in stencil and will be fixed in the db-shell.
						Until then we need to add a named slot for the button, because web-components allow only one default slot.
					*/
					to: '<slot name="expandButton">'
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
				{ from: 'value={', to: '/* @ts-ignore */\nvalue={' },
				{
					from: 'this.value ?? this._value ?? ""',
					to: 'this.value ?? this._value ?? undefined'
				}
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
		name: 'drawer-header'
	},

	{
		name: 'drawer-footer'
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
			angular: [{ from: '<HTMLElement>', to: '<HTMLInputElement>' }]
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
