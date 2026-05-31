import {
	Fragment,
	onMount,
	onUnMount,
	Show,
	Slot,
	useState,
	useTarget
} from '@builder.io/mitosis';
import DBCard from '../../components/card/card.lite';
import DBLink from '../../components/link/link.lite';
import { DB_UX_LOCAL_STORAGE_FRAMEWORK } from '../constants';
import { getShowCodeHref } from './show-code-link';

type Props = {
	role?: string;
	label?: string;
	children?: any;
};

export default function CardWrapperShowcase(props: Props) {
	const [href, setHref] = useState<string | undefined>(undefined);

	function updateHref(frameworkOverride?: string) {
		useTarget({
			react: () => {
				// Keep the link in sync while URL updates are still in flight.
				const frameworkFromUrl = new URLSearchParams(
					window.location.search
				).get('framework');
				const frameworkFromStorage = localStorage.getItem(
					DB_UX_LOCAL_STORAGE_FRAMEWORK
				);
				const framework =
					frameworkOverride ??
					frameworkFromUrl ??
					frameworkFromStorage;
				setHref(getShowCodeHref(window.location.href, framework));
			}
		});
	}

	function handleHrefUpdateEvent(event: Event) {
		const framework = (event as CustomEvent<string>).detail;
		updateHref(framework || undefined);
	}

	onMount(() => {
		if (typeof window !== 'undefined' && localStorage) {
			window.addEventListener('popstate', handleHrefUpdateEvent);
			window.addEventListener('hashchange', handleHrefUpdateEvent);
			window.addEventListener(
				'db-ux-framework-change',
				handleHrefUpdateEvent
			);

			updateHref();
		}
	});

	onUnMount(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('popstate', handleHrefUpdateEvent);
			window.removeEventListener('hashchange', handleHrefUpdateEvent);
			window.removeEventListener(
				'db-ux-framework-change',
				handleHrefUpdateEvent
			);
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
