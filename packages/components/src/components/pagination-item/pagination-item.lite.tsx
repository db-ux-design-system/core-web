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
		},
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	// A truncation item is decoration, so it is taken out of the accessibility
	// tree entirely. A pseudo element would not be enough: Chromium exposes
	// generated content as a text node, so the dots would be announced.
	//
	// The attributes below `ref` win over a forwarded aria-*/data-* value, because
	// the React post-build injects the pass-through spread directly after
	// `ref={_ref}`. That is intended here - the semantics of the item are not
	// something a consumer should be able to overwrite by accident.
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
			data-size={props.size}
			aria-hidden={state.getPage() === 0 ? 'true' : undefined}>
			<Show when={state.getPage() > 0} else={<span>...</span>}>
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
							aria-label={props.label}
							onClick={(event: any) => state.handleClick(event)}>
							{state.getPage()}
						</DBButton>
					}>
					{/* The anchor carries the same class and data-attributes that
					DBButton renders, because set-basic-button styles by class and
					attribute and resets text-decoration for anchor use. */}
					<a
						class="db-button db-pagination-page"
						href={props.href}
						data-variant={state.getActive() ? 'filled' : 'ghost'}
						data-size={props.size}
						aria-current={state.getActive() ? 'page' : undefined}
						aria-label={props.label}
						onClick={(event: any) => state.handleClick(event)}>
						{state.getPage()}
					</a>
				</Show>
			</Show>
		</li>
	);
}
