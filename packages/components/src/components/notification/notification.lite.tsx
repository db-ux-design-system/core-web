import { Show, Slot, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBNotificationProps, DBNotificationState } from './model';
import DBButton from '../button/button.lite';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBNotification(props: DBNotificationProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBNotificationState>({
		handleClose: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClose) {
				props.onClose();
			}
		}
	});
	// jscpd:ignore-end

	return (
		<article
			ref={ref}
			id={props.id}
			class={cls('db-notification', props.className)}
			aria-live={props.ariaLive}
			data-semantic={props.semantic}
			data-variant={props.variant}
			data-icon={props.icon}
			data-link-variant={props.linkVariant}>
			<Slot name="image" />
			<Show when={props.headline}>
				<header>{props.headline}</header>
			</Show>
			<p>{props.children}</p>
			<Show when={props.timestamp}>
				<span>{props.timestamp}</span>
			</Show>

			<Slot name="link" />

			<Show when={props.behaviour !== 'permanent'}>
				<DBButton
					id={props.closeButtonId}
					icon="cross"
					variant="ghost"
					size="small"
					noText
					onClick={(event: ClickEvent<HTMLButtonElement>) =>
						state.handleClose(event)
					}>
					{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				</DBButton>
			</Show>
		</article>
	);
}
