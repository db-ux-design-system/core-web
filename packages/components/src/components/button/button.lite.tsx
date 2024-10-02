import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import type { DBButtonProps, DBButtonState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({});

/**
 * This is a test comment
 * @param props
 * @constructor
 */
export default function DBButton(props: DBButtonProps) {
	const ref = useRef<HTMLButtonElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBButtonState>({
		handleClick: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	// jscpd:ignore-end

	return (
		<button
			ref={ref}
			id={props.id}
			class={cls('db-button', props.className)}
			type={props.type || 'button'}
			disabled={props.disabled}
			aria-label={props.label}
			data-icon={props.icon}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={props.noText}
			name={props.name}
			value={props.value}
			aria-describedby={props.describedbyid}
			aria-expanded={props.ariaexpanded}
			aria-pressed={props.ariapressed}
			onClick={(event: ClickEvent<HTMLButtonElement>) =>
				state.handleClick(event)
			}>
			{props.children}
		</button>
	);
}
