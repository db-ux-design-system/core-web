import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DBNotificationProps, DBNotificationState } from './model';
import DBButton from '../button/button.lite';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls, getBoolean, getHideProp, stringPropVisible } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({});

useDefaultProps<DBNotificationProps>({});

export default function DBNotification(props: DBNotificationProps) {
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBNotificationState>({
		handleClose: (event: ClickEvent<HTMLButtonElement> | any) => {
			useTarget({
				vue: () => {
					if (props.close) {
						props.close(event);
					}
				},
				default: () => {
					if (props.onClose) {
						props.onClose(event);
					}
				}
			});
		}
	});
	// jscpd:ignore-end

	return (
		<article
			ref={_ref}
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
			<Show
				when={stringPropVisible(props.timestamp, props.showTimestamp)}>
				<span>{props.timestamp}</span>
			</Show>

			<Slot name="link" />

			<Show when={getBoolean(props.closeable, 'closeable')}>
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
