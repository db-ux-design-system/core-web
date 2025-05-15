import {
	onMount,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBShellProps, DBShellState } from './model';
import { cls, getBooleanAsString } from '../../utils';

useMetadata({});
useDefaultProps<DBShellProps>({});

export default function DBShell(props: DBShellProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBShellState>({
		fontsLoaded: false
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
			ref={_ref}
			id={props.id}
			class={cls('db-shell', props.className)}
			data-variant={props.variant}
			data-fade-in={getBooleanAsString(props.fadeIn)}
			data-fonts-loaded={getBooleanAsString(state.fontsLoaded)}>
			<Slot name="desktopContentPanel" />
			<Slot name="mobileContentPanel" />
			<main class={cls('db-main', props.mainClass)}>
				{props.children}
			</main>
		</div>
	);
}
