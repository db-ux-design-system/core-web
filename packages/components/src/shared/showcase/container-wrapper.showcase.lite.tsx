import { Fragment, onMount, Show, Slot, useState } from '@builder.io/mitosis';
import DBLink from '../../components/link/link.lite';
import { PatternhubProps } from '../model';

type Props = {
	title?: string;
	/**
	 * Slot for subcomponents - used for Patternhub
	 */
	subComponent?: any;
	/**
	 * Changes header level - used for Patternhub
	 */
	isSubComponent?: boolean;

	children?: any;
} & PatternhubProps;

export default function ContainerWrapperShowcase(props: Props) {
	const [hidden, setHidden] = useState<boolean>(false);

	onMount(() => {
		if (typeof window !== 'undefined') {
			const hash = window.location.hash;
			const queryString = hash.includes('?') ? hash.split('?')[1] : '';
			const params = new URLSearchParams(
				window.location.search || queryString
			);

			setHidden(Boolean(params.get('page')));
		}
	});

	function getSourceFilePath(): string | undefined {
		if (!props.title) return;

		const componentName = props.title
			?.replace(/^DB/, '')
			.replaceAll(/([A-Z])/g, (match, letter, index) =>
				index > 0 ? `-${letter.toLowerCase()}` : letter.toLowerCase()
			);

		if (componentName && /^[a-z]+(-[a-z]+)*$/.test(componentName)) {
			return `packages/components/src/components/${componentName}/${componentName}.lite.tsx`;
		}

		return;
	}

	function getGitHubSourceUrl(): string | undefined {
		const filePath = getSourceFilePath();
		if (!filePath) return;

		const targetBranch =
			process.env['GITHUB_BRANCH'] ??
			process.env['BRANCH_NAME'] ??
			'main';

		return `https://github.com/db-ux-design-system/core-web/blob/${targetBranch}/${filePath}`;
	}

	return (
		<Fragment>
			<div className="default-container">
				<Show when={!hidden}>
					<header class="component-header">
						<Show
							when={props.isSubComponent}
							else={<h1>{props.title}</h1>}>
							<h2>{props.title}</h2>
						</Show>

						<Show when={props.isPatternhub}>
							<DBLink
								target="_blank"
								referrerpolicy="no-referrer"
								href={getGitHubSourceUrl()}
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
