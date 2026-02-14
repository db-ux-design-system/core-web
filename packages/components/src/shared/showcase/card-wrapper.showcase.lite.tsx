import {
	Fragment,
	onMount,
	Show,
	Slot,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import DBCard from '../../components/card/card.lite';
import DBLink from '../../components/link/link.lite';
import { DB_UX_LOCAL_STORAGE_FRAMEWORK } from '../constants';
import { CardWrapperProps, CardWrapperState } from './model';

export default function CardWrapperShowcase(props: CardWrapperProps) {
	const state = useStore<CardWrapperState>({
		href: undefined,
		updateHref: () => {
			useTarget({
				react: () => {
					// Only for patternhub
					const framework =
						localStorage.getItem(DB_UX_LOCAL_STORAGE_FRAMEWORK) ||
						'react';
					const currentUrl = window.location.href;
					const componentsIndex = currentUrl.indexOf('components');
					if (componentsIndex !== -1) {
						const baseUrl = currentUrl.substring(
							0,
							componentsIndex
						);
						state.href = `${baseUrl}${framework}-storybook`;
					}
				}
			});
		}
	});

	onMount(() => {
		if (typeof window !== 'undefined' && localStorage) {
			state.updateHref();
		}
	});

	return (
		<Fragment>
			<DBCard class="variants-card db-code-docs">
				<div
					role={props.role}
					aria-label={props.role ? props.label : undefined}
					class="variants-list">
					<Slot />
				</div>
			</DBCard>
			<Show when={state.href}>
				<DBLink
					size="small"
					content="external"
					className="show-code-link"
					target="_blank"
					href={state.href}
					referrerpolicy="no-referrer">
					Show Code
				</DBLink>
			</Show>
		</Fragment>
	);
}
