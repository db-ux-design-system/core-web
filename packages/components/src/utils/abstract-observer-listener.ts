import { uuid } from './index';

/**
 * Generic base class for singleton observer listeners.
 * Manages a shared observer instance, a registry of element–callback pairs,
 * and refcounted observe/unobserve lifecycle.
 *
 * Subclasses own their static state (callbacks, observer, instance) and
 * expose it via the abstract accessor methods below.
 *
 * @template TObserver - The observer type (ResizeObserver, IntersectionObserver, etc.)
 * @template TEntry - The entry type passed to the callback (ResizeObserverEntry, IntersectionObserverEntry, etc.)
 */
export abstract class AbstractObserverListener<TObserver, TEntry> {
	/**
	 * Subclasses must return a reference to their own static callbacks store.
	 */
	protected abstract getCallbacks(): Record<
		string,
		{ element: Element; callback: (entry: TEntry) => void }
	>;

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
		const callbacks = this.getCallbacks();
		callbacks[id] = { element, callback };
		this.observeElement(observer, element);
		return id;
	}

	public unobserve(id: string): void {
		const callbacks = this.getCallbacks();
		const entry = callbacks[id];
		const observer = this.getObserver();

		if (entry && observer) {
			// Only unobserve the element if no other callback watches it
			const hasOtherWatchers = Object.entries(callbacks).some(
				([key, val]) => key !== id && val.element === entry.element
			);

			if (!hasOtherWatchers) {
				this.unobserveElement(observer, entry.element);
			}

			delete callbacks[id];
		}
	}
}
