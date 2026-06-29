import { AbstractObserverListener } from './abstract-observer-listener';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

export class IntersectionObserverListener extends AbstractObserverListener<
	IntersectionObserver,
	IntersectionObserverEntry
> {
	private static _instance: IntersectionObserverListener | null = null;
	private static callbacks: Record<
		string,
		{ element: Element; callback: IntersectionCallback }
	> = {};
	private static observer: IntersectionObserver | null = null;

	constructor() {
		super();

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

	protected getCallbacks(): Record<
		string,
		{ element: Element; callback: IntersectionCallback }
	> {
		return IntersectionObserverListener.callbacks;
	}

	protected getObserver(): IntersectionObserver | null {
		return IntersectionObserverListener.observer;
	}

	protected observeElement(
		observer: IntersectionObserver,
		element: Element
	): void {
		observer.observe(element);
	}

	protected unobserveElement(
		observer: IntersectionObserver,
		element: Element
	): void {
		observer.unobserve(element);
	}
}
