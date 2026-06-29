import { AbstractObserverListener } from './abstract-observer-listener';

type ResizeCallback = (entry: ResizeObserverEntry) => void;

export class ResizeObserverListener extends AbstractObserverListener<
	ResizeObserver,
	ResizeObserverEntry
> {
	private static _instance: ResizeObserverListener | null = null;
	private static callbacks: Record<
		string,
		{ element: Element; callback: ResizeCallback }
	> = {};
	private static observer: ResizeObserver | null = null;

	constructor() {
		super();

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

	protected getCallbacks(): Record<
		string,
		{ element: Element; callback: ResizeCallback }
	> {
		return ResizeObserverListener.callbacks;
	}

	protected getObserver(): ResizeObserver | null {
		return ResizeObserverListener.observer;
	}

	protected observeElement(observer: ResizeObserver, element: Element): void {
		observer.observe(element);
	}

	protected unobserveElement(
		observer: ResizeObserver,
		element: Element
	): void {
		observer.unobserve(element);
	}
}
