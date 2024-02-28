import { createElement, useRef, useState, useEffect } from 'react';

const useStaticContent = () => {
	const reference = useRef(null);
	const [render, setRender] = useState(typeof window === 'undefined');

	useEffect(() => {
		// Check if the innerHTML is empty as client side navigation
		// Need to render the component without server-side backup
		const isEmpty = (reference?.current as any)?.innerHTML === '';
		if (isEmpty) {
			setRender(true);
		}
	}, []);

	return [render, reference];
};

const StaticContent = ({ children, element = 'div', ...properties }: any) => {
	const [render, reference] = useStaticContent();

	// If we're in the server or a spa navigation, just render it
	if (render) {
		return createElement(element, {
			...properties,
			children
		});
	}

	// Avoid re-render on the client
	return createElement(element, {
		...properties,
		ref: reference,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: '' }
	});
};

export default StaticContent;
