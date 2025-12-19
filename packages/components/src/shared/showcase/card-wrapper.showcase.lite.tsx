import { Fragment, onMount, Show, Slot, useState } from '@builder.io/mitosis';
import DBCard from '../../components/card/card.lite';
import DBLink from '../../components/link/link.lite';

type Props = {
	role?: string;
	label?: string;
	children?: any;
};

export default function CardWrapperShowcase(props: Props) {
	const [href, setHref] = useState<string | undefined>(undefined);

	function updateHref() {
		const framework = localStorage.getItem('db-ux-framework') || 'react';
		const currentUrl = window.location.href;
		const componentsIndex = currentUrl.indexOf('components');
		if (componentsIndex !== -1) {
			const baseUrl = currentUrl.substring(0, componentsIndex);
			setHref(`${baseUrl}${framework}-storybook`);
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined' && localStorage) {
			updateHref();
		}
	});

	return (
		<Fragment>
			<DBCard className="variants-card db-code-docs">
				<div
					role={props.role}
					aria-label={props.role ? props.label : undefined}
					class="variants-list">
					<Slot />
				</div>
			</DBCard>
			<Show when={href}>
				<DBLink
					size="small"
					content="external"
					className="show-code-link"
					target="_blank"
					href={href}
					referrerpolicy="no-referrer">
					Show Code
				</DBLink>
			</Show>
		</Fragment>
	);
}
