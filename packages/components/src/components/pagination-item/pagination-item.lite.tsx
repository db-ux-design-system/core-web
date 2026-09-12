import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBoolean } from '../../utils';
import type { DBPaginationItemProps, DBPaginationItemState } from './model';

useMetadata({});

useDefaultProps<DBPaginationItemProps>({
	layout: 'always'
});

export default function DBPaginationItem(props: DBPaginationItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	const state = useStore<DBPaginationItemState>({
		// A custom element hands the page over as a string, so it is parsed here
		// instead of in the template - Angular templates cannot call Number.
		getPage: () => {
			const parsedPage = Number(props.page);
			return Number.isFinite(parsedPage) && parsedPage > 0
				? Math.floor(parsedPage)
				: 0;
		},
		getActive: () => {
			return Boolean(getBoolean(props.active, 'active'));
		},
		// The attribute is the contract the stylesheet works against: a page is part
		// of both layouts, a sibling only of the wide one. An item without a page is
		// not a page at all - the previous and next controls use this component as a
		// shell - and stays out of the contract, so the collapsing never touches it
		// and the tests do not read it as a page.
		getItemAttribute: () => {
			if (state.getPage() === 0) {
				return undefined;
			}
			if (props.layout === 'wide') {
				return 'sibling';
			}
			// A collapsed item is the mirror image of a sibling: it belongs to the narrow
			// layout alone. DBPagination never emits this value, because its own collapsed
			// pages are a subset of the wide ones and are therefore marked page - the value
			// exists for a consumer who composes the list.
			return props.layout === 'collapsed' ? 'collapsed' : 'page';
		}
	});

	// The truncation is no element of its own anymore. It is drawn by the page that
	// borders the gap, through data-ellipsis-wide and data-ellipsis-collapsed, so it
	// never reaches the accessibility tree and the list contains nothing but pages.
	//
	// The item owns no click handler. The pagination listens on the list and reads
	// data-page back from the DOM, the same way DBTabs handles its items, so a
	// composed child stays untouched and no click is reported twice.
	//
	// aria-current goes on the control where this component renders it, because that
	// is where assistive technology expects it. Only a composed child, which cannot
	// be reached from here, falls back to the <li> - never both, or the state would
	// be announced twice.
	return (
		<li
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-pagination-item', props.className)}
			ref={_ref}
			data-pagination-item={state.getItemAttribute()}
			data-page={state.getPage() > 0 ? state.getPage() : undefined}
			data-size={props.size}
			data-ellipsis-wide={props.wideEllipsis}
			data-ellipsis-collapsed={props.collapsedEllipsis}
			data-variant={state.getActive() ? 'filled' : 'ghost'}
			aria-current={
				!props.text && state.getActive() ? 'page' : undefined
			}>
			{/* A plain control rather than DBButton: the item needs the look of a
				button but not its box, and pagination-item.scss takes exactly that
				from the shared placeholders. It also keeps the two shapes identical -
				DBButton put a custom element host between the <li> and the button in
				Angular and Stencil. Neither branch repeats data-variant or data-size:
				the list item above carries both, which is where the stylesheet reads
				them, and a composed child is styled from there as well. */}
			<Show when={props.text} else={props.children}>
				<Show
					when={props.href}
					else={
						<button
							class="db-pagination-page"
							type="button"
							aria-current={
								state.getActive() ? 'page' : undefined
							}
							aria-label={props.label}>
							{props.text}
						</button>
					}>
					<a
						class="db-pagination-page"
						href={props.href}
						aria-current={state.getActive() ? 'page' : undefined}
						aria-label={props.label}>
						{props.text}
					</a>
				</Show>
			</Show>
		</li>
	);
}
