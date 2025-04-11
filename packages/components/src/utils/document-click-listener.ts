import { uuid } from './index';

export class DocumentClickListener {
	private static callbacks: Record<string, (event: any) => void> = {};
	private static _instance: DocumentClickListener | null = null;

	private static runCallbacks(event: any) {
		Object.values(DocumentClickListener.callbacks).forEach((callback) => {
			if (typeof callback === 'function') {
				callback(event);
			}
		});
	}

	constructor() {
		if (DocumentClickListener._instance) {
			return DocumentClickListener._instance;
		}
		DocumentClickListener._instance = this;
		if (document) {
			document.addEventListener('click', (event) =>
				DocumentClickListener.runCallbacks(event)
			);
		}
	}

	public addCallback(callback: (event: any) => void) {
		const callbackID = uuid();
		DocumentClickListener.callbacks[callbackID] = callback;
		return callbackID;
	}

	public removeCallback(id: string) {
		delete DocumentClickListener.callbacks[id];
	}
}
