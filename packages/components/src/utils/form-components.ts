/* eslint-disable @typescript-eslint/no-explicit-any */
import { delay } from './index';

const specialNumberCharacters = ['.', ',', 'e', 'E', '+', '-'];

export const handleFrameworkEventAngular = (
	component: any,
	event: any,
	modelValue: string = 'value',
	lastValue?: any
): void => {
	const value = event.target[modelValue];
	const type = event.target?.type;

	if (
		!value &&
		value !== '' &&
		['date', 'time', 'week', 'month', 'datetime-local'].includes(type)
	) {
		// If value is empty and type date we skip `writingValue` function
		return;
	}

	if (type === 'number') {
		if (event.type === 'input') {
			if (
				specialNumberCharacters.includes(event.data) ||
				(specialNumberCharacters.some((specialCharacter) =>
					lastValue?.toString().includes(specialCharacter)
				) &&
					event.inputType === 'deleteContentBackward')
			) {
				// Skip `writingValue` function if number type and input event
				// and `.` or `,` or 'e', 'E', '+', '-' was typed
				// or content was deleted but last number had a `.`
				return;
			}
		} else if (event.type === 'change') {
			// Skip `writingValue` function if number type and change event
			return;
		}
	}
	component.propagateChange(value);
	component.writeValue(value);
};

export const handleFrameworkEventVue = (
	emit: (event: string, ...args: any[]) => void,
	event: any,
	modelValue: string = 'value'
): void => {
	// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
	emit(`update:${modelValue}`, event.target[modelValue]);
};

export const addResetEventListener = (
	element: any, // we need any here for the _dbFormResetListenerAdded property
	resetFunction: (event: Event) => void,
	signal: AbortSignal
): void => {
	if (element.form && !element._dbFormResetListenerAdded) {
		(element.form as HTMLFormElement).addEventListener(
			'reset',
			(event: Event) => {
				resetFunction(event);
			},
			{ signal }
		);
		// Mark as added to avoid duplicate listeners
		element._dbFormResetListenerAdded = true;
	}
};

export const addCheckedResetEventListener = (
	element: any,
	props: { checked?: boolean | string; defaultChecked?: boolean },
	resetFunction: (event: any) => void,
	signal: AbortSignal
): void => {
	addResetEventListener(
		element,
		(event: any) => {
			void delay(() => {
				const resetValue = props.checked
					? props.checked
					: props.defaultChecked
						? props.defaultChecked
						: element.checked;
				const valueEvent: any = {
					...event,
					target: { ...event.target, checked: resetValue }
				};
				resetFunction(valueEvent);
			}, 1);
		},
		signal
	);
};

export const addValueResetEventListener = (
	element: any,
	props: { value?: string; defaultValue?: string },
	resetFunction: (event: any) => void,
	signal: AbortSignal
): void => {
	addResetEventListener(
		element,
		(event: any) => {
			void delay(() => {
				const resetValue = props.value
					? props.value
					: props.defaultValue
						? props.defaultValue
						: element.value;
				const valueEvent: any = {
					...event,
					target: { ...event.target, value: resetValue }
				};
				resetFunction(valueEvent);
			}, 1);
		},
		signal
	);
};

/** @internal List of input types whose value is rendered inside `::-webkit-datetime-edit`. Internal helper for the placeholder styling. */
const dateTimeInputTypeList: string[] = [
	'date',
	'datetime-local',
	'month',
	'time',
	'week'
];

/**
 * Intercepts programmatic `.value` property assignments on an input element
 * (e.g. from react-hook-form or Angular form controls) and mirrors the
 * value onto the HTML `value` attribute. This allows CSS to detect values
 * set via the DOM property — which do not update the attribute — using
 * existing attribute selectors like `[value*="1"]` etc.
 *
 * The interceptor observes the element's `type` attribute: it activates
 * when the type is (or becomes) a date/time type, and deactivates when
 * it changes to a non-date/time type.
 *
 * @param element - The input element to observe
 * @param signal - AbortSignal to restore original behavior on cleanup
 */
export const addValuePropertyInterceptor = (
	element: HTMLInputElement,
	signal: AbortSignal
): void => {
	if (!element) {
		return;
	}

	const prototype = Object.getPrototypeOf(element);
	const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
	if (!descriptor || !descriptor.set) {
		return;
	}

	const originalSet = descriptor.set;
	let interceptorActive = false;

	// Sync the value attribute from native user interactions (e.g. date picker)
	// which bypass the JS setter.
	const syncAttribute = () => {
		if (!interceptorActive) return;
		if (element.value) {
			element.setAttribute('value', element.value);
		} else {
			element.removeAttribute('value');
		}
	};

	element.addEventListener('input', syncAttribute, { signal });
	element.addEventListener('change', syncAttribute, { signal });

	const activateInterceptor = () => {
		if (interceptorActive) {
			return;
		}
		interceptorActive = true;
		Object.defineProperty(element, 'value', {
			configurable: true,
			get: descriptor.get,
			set(newValue: string) {
				originalSet.call(this, newValue);
				if (newValue) {
					(this as HTMLInputElement).setAttribute('value', newValue);
				} else {
					(this as HTMLInputElement).removeAttribute('value');
				}
			}
		});

		// Sync initial value if already set
		if (element.value) {
			element.setAttribute('value', element.value);
		}
	};

	const deactivateInterceptor = () => {
		if (!interceptorActive) {
			return;
		}
		interceptorActive = false;
		delete (element as any).value;
	};

	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.attributeName === 'type') {
				if (dateTimeInputTypeList.includes(element.type)) {
					activateInterceptor();
				} else {
					deactivateInterceptor();
				}
			}
		}
	});

	observer.observe(element, {
		attributes: true,
		attributeFilter: ['type']
	});

	// Activate immediately if the current type matches
	if (dateTimeInputTypeList.includes(element.type)) {
		activateInterceptor();
	}

	// Clean up on abort
	signal.addEventListener(
		'abort',
		() => {
			observer.disconnect();
			deactivateInterceptor();
		},
		{ once: true }
	);
};
