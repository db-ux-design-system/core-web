import { Show, Slot, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBHeadingProps } from './model';

useMetadata({});

// jscpd:ignore-start
export default function DBHeading(props: DBHeadingProps) {
	const _ref = useRef<HTMLHeadingElement | any>(null);

	return (
		<>
			<Show
				when={
					props.as !== 'h2' &&
					props.as !== 'h3' &&
					props.as !== 'h4' &&
					props.as !== 'h5' &&
					props.as !== 'h6'
				}>
				<h1
					ref={_ref}
					id={props.id ?? props.propOverrides?.id}
					class={cls('db-heading', props.className)}
					data-size={props.size}
					data-font-weight={props.fontWeight}
					data-alignment={props.alignment}
					data-paragraph-spacing={getBooleanAsString(
						props.paragraphSpacing,
						'paragraphSpacing'
					)}>
					<Slot name="startSlot" />
					{props.children}
					<Slot name="endSlot" />
				</h1>
			</Show>
			<Show when={props.as === 'h2'}>
				<h2
					ref={_ref}
					id={props.id ?? props.propOverrides?.id}
					class={cls('db-heading', props.className)}
					data-size={props.size}
					data-font-weight={props.fontWeight}
					data-alignment={props.alignment}
					data-paragraph-spacing={getBooleanAsString(
						props.paragraphSpacing,
						'paragraphSpacing'
					)}>
					<Slot name="startSlot" />
					{props.children}
					<Slot name="endSlot" />
				</h2>
			</Show>
			<Show when={props.as === 'h3'}>
				<h3
					ref={_ref}
					id={props.id ?? props.propOverrides?.id}
					class={cls('db-heading', props.className)}
					data-size={props.size}
					data-font-weight={props.fontWeight}
					data-alignment={props.alignment}
					data-paragraph-spacing={getBooleanAsString(
						props.paragraphSpacing,
						'paragraphSpacing'
					)}>
					<Slot name="startSlot" />
					{props.children}
					<Slot name="endSlot" />
				</h3>
			</Show>
			<Show when={props.as === 'h4'}>
				<h4
					ref={_ref}
					id={props.id ?? props.propOverrides?.id}
					class={cls('db-heading', props.className)}
					data-size={props.size}
					data-font-weight={props.fontWeight}
					data-alignment={props.alignment}
					data-paragraph-spacing={getBooleanAsString(
						props.paragraphSpacing,
						'paragraphSpacing'
					)}>
					<Slot name="startSlot" />
					{props.children}
					<Slot name="endSlot" />
				</h4>
			</Show>
			<Show when={props.as === 'h5'}>
				<h5
					ref={_ref}
					id={props.id ?? props.propOverrides?.id}
					class={cls('db-heading', props.className)}
					data-size={props.size}
					data-font-weight={props.fontWeight}
					data-alignment={props.alignment}
					data-paragraph-spacing={getBooleanAsString(
						props.paragraphSpacing,
						'paragraphSpacing'
					)}>
					<Slot name="startSlot" />
					{props.children}
					<Slot name="endSlot" />
				</h5>
			</Show>
			<Show when={props.as === 'h6'}>
				<h6
					ref={_ref}
					id={props.id ?? props.propOverrides?.id}
					class={cls('db-heading', props.className)}
					data-size={props.size}
					data-font-weight={props.fontWeight}
					data-alignment={props.alignment}
					data-paragraph-spacing={getBooleanAsString(
						props.paragraphSpacing,
						'paragraphSpacing'
					)}>
					<Slot name="startSlot" />
					{props.children}
					<Slot name="endSlot" />
				</h6>
			</Show>
		</>
	);
}
// jscpd:ignore-end
