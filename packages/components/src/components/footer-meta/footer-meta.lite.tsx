import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBFooterMetaProps } from './model';

useMetadata({});
useDefaultProps<DBFooterMetaProps>({});

export default function DBFooterMeta(props: DBFooterMetaProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-footer-meta', props.className)}>
			<div class="db-footer-container">
				<Show when={props.copyright}>
					{/*
					 * The copyright sign and the non-breaking space are part of the
					 * interpolated expression on purpose. As a separate text node next
					 * to `{props.copyright}` the Angular generator emits
					 * `©&nbsp; {{copyright()}}`, and Angular keeps that extra space
					 * because it never collapses whitespace adjacent to a `&nbsp;` --
					 * the Angular output rendered the line about 3px wider than React
					 * and Vue.
					 */}
					<p class="db-footer-copyright">
						{'\u00A9\u00A0' + props.copyright}
					</p>
				</Show>
				<div class="db-footer-meta-content">{props.children}</div>
			</div>
		</div>
	);
}
