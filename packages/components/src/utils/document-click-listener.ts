import { AbstractDocumentListener } from './abstract-document-listener';

export class DocumentClickListener extends AbstractDocumentListener {
	private static callbacks: Record<string, (event: any) => void> = {};
	private static _instance: DocumentClickListener | null = null;

	private static runCallbacks(event: any) {
		for (const callback of Object.values(DocumentClickListener.callbacks)) {
			if (typeof callback === 'function') {
				callback(event);
			}
		}
	}

	constructor() {
		super();

		if (DocumentClickListener._instance) {
			return DocumentClickListener._instance;
		}
		DocumentClickListener._instance = this;
		if (self.document) {
			self.document.addEventListener('click', (event) =>
				DocumentClickListener.runCallbacks(event)
			);
		}
	}

	protected getCallbacks(): Record<string, (event: any) => void> {
		return DocumentClickListener.callbacks;
	}
}
