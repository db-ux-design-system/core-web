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
			<div class="db-footer-content-container">
				<div class="db-footer-meta-inner">
					<Show when={props.copyright}>
						<p class="db-footer-copyright">{props.copyright}</p>
					</Show>
					{props.children}
				</div>
			</div>
		</div>
	);
}
