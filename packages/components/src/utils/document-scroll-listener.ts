import { uuid } from './index';

export class DocumentScrollListener {
	private static callbacks: Record<string, (event: any) => void> = {};
	private static _instance: DocumentScrollListener | null = null;

	private static runCallbacks(event: any) {
		for (const callback of Object.values(
			DocumentScrollListener.callbacks
		)) {
			if (typeof callback === 'function') {
				callback(event);
			}
		}
	}

	private ticking = false;

	constructor() {
		if (DocumentScrollListener._instance) {
			return DocumentScrollListener._instance;
		}
		DocumentScrollListener._instance = this;
		if (self.document) {
			self.document.addEventListener(
				'scroll',
				(event) => {
					if (!this.ticking) {
						window.requestAnimationFrame(() => {
							DocumentScrollListener.runCallbacks(event);
							this.ticking = false;
						});

						this.ticking = true;
					}
				},
				true
			);
		}
	}

	public addCallback(callback: (event: any) => void) {
		const callbackID = uuid();
		DocumentScrollListener.callbacks[callbackID] = callback;
		return callbackID;
	}

	public removeCallback(id: string) {
		delete DocumentScrollListener.callbacks[id];
	}
}
