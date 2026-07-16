import { uuid } from './index';

/**
 * Generic base class for singleton document event listeners.
 * Manages a shared set of callbacks dispatched when a document-level
 * event fires.
 *
 * Subclasses own their static state (callbacks, instance) and expose
 * it via the abstract accessor methods below.
 *
 * @template TEvent - The event type passed to callbacks (Event, MouseEvent, etc.)
 */
export abstract class AbstractDocumentListener<TEvent = any> {
	/**
	 * Subclasses must return a reference to their own static callbacks store.
	 */
	protected abstract getCallbacks(): Record<string, (event: TEvent) => void>;

	public addCallback(callback: (event: TEvent) => void): string {
		const id = uuid();
		const callbacks = this.getCallbacks();
		callbacks[id] = callback;
		return id;
	}

	public removeCallback(id: string): void {
		const callbacks = this.getCallbacks();
		delete callbacks[id];
	}
}
