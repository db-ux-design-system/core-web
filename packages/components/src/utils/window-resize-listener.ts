import { uuid } from './index';

export class WindowResizeListener {
	private static callbacks: Record<string, (event: UIEvent) => void> = {};
	private static _instance: WindowResizeListener | null = null;

	private static runCallbacks(event: UIEvent) {
		for (const callback of Object.values(WindowResizeListener.callbacks)) {
			if (typeof callback === 'function') {
				callback(event);
			}
		}
	}

	constructor() {
		if (WindowResizeListener._instance) {
			return WindowResizeListener._instance;
		}
		WindowResizeListener._instance = this;
		if (typeof window !== 'undefined' && window.addEventListener) {
			window.addEventListener('resize', (event) =>
				WindowResizeListener.runCallbacks(event)
			);
		}
	}

	public addCallback(callback: (event: UIEvent) => void) {
		const callbackID = uuid();
		WindowResizeListener.callbacks[callbackID] = callback;
		return callbackID;
	}

	public removeCallback(id: string) {
		delete WindowResizeListener.callbacks[id];
	}
}
