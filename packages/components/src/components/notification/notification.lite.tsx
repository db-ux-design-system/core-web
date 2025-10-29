import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';
import {
	cls,
	getBoolean,
	getBooleanAsString,
	stringPropVisible
} from '../../utils';
import DBButton from '../button/button.lite';
import { DBNotificationProps, DBNotificationState } from './model';

useMetadata({});

useDefaultProps<DBNotificationProps>({});

export default function DBNotification(props: DBNotificationProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBNotificationState>({
		handleClose: (event?: ClickEvent<HTMLButtonElement> | void) => {
			if (!event) return;

			event.stopPropagation();
			if (props.onClose) {
				props.onClose(event);
			}
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
			// Only set `data-icon` when the icon should be shown. We treat an
			// undefined `showIcon` as "show" (backwards compatible default).
			// Omit `data-icon` only when `showIcon` is explicitly false.
			data-icon={
				getBoolean(props.showIcon) !== false ? props.icon : undefined
			}
			data-show-icon={getBooleanAsString(props.showIcon)}
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
