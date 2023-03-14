import { For, onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBCodeDocsProps, DBCodeDocsState } from './model';
import { DBCard } from '../card';
import { DBButton } from '../button';
import { DBInfotext } from '../infotext';
import { uuid } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBCodeDocs(props: DBCodeDocsProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBCodeDocsState>({
		open: false,
		toggleCode: () => {
			state.open = !state.open;
		},
		copyCode: (code: string) => {
			navigator.clipboard.writeText(code);
			// TODO: Trigger Snackbar
		},
		getShowButtonLabel: () => {
			return state.open
				? props.hideCodeLabel ?? 'Hide Code'
				: props.showCodeLabel ?? 'Show Code';
		},
		getSnippetId: () => {
			return `snippet-${uuid()}`;
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<DBCard
			ref={component}
			class={
				'db-code-docs' + (props.className ? ' ' + props.className : '')
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
			<details class="code-details" onToggle={() => state.toggleCode()}>
				<summary
					class="db-button code-button"
					data-size="small"
					data-variant="primary">
					{state.getShowButtonLabel()}
				</summary>
				<div class="code">
					<Show
						when={
							!props.codeSnippets ||
							props.codeSnippets.length === 0
						}>
						<DBInfotext class="no-code" variant="informational">
							{props.noCodeLabel ?? 'No Code available'}
						</DBInfotext>
					</Show>
					<Show
						when={
							props.codeSnippets && props.codeSnippets.length > 0
						}>
						<For each={props.codeSnippets}>
							{(snippet: string) => (
								<pre key={state.getSnippetId()}>
									<code class="language-typescript">
										{snippet}
									</code>
									<DBButton
										class="copy-button"
										size="small"
										variant="outline"
										onClick={() => state.copyCode(snippet)}>
										{props.copyLabel ?? 'Copy Code'}
									</DBButton>
								</pre>
							)}
						</For>
					</Show>
				</div>
			</details>
		</DBCard>
	);
}
