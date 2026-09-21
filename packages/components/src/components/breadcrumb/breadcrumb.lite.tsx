import {
	For,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, parseItems } from '../../utils';
import DBBreadcrumbItem from '../breadcrumb-item/breadcrumb-item.lite';
import { DBBreadcrumbItemDefaultProps } from '../breadcrumb-item/model';
import { DBButton } from '../button';
import { DBTooltip } from '../tooltip';
import { DBBreadcrumbProps, DBBreadcrumbState } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBBreadcrumbState>({
		_autoCollapse: false,
		_expanded: false,
		getItems: () => {
			return parseItems<DBBreadcrumbItemDefaultProps>(props.items);
		},
		getAriaCurrent: (
			item: DBBreadcrumbItemDefaultProps,
			index: number
		): DBBreadcrumbItemDefaultProps['ariaCurrent'] | undefined => {
			if (item.ariaCurrent) {
				return item.ariaCurrent;
			}
			return index === state.getItems().length - 1 ? 'page' : undefined;
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref) {
			requestAnimationFrame(() => {
				const hasCollapseItem = (_ref as HTMLDivElement).querySelector(
					'details'
				);
				const breadCrumbItems = (
					_ref as HTMLDivElement
				).querySelectorAll('.db-breadcrumb-item');
				if (!hasCollapseItem) {
					state._autoCollapse =
						breadCrumbItems.length >
						Math.max(props.maxItems ?? 4, 2);
				}
			});
		}
	}, [_ref]);

	return (
		<nav
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-breadcrumb', props.className)}
			data-size={props.size ?? 'small'}
			data-separator={props.separator}
			data-collapsed={state._autoCollapse && !state._expanded}>
			<Show when={state._autoCollapse && !state._expanded}>
				<div class="db-breadcrumb-truncation-item">
					<DBButton
						className="db-breadcrumb-truncation-item-button"
						variant="ghost"
						size={props.size ?? 'small'}
						aria-label={props.expandText}
						onClick={() => {
							state._expanded = true;
						}}>
						{/* Visible ellipsis as text (design); accessible name */}
						{/* comes from aria-label. Escaped so source stays ASCII. */}
						<span aria-hidden="true">{'\u2026'}</span>
						<DBTooltip>{props.expandText}</DBTooltip>
					</DBButton>
				</div>
			</Show>
			<ol>
				<Show when={props.items} else={props.children}>
					<For each={state.getItems()}>
						{(
							item: DBBreadcrumbItemDefaultProps,
							index: number
						) => (
							<DBBreadcrumbItem
								key={`breadcrumb-item-${index}`}
								text={item.text}
								href={item.href}
								target={item.target}
								rel={item.rel}
								hreflang={item.hreflang}
								referrerPolicy={item.referrerPolicy}
								icon={item.icon}
								showIcon={item.showIcon}
								noText={item.noText}
								disabled={item.disabled}
								ariaCurrent={state.getAriaCurrent(item, index)}
							/>
						)}
					</For>
				</Show>
			</ol>
		</nav>
	);
}
