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
 * Whether an arg key is already an HTML attribute name rather than a camelCase
 * property. Dash-prefixed keys (`data-density`, `data-logo`, `aria-label`, ...)
 * exist only as attributes on custom elements and are passed through verbatim.
 */
const isDashKey = (key: string): boolean => key.includes('-');

/**
 * Kebab-case a camelCase prop key to the attribute name the custom element
 * reads (`showIcon` -> `show-icon`, `size` -> `size`), matching the attribute
 * casing the generated story markup uses (`toAttributeName` in
 * `configs/plugins/storybook/node-to-web-component.cjs`). Dash keys are already
 * attribute names and are returned unchanged.
 */
const toAttributeName = (key: string): string =>
	isDashKey(key)
		? key
		: key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

/**
 * Whether a value should be applied as a kebab-cased attribute rather than a DOM
 * property. Serializable primitives (string/number/boolean) go on as attributes
 * so they appear in the DOM and in Storybook's copyable "Show code" markup --
 * none of the Stencil props reflect, so a property assignment would leave the
 * snippet incomplete. Objects, arrays and functions cannot round-trip through an
 * attribute string, so they keep the property path.
 */
const isAttributeValue = (value: unknown): boolean =>
	typeof value === 'string' ||
	typeof value === 'number' ||
	typeof value === 'boolean';

/**
 * Lit element directive that applies Storybook args onto a custom element.
 *
 * Used as an element binding in the generated story templates
 * (`<db-accordion ${spreadArgs(args)}>`), it keeps `args` and `children`
 * separate (children are injected by the render via `unsafeHTML`).
 *
 * Serializable args (string/number/boolean) are set as kebab-cased **attributes**
 * so they land in the DOM and in Storybook's copyable "Show code" markup -- the
 * Stencil props do not reflect, so a property assignment would leave that snippet
 * incomplete. Non-serializable args (objects/arrays) keep the DOM **property**
 * path, since they cannot round-trip through an attribute string. `on*` function
 * args are attached as event listeners.
 */
class SpreadArgsDirective extends Directive {
	private appliedEvents = new Map<string, EventListener>();
	// Keys applied as kebab-cased attributes; the value is the attribute name so
	// a reset can remove the right attribute.
	private appliedAttributes = new Map<string, string>();
	// Keys applied as DOM properties, mapped to the property default captured
	// before the first assignment so a reset can restore it.
	private appliedProps = new Map<string, unknown>();

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
		const resolvedArgs = args ?? {};

		// Reset properties/attributes and event listeners that were applied on a
		// previous update but are now absent (an Args control was reset or
		// cleared). Without this, the stale value lingers on the element instead
		// of returning to its default. Collect first, then mutate, so we do not
		// edit the maps mid-iteration.
		for (const [key, attributeName] of [
			...this.appliedAttributes.entries()
		]) {
			const value = resolvedArgs[key];
			if (value === undefined || value === null) {
				// An attribute-applied key has no property default to restore --
				// remove the attribute so the element returns to its default.
				element.removeAttribute(attributeName);
				this.appliedAttributes.delete(key);
			}
		}

		for (const key of [...this.appliedProps.keys()]) {
			const value = resolvedArgs[key];
			if (value === undefined || value === null) {
				// Restore the property to the default captured before we assigned it.
				element[key] = this.appliedProps.get(key);
				this.appliedProps.delete(key);
			}
		}

		for (const [eventName, previous] of [...this.appliedEvents.entries()]) {
			const matchingKey = Object.keys(resolvedArgs).find(
				(argKey) =>
					argKey.startsWith('on') && toEventName(argKey) === eventName
			);
			const value = matchingKey ? resolvedArgs[matchingKey] : undefined;
			if (typeof value !== 'function') {
				element.removeEventListener(eventName, previous);
				this.appliedEvents.delete(eventName);
			}
		}

		for (const [key, value] of Object.entries(resolvedArgs)) {
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

			// A dash key (data-*, aria-*) or any serializable primitive is set as
			// a kebab-cased attribute, so it is visible in the DOM and in the
			// copyable "Show code" markup (Stencil props do not reflect). A
			// non-serializable value (object/array) keeps the property path,
			// because it cannot round-trip through an attribute string.
			if (isDashKey(key) || isAttributeValue(value)) {
				const attributeName = toAttributeName(key);
				if (!this.appliedAttributes.has(key)) {
					this.appliedAttributes.set(key, attributeName);
				}
				element.setAttribute(attributeName, String(value));
			} else {
				// Track the property default before overwriting so a reset restores it.
				if (!this.appliedProps.has(key)) {
					this.appliedProps.set(key, element[key]);
				}
				element[key] = value;
			}
		}

		return noChange;
	}
}

/**
 * Element directive that applies Storybook args onto the custom element it is
 * bound to. See {@link SpreadArgsDirective}.
 */
export const spreadArgs = directive(SpreadArgsDirective);
