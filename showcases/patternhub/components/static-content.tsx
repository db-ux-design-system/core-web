import { createElement, useRef, useState, useEffect } from 'react';

const useStaticContent = () => {
	const ref = useRef(null);
	const [render, setRender] = useState(typeof window === 'undefined');

	useEffect(() => {
		// Check if the innerHTML is empty as client side navigation
		// Need to render the component without server-side backup
		const isEmpty = (ref?.current as any)?.innerHTML === '';
		if (isEmpty) {
			setRender(true);
		}
	}, []);

	return [render, ref];
};

const StaticContent = ({ children, element = 'div', ...props }: any) => {
	const [render, ref] = useStaticContent();

	// If we're in the server or a spa navigation, just render it
	if (render) {
		return createElement(element, {
			...props,
			children
		});
	}

	// Avoid re-render on the client
	return createElement(element, {
		...props,
		ref,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: '' }
	});
};

export default StaticContent;
