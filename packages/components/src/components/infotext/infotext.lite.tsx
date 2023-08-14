import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { DBInfotextState, DBInfotextProps } from './model';
import { DefaultVariantsIcon } from '../../shared/model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: true,
		properties: [
			// jscpd:ignore-start
			{
				name: 'children',
				type: 'SingleLine.Text',
				defaultValue: 'Infotext'
			},
			{
				name: 'variant',
				type: 'Enum',
				values: [
					{ key: 'Adaptive', name: 'Adaptive', value: 'adaptive' },
					{ key: 'Critical', name: 'Critical', value: 'critical' },
					{
						key: 'Informational',
						name: 'Informational',
						value: 'informational'
					},
					{ key: 'Warning', name: 'Warning', value: 'warning' },
					{
						key: 'Successful',
						name: 'Successful',
						value: 'successful'
					}
				]
			},
			{
				name: 'size',
				type: 'Enum',
				values: [
					{ key: 'Sedium', name: 'Medium', value: 'medium' },
					{ key: 'Small', name: 'Small', value: 'small' }
				]
			}
			// jscpd:ignore-end
		]
	}
});

export default function DBInfotext(props: DBInfotextProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBInfotextState>({
		getIcon: (icon?: string, variant?: string) => {
			return icon || (variant && DefaultVariantsIcon[variant]) || 'info';
		}
	});
	// jscpd:ignore-end

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	// TODO: Check if this should be a div or a span
	return (
		<span
			ref={component}
			class={cls('db-infotext', props.className)}
			title={props.title}
			data-icon={state.getIcon(props.icon, props.variant)}
			data-variant={props.variant}
			data-size={props.size}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
