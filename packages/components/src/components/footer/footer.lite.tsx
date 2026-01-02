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
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<footer
			ref={_ref}
			id={props.id}
			class={cls('db-footer', props.className)}
			data-width={props.width}>
			{getBoolean(props.showMain, 'showMain') && (
				<section
					class="db-footer-main"
					data-name="Main Container (Section)">
					<div
						class="db-footer-content-container"
						data-name="Content Container">
						<div class="db-footer-main-inner">
							<Slot name="main" />
						</div>
					</div>
				</section>
			)}

			{getBoolean(props.showMeta, 'showMeta') && (
				<section
					class="db-footer-meta"
					data-name="Meta Container (Section)">
					<div
						class="db-footer-content-container"
						data-name="Content Container">
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
				</section>
			)}
		</footer>
	);
}
