import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getBoolean } from '../../utils';
import { DBFooterProps } from './model';

useMetadata({});
useDefaultProps<DBFooterProps>({
	showCopyright: true,
	showMain: true,
	showMeta: true
});

export default function DBFooter(props: DBFooterProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLElement | null>(null);

	return (
		<footer
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-footer', props.className)}
			data-width={props.width}>
			{getBoolean(props.showMain, 'showMain') && (
				<div class="db-footer-main">
					<div class="db-footer-content-container">
						{props.children}
					</div>
				</div>
			)}

			{getBoolean(props.showMeta, 'showMeta') && (
				<div class="db-footer-meta">
					<div class="db-footer-content-container">
						<div class="db-footer-meta-inner">
							{getBoolean(
								props.showCopyright,
								'showCopyright'
							) && (
								<p class="db-footer-copyright">
									© Deutsche Bahn AG
								</p>
							)}
							<Slot name="meta" />
						</div>
					</div>
				</div>
			)}
		</footer>
	);
}
