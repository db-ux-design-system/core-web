import {
	onInit,
	onMount,
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
		fontsLoaded: false
	});

	onInit(() => {
		if (
			document &&
			(props.documentOverflow === 'hidden' ||
				(props.variant === 'fixed' &&
					props.documentOverflow !== 'auto'))
		) {
			// We need to set this to `html` element that the flex-box solution works
			// See https://stackoverflow.com/a/43710216 - Approach 1 - flexbox
			document.documentElement.style.blockSize = '100%';
			document.documentElement.style.overflow = 'hidden';
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
	});

	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('db-page', props.className)}
			data-variant={props.variant}
			data-fade-in={props.fadeIn}
			data-fonts-loaded={state.fontsLoaded}>
			<Slot name="header" />
			<main class="db-main">{props.children}</main>
			<Slot name="footer" />
		</div>
	);
}
