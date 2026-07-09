import { uuid } from './index';

/**
 * Generic base class for singleton observer listeners.
 * Uses a Map<Element, Map<id, callback>> for O(1) element lookup in the
 * observer handler — avoids quadratic scanning when many elements are observed.
 *
 * Subclasses own their static state (callbacksByElement, idToElement, observer,
 * instance) and expose it via the abstract accessor methods below.
 *
 * @template TObserver - The observer type (ResizeObserver, IntersectionObserver, etc.)
 * @template TEntry - The entry type passed to the callback
 */
export abstract class AbstractObserverListener<TObserver, TEntry> {
	/**
	 * Returns a Map keyed by Element, where each value is a Map of id → callback.
	 */
	protected abstract getCallbacksByElement(): Map<
		Element,
		Map<string, (entry: TEntry) => void>
	>;

	/**
	 * Returns a Map of id → Element for reverse lookup during unobserve.
	 */
	protected abstract getIdToElement(): Map<string, Element>;

	/**
	 * Subclasses must return their own static observer instance (or null).
	 */
	protected abstract getObserver(): TObserver | null;

	/**
	 * Start observing an element via the underlying observer API.
	 */
	protected abstract observeElement(
		observer: TObserver,
		element: Element
	): void;

	/**
	 * Stop observing an element via the underlying observer API.
	 */
	protected abstract unobserveElement(
		observer: TObserver,
		element: Element
	): void;

	public observe(
		element: Element,
		callback: (entry: TEntry) => void
	): string | undefined {
		const observer = this.getObserver();
		if (!observer) return undefined;

		const id = uuid();
		const callbacksByElement = this.getCallbacksByElement();
		const idToElement = this.getIdToElement();

		let elementCallbacks = callbacksByElement.get(element);
		if (!elementCallbacks) {
			elementCallbacks = new Map();
			callbacksByElement.set(element, elementCallbacks);
			// Only call observe on the native observer if this is a new element
			this.observeElement(observer, element);
		}
		elementCallbacks.set(id, callback);
		idToElement.set(id, element);

		return id;
	}

	public unobserve(id: string): void {
		const callbacksByElement = this.getCallbacksByElement();
		const idToElement = this.getIdToElement();
		const observer = this.getObserver();

		const element = idToElement.get(id);
		if (!element || !observer) return;

		const elementCallbacks = callbacksByElement.get(element);
		if (elementCallbacks) {
			elementCallbacks.delete(id);

			// If no more callbacks for this element, unobserve it
			if (elementCallbacks.size === 0) {
				callbacksByElement.delete(element);
				this.unobserveElement(observer, element);
			}
		}

		idToElement.delete(id);
	}

	/**
	 * Called by subclass observer handlers to dispatch callbacks for an entry.
	 */
	protected dispatchEntry(element: Element, entry: TEntry): void {
		const elementCallbacks = this.getCallbacksByElement().get(element);
		if (elementCallbacks) {
			elementCallbacks.forEach((callback) => {
				callback(entry);
			});
		}
	}
}
