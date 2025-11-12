import { onMount, Show, Slot, useState } from '@builder.io/mitosis';
import DBDivider from '../../components/divider/divider.lite';
import DBLink from '../../components/link/link.lite';

interface Props {
	exampleName?: string;
	children?: any;
}

export default function LinkWrapperShowcase(props: Props) {
	function getPage(): string | undefined {
		return props.exampleName?.replaceAll(' ', '+').toLowerCase();
	}

	function getHref(): string {
		if (typeof window !== 'undefined') {
			const hash = window.location.hash;
			const basePath = hash.includes('?') ? hash.split('?')[0] : hash;
			return `${basePath}?page=${getPage()}`;
		}

		return '';
	}

	const [pageParam, setPageParam] = useState<string | null>(null);

	onMount(() => {
		if (typeof window !== 'undefined') {
			const hash = window.location.hash;
			const queryString = hash.includes('?') ? hash.split('?')[1] : '';
			const params = new URLSearchParams(
				window.location.search || queryString
			);
			setPageParam(params.get('page'));
		}
	});

	return (
		<Show when={pageParam === null || pageParam === getPage()}>
			<div>
				<Show when={pageParam === null}>
					<DBDivider></DBDivider>
					<DBLink
						content="external"
						class="link-headline"
						target="_blank"
						href={getHref()}>
						{props.exampleName}
					</DBLink>
				</Show>
				<Slot />
			</div>
		</Show>
	);
}
