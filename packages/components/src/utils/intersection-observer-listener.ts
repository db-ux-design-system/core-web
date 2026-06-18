import { uuid } from './index';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

export class IntersectionObserverListener {
	private static _instance: IntersectionObserverListener | null = null;
	private static callbacks: Record<
		string,
		{ element: Element; callback: IntersectionCallback }
	> = {};
	private static observer: IntersectionObserver | null = null;

	constructor() {
		if (IntersectionObserverListener._instance) {
			return IntersectionObserverListener._instance;
		}

		IntersectionObserverListener._instance = this;

		if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
			IntersectionObserverListener.observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						for (const { element, callback } of Object.values(
							IntersectionObserverListener.callbacks
						)) {
							if (entry.target === element) {
								callback(entry);
							}
						}
					}
				}
			);
		}
	}

	public observe(
		element: Element,
		callback: IntersectionCallback
	): string | undefined {
		if (!IntersectionObserverListener.observer) return undefined;
		const id = uuid();
		IntersectionObserverListener.callbacks[id] = { element, callback };
		IntersectionObserverListener.observer.observe(element);
		return id;
	}

	public unobserve(id: string): void {
		const entry = IntersectionObserverListener.callbacks[id];
		if (entry && IntersectionObserverListener.observer) {
			// Only unobserve the element if no other callback watches it
			const hasOtherWatchers = Object.entries(
				IntersectionObserverListener.callbacks
			).some(([key, val]) => key !== id && val.element === entry.element);

			if (!hasOtherWatchers) {
				IntersectionObserverListener.observer.unobserve(entry.element);
			}

			delete IntersectionObserverListener.callbacks[id];
		}
	}
}
