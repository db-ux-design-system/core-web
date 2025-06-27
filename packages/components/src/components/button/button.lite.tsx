import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import type { DBButtonProps } from './model';
import { cls, getBoolean, getBooleanAsString, getHideProp } from '../../utils';

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
			aria-label={props.label}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={getBooleanAsString(props.noText)}
			name={props.name}
			form={props.form}
			value={props.value}
			aria-describedby={props.describedbyid}
			aria-expanded={props.ariaexpanded}
			aria-pressed={props.ariapressed}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</button>
	);
}
