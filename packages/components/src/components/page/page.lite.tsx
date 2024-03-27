import {
	onMount,
	onUnMount,
	onUpdate,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBPageProps, DBPageState } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBPage(props: DBPageProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBPageState>({
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
		state.fontsLoaded = !props.fadeIn;

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
			id={props.id}
			class={cls('db-page', props.className, {
				'fixed-header-footer': props.type === 'fixedHeaderFooter'
			})}
			data-fade-in={props.fadeIn}
			data-fonts-loaded={state.fontsLoaded}>
			<Slot name="header" />
			<main class="db-main">{props.children}</main>
			<Slot name="footer" />
		</div>
	);
}
