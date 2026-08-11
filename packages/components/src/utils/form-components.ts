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

const valueMarkerAttribute = 'data-has-value';
const interceptedValueProperties = new WeakSet<HTMLInputElement>();

/**
 * Intercepts programmatic `.value` property assignments on an input element
 * (e.g. from react-hook-form or Angular form controls) and mirrors whether the
 * sanitized DOM value is empty onto a data attribute used by the placeholder
 * styling. The native `value` attribute remains unchanged because it also
 * defines the input's default value and native form reset behavior.
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
	if (!element || signal.aborted || interceptedValueProperties.has(element)) {
		return;
	}

	const ownDescriptor = Object.getOwnPropertyDescriptor(element, 'value');
	const prototype = Object.getPrototypeOf(element);
	const prototypeDescriptor = Object.getOwnPropertyDescriptor(
		prototype,
		'value'
	);
	const descriptor = ownDescriptor ?? prototypeDescriptor;
	if (
		!descriptor?.get ||
		!descriptor.set ||
		(ownDescriptor && !ownDescriptor.configurable)
	) {
		return;
	}

	interceptedValueProperties.add(element);
	const originalSet = descriptor.set;
	let interceptorActive = false;

	const updateValueMarker = (input: HTMLInputElement): void => {
		if (input.value) {
			input.setAttribute(valueMarkerAttribute, 'true');
		} else {
			input.removeAttribute(valueMarkerAttribute);
		}
	};
	const syncValueMarker = (): void => {
		if (interceptorActive) {
			updateValueMarker(element);
		}
	};

	element.addEventListener('input', syncValueMarker, { signal });
	element.addEventListener('change', syncValueMarker, { signal });

	const restoreValueDescriptor = (): void => {
		if (ownDescriptor) {
			Object.defineProperty(element, 'value', ownDescriptor);
		} else {
			delete (element as any).value;
		}
	};

	const activateInterceptor = (): void => {
		if (!interceptorActive) {
			interceptorActive = true;
			Object.defineProperty(element, 'value', {
				configurable: true,
				enumerable: descriptor.enumerable,
				get: descriptor.get,
				set(newValue: string) {
					originalSet.call(this, newValue);
					// Read the sanitized DOM value through the original getter.
					updateValueMarker(this as HTMLInputElement);
				}
			});
		}

		// Switching between supported types can sanitize an existing value.
		syncValueMarker();
	};

	const deactivateInterceptor = (): void => {
		if (interceptorActive) {
			interceptorActive = false;
			restoreValueDescriptor();
		}
		element.removeAttribute(valueMarkerAttribute);
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

	if (dateTimeInputTypeList.includes(element.type)) {
		activateInterceptor();
	}

	signal.addEventListener(
		'abort',
		() => {
			observer.disconnect();
			deactivateInterceptor();
			interceptedValueProperties.delete(element);
		},
		{ once: true }
	);
};
