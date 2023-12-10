import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBButtonProps, DBButtonState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

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

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<button
			ref={ref}
			id={props.id}
			class={cls('db-button', props.className, {
				'is-icon-text-replace': props.noText
			})}
			type={props.type}
			title={props.title}
			disabled={props.disabled}
			aria-label={props.label}
			data-icon={props.icon}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			name={props.name}
			value={props.value}
			aria-describedby={props.describedbyid}
			aria-expanded={props.ariaexpanded}
			aria-pressed={props.ariapressed}
			onClick={(event: ClickEvent<HTMLButtonElement>) =>
				state.handleClick(event)
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</button>
	);
}
