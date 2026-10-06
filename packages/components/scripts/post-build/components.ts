export type Overwrite = {
	from: string | string[] | RegExp;
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
			directives?: { name: string; ngContentName?: string }[];
		};
		react?: {
			propsPassingFilter?: string[];
			containsFragmentMap?: boolean;
		};
	};
};

/*
 * The seven Heading components share one folder, one model and one stylesheet,
 * so every entry points at the `heading` folder.
 *
 * The vue overwrite runs after the built-in `className` -> `props.class`
 * rewrite and restores the alias, so consumers can assert both the react
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
].map((name) => ({
	name,
	folder: 'heading',
	overwrites: {
		vue: [{ from: 'props.class', to: 'props.className ?? props.class' }]
	}
}));

/*
 * The two Paragraph components share one folder, one model and one stylesheet,
 * following the same pattern as the Heading family.
 */
const paragraphComponents: Component[] = ['paragraph', 'text-group'].map(
	(name) => ({
		name,
		folder: 'paragraph',
		overwrites: {
			vue: [{ from: 'props.class', to: 'props.className ?? props.class' }]
		}
	})
);

/*
 * The two ControlPanelActions components share one folder, one model and one
 * stylesheet, following the same pattern as the Heading family.
 */
const controlPanelActionsComponents: Component[] = [
	'control-panel-actions-1',
	'control-panel-actions-2'
].map((name) => ({
	name,
	folder: 'control-panel-actions',
	overwrites: {
		vue: [{ from: 'props.class', to: 'props.className ?? props.class' }]
	}
}));

export const getComponents = (): Component[] => [
	{
		name: 'pagination-item'
	},
	{
		name: 'pagination',
		config: {
			react: {
				propsPassingFilter: ['onPageChange']
			}
		}
	},

	...headingComponents,
	...paragraphComponents,
	...controlPanelActionsComponents,

	{
		name: 'dialog-footer'
	},

	{
		name: 'dialog-header'
	},

	{
		name: 'dialog',
		config: {
			react: {
				/* Keeps the consumer callbacks out of the `filterPassingProps`
				 * DOM spread, same configuration key the `drawer` entry uses.
				 * This cannot move into a Mitosis plugin yet: the spread itself
				 * is injected by `scripts/post-build/react.ts` after every
				 * plugin hook has run. */
				propsPassingFilter: ['onClose', 'onCancel']
			}
		}
	},
	{
		name: 'control-panel-skip-navigation'
	},

	{
		name: 'drawer-footer'
	},

	{
		name: 'drawer-header'
	},

	{
		name: 'shell-content'
	},

	{
		name: 'control-panel-flat-icon'
	},

	{
		name: 'shell-sub-navigation',
		config: {
			react: {
				propsPassingFilter: ['onExpandButtonTooltipFn']
			}
		}
	},

	{
		name: 'control-panel-navigation-item-group'
	},

	{
		name: 'control-panel-meta'
	},

	{
		name: 'control-panel-mobile',
		config: {
			react: {
				propsPassingFilter: ['onToggle']
			}
		}
	},
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
		name: 'loading-indicator',
		config: {
			react: {
				propsPassingFilter: ['autoDisable', 'onTimeout', 'role']
			}
		}
	},

	{
		name: 'stack'
	},
	{
		name: 'custom-select-list-item',
		config: {
			vue: {
				vModel: [{ modelValue: 'checked', binding: ':checked' }]
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
			react: {
				propsPassingFilter: [
					'onOptionSelected',
					'onAmountChange',
					'onDropdownToggle',
					'onSearch'
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
		name: 'control-panel-navigation'
	},
	{
		name: 'control-panel-navigation-item'
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
		},
		overwrites: {
			stencil: [
				{
					from: new RegExp('<db-drawer[\\s\\S]*?</db-drawer>'),
					to: ''
				}
			]
		}
	},
	{
		name: 'footer-content'
	},
	{
		name: 'footer-meta'
	},
	{
		name: 'footer'
	},
	{
		name: 'brand'
	},
	{
		name: 'shell'
	},
	{
		name: 'control-panel-desktop',
		config: {
			react: {
				propsPassingFilter: ['onExpandButtonTooltipFn']
			}
		}
	},
	{
		name: 'control-panel-brand'
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
