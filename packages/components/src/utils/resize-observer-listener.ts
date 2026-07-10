import { AbstractObserverListener } from './abstract-observer-listener';

type ResizeCallback = (entry: ResizeObserverEntry) => void;

export class ResizeObserverListener extends AbstractObserverListener<
	ResizeObserver,
	ResizeObserverEntry
> {
	private static _instance: ResizeObserverListener | null = null;
	private static callbacksByElement: Map<
		Element,
		Map<string, ResizeCallback>
	> = new Map();
	private static idToElement: Map<string, Element> = new Map();
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
					this.dispatchEntry(entry.target, entry);
				}
			});
		}
	}

	protected getCallbacksByElement(): Map<
		Element,
		Map<string, ResizeCallback>
	> {
		return ResizeObserverListener.callbacksByElement;
	}

	protected getIdToElement(): Map<string, Element> {
		return ResizeObserverListener.idToElement;
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
