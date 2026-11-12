/* global document, CSS, ResizeObserver, MutationObserver -- runs in the docs iframe */
/* cspell:ignore dbtabs dbtabitem inlines */

/*
 * Deep links to a section of a docs page, e.g.
 * `?path=/docs/components-dbtabs-overview--docs#dbtabitem` (the platform links
 * parts like DBTabItem this way).
 *
 * Storybook scrolls to the heading of the hash once, 200 ms after the page
 * renders. The examples above it render later and push it out of view again.
 * This keeps the heading in place while the page grows, until the reader
 * scrolls or 10 s have passed.
 *
 * sync.ts inlines this file into `preview-head.html` of every Storybook.
 */
(() => {
	let hash = '';
	try {
		// The hash is on the manager URL, the docs page is in its iframe.
		hash = globalThis.parent.location.hash;
	} catch {
		// A cross-origin parent: no deep link.
	}

	const id = decodeURIComponent(hash.slice(1));
	if (!id) {
		return;
	}

	const observers = [];
	const stop = () => {
		for (const observer of observers) {
			observer.disconnect();
		}

		for (const type of ['wheel', 'touchstart', 'keydown', 'pointerdown']) {
			globalThis.removeEventListener(type, stop);
		}
	};

	const align = () => {
		const target = document.querySelector(`#${CSS.escape(id)}`);
		if (target && Math.abs(target.getBoundingClientRect().top) > 1) {
			target.scrollIntoView({ block: 'start' });
		}
	};

	for (const type of ['wheel', 'touchstart', 'keydown', 'pointerdown']) {
		globalThis.addEventListener(type, stop, { passive: true, once: true });
	}

	const start = () => {
		const resizeObserver = new ResizeObserver(align);
		resizeObserver.observe(document.body);
		const mutationObserver = new MutationObserver(align);
		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
		observers.push(resizeObserver, mutationObserver);
		setTimeout(stop, 10_000);
	};

	if (document.body) {
		start();
	} else {
		document.addEventListener('DOMContentLoaded', start, { once: true });
	}
})();
