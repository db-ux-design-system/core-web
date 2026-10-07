import { noChange, type ElementPart } from 'lit';
import type { PartInfo } from 'lit/directive.js';
import { Directive, directive, PartType } from 'lit/directive.js';

// Re-export so generated stories import it from this relative module. Importing
// `lit/directives/unsafe-html.js` directly in generated code is fragile: Mitosis
// strips the `.js`, and lit's package exports require it, which breaks the build.
export { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * Map a Storybook arg key to the DOM event name used when the value is an event
 * handler. `onClick` -> `click`, `onValueChange` -> `valuechange`. Stencil emits
 * lowercase custom-event names, so the whole key is lowercased.
 */
const toEventName = (key: string): string =>
	key.replace(/^on/, '').toLowerCase();

/**
 * Lit element directive that applies Storybook args onto a custom element.
 *
 * Used as an element binding in the generated story templates
 * (`<db-accordion ${spreadArgs(args)}>`), it keeps `args` and `children`
 * separate (children are injected by the render via `unsafeHTML`). Each arg is
 * set as a DOM **property** rather than an attribute, so camelCase props such as
 * `showIcon` / `headlinePlain` reach the component (custom elements do not
 * reflect camelCase attributes to properties). `on*` function args are attached
 * as event listeners.
 */
class SpreadArgsDirective extends Directive {
	private appliedEvents = new Map<string, EventListener>();

	constructor(partInfo: PartInfo) {
		super(partInfo);
		if (partInfo.type !== PartType.ELEMENT) {
			throw new Error(
				'spreadArgs can only be used as an element binding, e.g. `<db-x ${spreadArgs(args)}>`.'
			);
		}
	}

	render(_args: Record<string, unknown>): typeof noChange {
		return noChange;
	}

	override update(
		part: ElementPart,
		[args]: [Record<string, unknown>]
	): typeof noChange {
		const element = part.element as HTMLElement & Record<string, unknown>;

		for (const [key, value] of Object.entries(args ?? {})) {
			if (value === undefined || value === null) {
				continue;
			}

			if (key.startsWith('on') && typeof value === 'function') {
				const eventName = toEventName(key);
				const previous = this.appliedEvents.get(eventName);
				if (previous) {
					element.removeEventListener(eventName, previous);
				}
				element.addEventListener(eventName, value as EventListener);
				this.appliedEvents.set(eventName, value as EventListener);
				continue;
			}

			// Set as a property so camelCase names and non-string values work.
			element[key] = value;
		}

		return noChange;
	}
}

/**
 * Element directive that applies Storybook args onto the custom element it is
 * bound to. See {@link SpreadArgsDirective}.
 */
export const spreadArgs = directive(SpreadArgsDirective);
