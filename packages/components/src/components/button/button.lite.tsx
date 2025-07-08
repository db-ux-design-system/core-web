import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getBoolean, getBooleanAsString, getHideProp } from '../../utils';
import type { DBButtonProps } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});

useDefaultProps<DBButtonProps>({});

export default function DBButton(props: DBButtonProps) {
	const _ref = useRef<HTMLButtonElement | any>(null);

	return (
		<button
			ref={_ref}
			id={props.id}
			class={cls('db-button', props.className)}
			type={props.type || 'button'}
			disabled={getBoolean(props.disabled, 'disabled')}
			data-icon={props.iconLeading ?? props.icon}
			data-hide-icon={getHideProp(
				props.showIconLeading ?? props.showIcon
			)}
			data-icon-trailing={props.iconTrailing}
			data-hide-icon-trailing={getHideProp(props.showIconTrailing)}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={getBooleanAsString(props.noText)}
			name={props.name}
			form={props.form}
			value={props.value}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</button>
	);
}
