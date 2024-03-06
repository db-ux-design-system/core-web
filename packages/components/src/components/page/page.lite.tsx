import {
	onMount,
	onUnMount,
	onUpdate,
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
		fontsLoaded: false,
		devicePixelRatio: 0,
		updatePixelRatio: () => {
			if (window.devicePixelRatio % 0.5 !== 0) {
				state.devicePixelRatio = 1 / window.devicePixelRatio;
			} else {
				state.devicePixelRatio = 0;
			}
		}
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

		matchMedia(
			`(resolution: ${window.devicePixelRatio}dppx)`
		).addEventListener('change', state.updatePixelRatio);
		state.updatePixelRatio();
	});

	onUpdate(() => {
		if (ref) {
			ref.style.setProperty(
				'--device-pixel-ratio',
				state.devicePixelRatio.toString()
			);
		}
	}, [ref, state.devicePixelRatio]);

	onUnMount(() => {
		matchMedia(
			`(resolution: ${window.devicePixelRatio}dppx)`
		).removeEventListener('change', state.updatePixelRatio);
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
