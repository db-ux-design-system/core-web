import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBoolean } from '../../utils';
import DBButton from '../button/button.lite';
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
		// The attribute is the contract the stylesheet works against, so the five
		// values live here and not in the parent: page and sibling for a page,
		// ellipsis, wide-ellipsis and collapse-ellipsis for a truncation item.
		getItemAttribute: () => {
			if (state.getPage() === 0) {
				if (props.layout === 'collapsed') {
					return 'collapse-ellipsis';
				}
				return props.layout === 'wide' ? 'wide-ellipsis' : 'ellipsis';
			}
			return props.layout === 'wide' ? 'sibling' : 'page';
		}
	});

	// A truncation item is decoration, so it is taken out of the accessibility
	// tree entirely.
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
			class={cls(
				'db-pagination-item',
				state.getPage() === 0 ? 'db-pagination-ellipsis' : undefined,
				props.className
			)}
			ref={_ref}
			data-pagination-item={state.getItemAttribute()}
			data-page={state.getPage() > 0 ? state.getPage() : undefined}
			data-size={props.size}
			data-variant={
				state.getPage() === 0
					? undefined
					: state.getActive()
						? 'filled'
						: 'ghost'
			}
			aria-current={!props.text && state.getActive() ? 'page' : undefined}
			aria-hidden={state.getPage() === 0 ? 'true' : undefined}>
			<Show when={state.getPage()} else={<span>...</span>}>
				<Show when={props.text} else={props.children}>
					<Show
						when={props.href}
						else={
							<DBButton
								class="db-pagination-page"
								variant={state.getActive() ? 'filled' : 'ghost'}
								size={props.size}
								type="button"
								aria-current={
									state.getActive() ? 'page' : undefined
								}
								aria-label={props.label}>
								{props.text}
							</DBButton>
						}>
						{/* The anchor carries the same class and data-attributes that
						DBButton renders, because set-basic-button styles by class and
						attribute and resets text-decoration for anchor use. */}
						<a
							class="db-button db-pagination-page"
							href={props.href}
							data-variant={
								state.getActive() ? 'filled' : 'ghost'
							}
							data-size={props.size}
							aria-current={
								state.getActive() ? 'page' : undefined
							}
							aria-label={props.label}>
							{props.text}
						</a>
					</Show>
				</Show>
			</Show>
		</li>
	);
}
