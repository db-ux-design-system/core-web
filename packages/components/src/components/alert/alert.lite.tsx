import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBAlertProps, DBAlertState } from './model';
import { DBButton } from '../button';
import { DBLink } from '../link';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: true,
		hasOnClick: true,
		canvasSize: {
			height: 'fixed', // 'fixed', 'controlled'
			width: 'controlled' // 'fixed', 'dynamic' (requires width property), 'controlled'
		},
		properties: [
			{ name: 'headline', type: 'SingleLine.Text' },
			{
				name: 'children',
				type: 'SingleLine.Text',
				defaultValue: 'Alert'
			},
			{
				name: 'icon',
				type: 'Icon', // this is a custom type not provided by ms
				defaultValue: 'info'
			},
			{
				name: 'variant',
				type: 'DefaultVariant', // this is a custom type not provided by ms
				defaultValue: 'adaptive'
			}
		]
	}
});

export default function DBAlert(props: DBAlertProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBAlertState>({
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={component}
			id={props.id}
			class={cls('db-alert', props.className)}
			aria-live={props.ariaLive}
			data-variant={props.variant}
			data-type={props.type}
			data-icon={props.icon}
			data-elevation={props.elevation}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Show when={props.headline}>
				<strong class="db-alert-headline">{props.headline}</strong>
			</Show>
			<p class="db-alert-content">{props.children}</p>

			<Show when={props.link}>
				<DBLink
					className="db-alert-link"
					variant="inline"
					href={props.link.href}
					target={props.link.target}
					rel={props.link.rel}
					role={props.link.role}
					disabled={props.link.disabled}
					selected={props.link.selected}
					label={props.link.label}
					hreflang={props.link.hreflang}
					current={props.link.current}
					text={props.link.text}
				/>
			</Show>
			<Show when={props.behaviour !== 'permanent'}>
				<DBButton
					className="db-alert-close"
					id={props.closeButtonId}
					icon="close"
					variant="text"
					size="small"
					noText
					onClick={(event) => state.handleClick(event)}>
					{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				</DBButton>
			</Show>
		</div>
	);
}
