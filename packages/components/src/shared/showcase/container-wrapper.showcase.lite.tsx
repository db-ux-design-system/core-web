import { onMount, Show, Slot, useState } from '@builder.io/mitosis';
import { delay } from '../../utils';

type Props = {
	title?: string;

	children?: any;
};

export default function ContainerWrapperShowcase(props: Props) {
	const [hidden, setHidden] = useState<boolean>(false);

	onMount(() => {
		if (typeof window !== 'undefined') {
			void delay(() => {
				const hash = window.location.hash;
				const queryString = hash.includes('?')
					? hash.split('?')[1]
					: '';
				const params = new URLSearchParams(
					window.location.search || queryString
				);

				setHidden(Boolean(params.get('page')));
			}, 1);
		}
	});

	return (
		<div className="default-container">
			<Show when={!hidden}>
				<header class="component-header">
					<h1>{props.title}</h1>
				</header>
			</Show>
			<Slot />
		</div>
	);
}
