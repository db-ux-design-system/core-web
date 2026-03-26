import { describe, expect, it } from 'vitest';

import { getShowCodeHref } from '../shared/showcase/show-code-link';

describe('getShowCodeHref', () => {
	it('returns localhost react storybook url on localhost', () => {
		expect(
			getShowCodeHref(
				'http://localhost:3000/core-web/sub/components/action/button/overview',
				'react'
			)
		).toBe('http://localhost:6005/?path=/docs/components-dbbutton');
	});

	it('returns localhost angular storybook url on localhost', () => {
		expect(
			getShowCodeHref(
				'http://localhost:3000/core-web/sub/components/action/button/overview',
				'angular'
			)
		).toBe('http://localhost:6006/?path=/docs/components-dbbutton');
	});

	it('returns localhost vue storybook url on localhost', () => {
		expect(
			getShowCodeHref(
				'http://127.0.0.1:3000/core-web/sub/components/action/button/overview',
				'vue'
			)
		).toBe('http://127.0.0.1:6007/?path=/docs/components-dbbutton');
	});

	it('returns localhost html storybook url on localhost', () => {
		expect(
			getShowCodeHref(
				'http://localhost:3000/core-web/sub/components/action/button/overview',
				'html'
			)
		).toBe('http://localhost:6001/?path=/docs/components-dbbutton');
	});

	it('returns localhost url for direct docs route', () => {
		expect(
			getShowCodeHref(
				'http://localhost:3000/core-web/components/button/docs',
				'react'
			)
		).toBe('http://localhost:6005/?path=/docs/components-dbbutton');
	});

	it('returns production url for non-localhost', () => {
		expect(
			getShowCodeHref(
				'https://db-ui.com/core-web/sub/components/action/button/overview',
				'react'
			)
		).toBe(
			'https://db-ui.com/core-web/sub/react-storybook?path=/docs/components-dbbutton'
		);
	});

	it('returns undefined if url has no components segment', () => {
		expect(
			getShowCodeHref('https://db-ui.com/core-web/sub/', 'react')
		).toBe(undefined);
	});

	it('returns undefined for components root route', () => {
		expect(
			getShowCodeHref('https://db-ui.com/core-web/components', 'react')
		).toBe(undefined);
	});
});
