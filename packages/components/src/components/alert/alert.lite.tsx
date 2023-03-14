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
		includeIcon: true,
		hasOnClick: true,
		properties: [
			{ name: 'headline', type: 'SingleLine.Text' },
			{ name: 'text', type: 'SingleLine.Text' },
			{
				name: 'icon',
				type: 'Icon' // this is a custom type not provided by ms
			},
			{
				name: 'variant',
				type: 'DefaultVariant' // this is a custom type not provided by ms
			}
		]
	}
});

const DEFAULT_VALUES = {
	closeButton: 'Close Button'
};

export default function DBAlert(props: DBAlertProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBAlertState>({
		handleClick: (event) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		getIcon: (icon?: string, variant?: string) => {
			if (state.iconVisible(icon)) {
				return icon;
			}

			return DefaultVariantsIcon[variant] || 'info';
		},
		iconVisible: (icon: string) => {
			return icon && icon !== '_' && icon !== 'none';
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			ref={component}
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
					<Show when={props.headline}>
						<strong>{props.headline}</strong>
					</Show>
					<Show when={!props.headline}>
						<span>
							{props.children}
							{props.text}
						</span>
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
						<Show when={props.behaviour !== 'permanent'}>
							<DBButton
								icon="close"
								variant="transparent"
								size="small"
								onClick={(event) => state.handleClick(event)}>
								{props.closeButtonText ??
									DEFAULT_VALUES.closeButton}
							</DBButton>
						</Show>
					</div>
				</div>

				<Show when={props.headline}>
					<span>
						{props.children}
						{props.text}
					</span>
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
