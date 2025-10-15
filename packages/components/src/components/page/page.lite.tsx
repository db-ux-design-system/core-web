import {
	onInit,
	onMount,
	onUnMount,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBPageProps, DBPageState } from './model';

useMetadata({});
useDefaultProps<DBPageProps>({});

export default function DBPage(props: DBPageProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBPageState>({
		fontsLoaded: false
	});

	onInit(() => {
		if (
			typeof window !== 'undefined' &&
			document &&
			(props.documentOverflow === 'hidden' ||
				(props.variant === 'fixed' &&
					props.documentOverflow !== 'auto'))
		) {
			// We need to set this to `html` element that the flex-box solution works
			// See https://stackoverflow.com/a/43710216 - Approach 1 - flexbox
			document.documentElement.classList.add('db-page-document');
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

	onUnMount(() => {
		if (
			typeof window !== 'undefined' &&
			document.documentElement.classList.contains('db-page-document')
		) {
			// remove document styles set by this
			document.documentElement.classList.remove('db-page-document');
		}
	});

	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-page', props.className)}
			data-variant={props.variant}
			data-fade-in={getBooleanAsString(props.fadeIn)}
			data-fonts-loaded={getBooleanAsString(state.fontsLoaded)}>
			<Slot name="header" />
			<main class={cls('db-main', props.mainClass)}>
				{props.children}
			</main>
			<Slot name="footer" />
		</div>
	);
}
