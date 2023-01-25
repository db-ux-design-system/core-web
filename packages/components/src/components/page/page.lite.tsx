import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBPageProps, DBPageState } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBPage(props: DBPageProps) {
	const state = useStore<DBPageState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			className={
				'db-page' +
				(props.className ? ' ' + props.className : '') +
				(props.type === 'fixedHeaderFooter'
					? ' fixed-header-footer'
					: '')
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Slot name="header" />
			<main className="db-main">{props.children}</main>
			<Slot name="footer" />
		</div>
	);
}
