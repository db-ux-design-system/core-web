import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBAlertState, DBAlertProps } from './model';
import { DBIcon } from '../icon';
import { DefaultVariantsIcon } from '../../shared/model';
import { DBButton } from '../button';
import { DBLink } from '../link';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

const DEFAULT_VALUES = {
	closeButton: 'Close Button'
};

export default function DBAlert(props: DBAlertProps) {
	const state = useStore<DBAlertState>({
		handleClick: (event) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		getIcon: (icon?: string, variant?: string) => {
			return icon || DefaultVariantsIcon[variant] || 'info';
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			class={'db-alert' + (props.className ? ' ' + props.className : '')}
			data-variant={props.variant}
			data-type={props.type}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<DBIcon
				className="db-alert-icon"
				icon={state.getIcon(props.icon, props.variant)}
			/>
			<div class="db-alert-content-container">
				<div class="db-alert-headline-container">
					<Show
						when={props.headline}
						else={<span>{props.children}</span>}>
						<strong>{props.headline}</strong>
					</Show>
					<div class="db-alert-close-container">
						<Show when={props.type !== 'inline'}>
							<DBLink
								className="db-alert-headline-link"
								variant="inline"
								href={props.link?.href}
								target={props.link?.target}
								rel={props.link?.rel}
								role={props.link?.role}
								disabled={props.link?.disabled}
								selected={props.link?.selected}
								label={props.link?.label}
								hreflang={props.link?.hreflang}
								current={props.link?.current}>
								<Slot name="link" />
							</DBLink>
						</Show>
						<DBButton
							icon="close"
							variant="transparent"
							size="small"
							onClick={(event) => state.handleClick(event)}>
							{props.closeButtonText ??
								DEFAULT_VALUES.closeButton}
						</DBButton>
					</div>
				</div>

				<Show when={props.headline}>
					<span>{props.children}</span>
				</Show>

				<DBLink
					className="db-alert-content-link"
					variant="inline"
					href={props.link?.href}
					target={props.link?.target}
					rel={props.link?.rel}
					role={props.link?.role}
					disabled={props.link?.disabled}
					selected={props.link?.selected}
					label={props.link?.label}
					hreflang={props.link?.hreflang}
					current={props.link?.current}>
					<Slot name="link" />
				</DBLink>
			</div>
		</div>
	);
}
