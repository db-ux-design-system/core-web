import { onMount, Show, Slot, useState } from '@builder.io/mitosis';

interface Props {
	title?: string;
	children?: any;
}

export default function ContainerWrapperShowcase(props: Props) {
	const [hidden, setHidden] = useState<boolean>(false);

	onMount(() => {
		const hash = window.location.hash;
		const queryString = hash.includes('?') ? hash.split('?')[1] : '';
		const params = new URLSearchParams(
			window.location.search || queryString
		);

		setHidden(Boolean(params.get('page')));
	});

	return (
		<div className="default-container">
			<Show when={!hidden}>
				<div className="component-header">
					<h1>{props.title}</h1>
				</div>
			</Show>
			<Slot />
		</div>
	);
}
