import { AbstractObserverListener } from './abstract-observer-listener';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

export class IntersectionObserverListener extends AbstractObserverListener<
	IntersectionObserver,
	IntersectionObserverEntry
> {
	private static _instance: IntersectionObserverListener | null = null;
	private static callbacksByElement: Map<
		Element,
		Map<string, IntersectionCallback>
	> = new Map();
	private static idToElement: Map<string, Element> = new Map();
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
						this.dispatchEntry(entry.target, entry);
					}
				}
			);
		}
	}

	protected getCallbacksByElement(): Map<
		Element,
		Map<string, IntersectionCallback>
	> {
		return IntersectionObserverListener.callbacksByElement;
	}

	protected getIdToElement(): Map<string, Element> {
		return IntersectionObserverListener.idToElement;
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
