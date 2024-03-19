import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBPageProps, DBPageState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBPage(props: DBPageProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBPageState>({
		_id: DEFAULT_ID,
		fontsLoaded: false
	});

	onMount(() => {
		state._id = props.id || 'page-' + uuid();
		state.fontsLoaded = !props.fadeIn;
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (document && props.fadeIn) {
			document.fonts.ready.then(() => {
				state.fontsLoaded = true;
			});
		} else {
			state.fontsLoaded = true;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={state._id}
			class={cls('db-page', props.className, {
				'fixed-header-footer': props.type === 'fixedHeaderFooter'
			})}
			data-fade-in={props.fadeIn}
			data-fonts-loaded={state.fontsLoaded}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Slot name="header" />
			<main class="db-main">{props.children}</main>
			<Slot name="footer" />
		</div>
	);
}
