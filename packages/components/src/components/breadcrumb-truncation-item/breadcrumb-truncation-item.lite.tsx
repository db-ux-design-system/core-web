import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import DBButton from '../button/button.lite';
import DBPopover from '../popover/popover.lite';
import type { DBBreadcrumbTruncationItemProps } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbTruncationItemProps>({
	label: 'Show more breadcrumbs'
});

export default function DBBreadcrumbTruncationItem(
	props: DBBreadcrumbTruncationItemProps
) {
	// This is used as forwardRef
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-breadcrumb-truncation-item', props.className)}>
			<DBPopover
				className="db-breadcrumb-truncation-item-popover"
				placement={props.placement ?? 'bottom'}
				animation={props.animation}
				delay={props.delay}
				width={props.width}
				trigger={
					<DBButton
						class="db-breadcrumb-truncation-item-toggle"
						variant="ghost"
						aria-label={props.label}>
						{/* Visible ellipsis as text (design); the accessible */}
						{/* name comes from aria-label. Escaped so the source */}
						{/* stays ASCII. */}
						<span aria-hidden="true">{'\u2026'}</span>
					</DBButton>
				}>
				<ol>{props.children}</ol>
			</DBPopover>
		</li>
	);
}
