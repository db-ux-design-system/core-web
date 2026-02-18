import { Fragment, onMount, Show, Slot, useStore } from '@builder.io/mitosis';
import DBLink from '../../components/link/link.lite';
import { delay } from '../../utils';
import { ContainerWrapperProps, ContainerWrapperState } from './model';

export default function ContainerWrapperShowcase(props: ContainerWrapperProps) {
	const state = useStore<ContainerWrapperState>({
		hidden: false,
		getSourceFilePath: (): string | undefined => {
			if (!props.title) return;

			const componentName = props.title
				?.replace(/^DB/, '')
				.replaceAll(/([A-Z])/g, (match, letter, index) =>
					index > 0
						? `-${letter.toLowerCase()}`
						: letter.toLowerCase()
				);

			if (componentName && /^[a-z]+(-[a-z]+)*$/.test(componentName)) {
				return `packages/components/src/components/${componentName}/${componentName}.lite.tsx`;
			}

			return;
		},
		getGitHubSourceUrl: (): string | undefined => {
			const filePath = state.getSourceFilePath();
			if (!filePath) return;

			const targetBranch =
				process.env['GITHUB_BRANCH'] ??
				process.env['BRANCH_NAME'] ??
				'main';

			return `https://github.com/db-ux-design-system/core-web/blob/${targetBranch}/${filePath}`;
		}
	});

	onMount(() => {
		if (typeof window !== 'undefined') {
			void delay(() => {
				const hash = window.location.hash;
				const queryString = hash.includes('?')
					? hash.split('?')[1]
					: '';
				const params = new URLSearchParams(
					window.location.search || queryString
				);

				state.hidden = Boolean(params.get('page'));
			}, 1);
		}
	});

	return (
		<Fragment>
			<div className="default-container">
				<Show when={!state.hidden}>
					<header class="component-header">
						<Show
							when={props.isSubComponent}
							else={<h1>{props.title}</h1>}>
							<h2>{props.title}</h2>
						</Show>

						<Show when={props.isPatternhub}>
							<DBLink
								target="_blank"
								referrerPolicy="no-referrer"
								href={state.getGitHubSourceUrl()}
								content="external">
								View Source
							</DBLink>
						</Show>
					</header>
				</Show>
				<Slot />
			</div>
			<Show when={props.isPatternhub}>
				<Slot name="subComponent" />
			</Show>
		</Fragment>
	);
}
