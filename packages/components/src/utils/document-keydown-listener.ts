import { AbstractDocumentListener } from './abstract-document-listener';

export class DocumentKeydownListener extends AbstractDocumentListener {
	private static callbacks: Record<string, (event: any) => void> = {};
	private static _instance: DocumentKeydownListener | null = null;

	private static runCallbacks(event: any) {
		for (const callback of Object.values(
			DocumentKeydownListener.callbacks
		)) {
			if (typeof callback === 'function') {
				callback(event);
			}
		}
	}

	constructor() {
		super();

		if (DocumentKeydownListener._instance) {
			return DocumentKeydownListener._instance;
		}
		DocumentKeydownListener._instance = this;
		if (self.document) {
			self.document.addEventListener('keydown', (event) =>
				DocumentKeydownListener.runCallbacks(event)
			);
		}
	}

	protected getCallbacks(): Record<string, (event: any) => void> {
		return DocumentKeydownListener.callbacks;
	}
}
