import { uuid } from './index';

type ResizeCallback = (entry: ResizeObserverEntry) => void;

export class ResizeObserverListener {
	private static _instance: ResizeObserverListener | null = null;
	private static callbacks: Record<
		string,
		{ element: Element; callback: ResizeCallback }
	> = {};
	private static observer: ResizeObserver | null = null;

	constructor() {
		if (ResizeObserverListener._instance) {
			return ResizeObserverListener._instance;
		}

		ResizeObserverListener._instance = this;

		if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
			ResizeObserverListener.observer = new ResizeObserver((entries) => {
				for (const entry of entries) {
					for (const { element, callback } of Object.values(
						ResizeObserverListener.callbacks
					)) {
						if (entry.target === element) {
							callback(entry);
						}
					}
				}
			});
		}
	}

	public observe(
		element: Element,
		callback: ResizeCallback
	): string | undefined {
		if (!ResizeObserverListener.observer) return undefined;
		const id = uuid();
		ResizeObserverListener.callbacks[id] = { element, callback };
		ResizeObserverListener.observer.observe(element);
		return id;
	}

	public unobserve(id: string): void {
		const entry = ResizeObserverListener.callbacks[id];
		if (entry && ResizeObserverListener.observer) {
			// Only unobserve the element if no other callback watches it
			const hasOtherWatchers = Object.entries(
				ResizeObserverListener.callbacks
			).some(([key, val]) => key !== id && val.element === entry.element);

			if (!hasOtherWatchers) {
				ResizeObserverListener.observer.unobserve(entry.element);
			}

			delete ResizeObserverListener.callbacks[id];
		}
	}
}
