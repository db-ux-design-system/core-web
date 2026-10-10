import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import DBPopover from '../popover/popover.lite';
import type { DBBreadcrumbPopoverItemProps } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbPopoverItemProps>({
	label: 'Show more breadcrumbs'
});

export default function DBBreadcrumbPopoverItem(
	props: DBBreadcrumbPopoverItemProps
) {
	// This is used as forwardRef
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const _ref = useRef<HTMLLIElement | any>(null);

	function satisfyReact(event: any) {
		// This is a function to satisfy React
		event.stopPropagation();
	}

	return (
		<li
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-breadcrumb-popover-item', props.className)}>
			<DBPopover
				placement="bottom-start"
				gap
				trigger={
					<button
						type="button"
						class="db-button db-breadcrumb-popover-item-toggle"
						data-variant="ghost"
						aria-label={props.label}
						onClick={(event) => satisfyReact(event)}>
						{/* Visible ellipsis as text (design); the accessible */}
						{/* name comes from aria-label. Escaped so the source */}
						{/* stays ASCII. */}
						<span aria-hidden="true">{'\u2026'}</span>
					</button>
				}>
				<ol>{props.children}</ol>
			</DBPopover>
		</li>
	);
}
