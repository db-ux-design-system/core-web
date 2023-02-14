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
			<div class="db-alert-icon-container">
				<DBIcon icon={state.getIcon(props.icon, props.variant)} />
			</div>
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
								variant="inline"
								href={props.link?.href}
								target={props.link?.target}
								rel={props.link?.rel}
								role={props.link?.role}
								disabled={props.link?.disabled}
								selected={props.link?.selected}
								label={props.link?.label}
								hrefLang={props.link?.hreflang}
								current={props.link?.current}>
								<Slot name="link" />
							</DBLink>
						</Show>
						<DBButton
							icon="close"
							variant="ghost"
							size="small"
							onClick={(event) => state.handleClick(event)}
						/>
					</div>
				</div>

				<Show when={props.headline}>
					<span>{props.children}</span>
				</Show>

				<Show when={props.type === 'inline'}>
					<DBLink
						variant="inline"
						href={props.link?.href}
						target={props.link?.target}
						rel={props.link?.rel}
						role={props.link?.role}
						disabled={props.link?.disabled}
						selected={props.link?.selected}
						label={props.link?.label}
						hrefLang={props.link?.hreflang}
						current={props.link?.current}>
						<Slot name="link" />
					</DBLink>
				</Show>
			</div>
		</div>
	);
}
