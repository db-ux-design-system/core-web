import { Show, Slot, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBNotificationProps, DBNotificationState } from './model';
import DBButton from '../button/button.lite';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls, getHideProp } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { stringPropVisible } from '../../utils/form-components';

useMetadata({});

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
			data-hide-icon={getHideProp(props.showIcon)}
			data-link-variant={props.linkVariant}>
			<Slot name="image" />
			<Show when={stringPropVisible(props.headline, props.showHeadline)}>
				<header>{props.headline}</header>
			</Show>
			<p>
				<Show when={props.text} else={props.children}>
					{props.text}
				</Show>
			</p>
			<Show when={props.timestamp}>
				<span>{props.timestamp}</span>
			</Show>

			<Slot name="link" />

			<Show when={props.closeable}>
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
