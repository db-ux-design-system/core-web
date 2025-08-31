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
			angular: [
				{ from: '<HTMLElement>', to: '<HTMLSelectElement>' },
				// TODO: We can move this to onMount with useTarget after https://github.com/BuilderIO/mitosis/pull/1750 is merged
				{
					from: 'ngAfterViewInit() {',
					to:
						'ngAfterViewInit() {\n' +
						'\t  this.writeValue(this.value());'
				}
			],
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
		name: 'infotext',
		overwrites: {
			angular: [
				{
					from: 'import { CommonModule } from "@angular/common";',
					to: 'import { CommonModule } from "@angular/common";\nimport { inject, Optional } from "@angular/core";\nimport { DBInput } from "../input/input";'
				},
				{
					from: 'export class DBInfotext implements AfterViewInit {',
					to: 'export class DBInfotext implements AfterViewInit {\n  private parentInput = inject(DBInput, { optional: true, skipSelf: true, host: true });'
				},
				{
					from: '@if(text()){ {{text()}} }@else{',
					to: '@if(shouldShow()){ @if(text()){ {{text()}} }@else{'
				},
				{
					from: '<ng-content></ng-content>\n    }</span',
					to: '<ng-content></ng-content>\n    } }</span'
				},
				{
					from: 'constructor() {}',
					to: `constructor() {}

  shouldShow(): boolean {
    const errorAttr = this.error();
    if (!errorAttr) {
      return true; // Show by default if no error attribute
    }
    
    if (this.parentInput) {
      return this.parentInput.hasFormControlError(errorAttr);
    }
    
    return false; // Hide if error attribute exists but no parent input or no error
  }`
				}
			]
		}
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
				},
				{
					from: 'Renderer2 } from "@angular/core";',
					to: 'Renderer2, Optional, HostBinding, inject } from "@angular/core";'
				},
				{
					from: 'import { ControlValueAccessor, NG_VALUE_ACCESSOR } from \'@angular/forms\';',
					to: 'import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ValidationErrors } from \'@angular/forms\';'
				},
				{
					from: 'constructor(private renderer: Renderer2,) {',
					to: 'private ngControl = inject(NgControl, { optional: true });\n\n  constructor(private renderer: Renderer2,) {'
				},
				{
					from: 'handleValidation() {',
					to: `getFormControlErrors(): ValidationErrors | null {
    return this.ngControl?.control?.errors || null;
  }

  hasFormControlError(errorType: string): boolean {
    const errors = this.getFormControlErrors();
    return errors ? errors[errorType] : false;
  }

  handleValidation() {`
				},
				{
					from: '!this._ref()?.nativeElement?.validity.valid ||',
					to: '!this._ref()?.nativeElement?.validity.valid || this.getFormControlErrors() ||'
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
