import { Fragment, onMount, Show, Slot, useStore } from '@builder.io/mitosis';
import DBDivider from '../../components/divider/divider.lite';
import DBLink from '../../components/link/link.lite';
import { delay } from '../../utils';
import { LinkWrapperProps, LinkWrapperState } from './model';

export default function LinkWrapperShowcase(props: LinkWrapperProps) {
	const state = useStore<LinkWrapperState>({
		pageParam: null,
		getPage: (): string | undefined => {
			return props.exampleName?.replaceAll(' ', '+').toLowerCase();
		},
		getHref: (): string => {
			if (typeof window !== 'undefined') {
				const hash = window.location.hash;
				const basePath = hash.includes('?') ? hash.split('?')[0] : hash;
				return `${basePath}?page=${state.getPage()}`;
			}

			return '';
		}
	});

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

				const rawPage = params.get('page');

				state.pageParam = rawPage
					? rawPage.replaceAll(' ', '+').toLowerCase()
					: null;
			}, 1);
		}
	});

	return (
		<Fragment>
			<Show
				when={
					state.pageParam === null ||
					state.pageParam === state.getPage()
				}>
				<div>
					<Show when={state.pageParam === null}>
						<DBDivider></DBDivider>
						<DBLink
							content="external"
							class="link-headline"
							target="_blank"
							href={state.getHref()}>
							{props.exampleName}
						</DBLink>
					</Show>
					<Slot />
				</div>
			</Show>
		</Fragment>
	);
}
