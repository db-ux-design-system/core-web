import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBBreadcrumbItemProps, DBBreadcrumbItemState } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbItemProps>({});

export default function DBBreadcrumbItem(props: DBBreadcrumbItemProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBBreadcrumbItemState>({
		_ariaObserver: undefined,
		_componentSetAriaCurrent: false,
		_tooltipText: undefined,
		_syncLinkTabindex: (link: HTMLAnchorElement) => {
			const isDisabled = link.getAttribute('aria-disabled') === 'true';
			const isCurrentPage = link.getAttribute('aria-current') === 'page';

			if (isDisabled || isCurrentPage) {
				link.setAttribute('tabindex', '-1');
			} else {
				link.removeAttribute('tabindex');
			}
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		requestAnimationFrame(() => {
			const link = (_ref as HTMLElement)?.querySelector('a');

			if (link) {
				link.ariaDisabled = getBooleanAsString(
					props.disabled,
					'disabled'
				);

				if (props.ariaCurrent) {
					link.setAttribute('aria-current', props.ariaCurrent ?? '');
					state._componentSetAriaCurrent = true;
				} else if (state._componentSetAriaCurrent) {
					/* Only remove aria-current when the component itself
					 * previously set it, not when the consumer placed it
					 * on the slotted anchor (composition API). */
					link.removeAttribute('aria-current');
					state._componentSetAriaCurrent = false;
				}

				/* Resolve tooltip label: props.text for the text/options
				 * API, anchor innerText for the composition API. */
				state._tooltipText = props.text || link.innerText || '';
			}
		});
	}, [props.disabled, props.ariaCurrent, props.text, _ref]);

	onMount(() => {
		if (_ref) {
			const link = (_ref as HTMLElement).querySelector('a');
			if (link) {
				// Apply the initial state synchronously ...
				state._syncLinkTabindex(link);

				// ... then observe later aria-disabled / aria-current changes,
				// e.g. when the parent toggles disabled or marks the current page.
				const observer = new MutationObserver(() => {
					const currentLink = (_ref as HTMLElement)?.querySelector(
						'a'
					);
					if (currentLink) {
						state._syncLinkTabindex(currentLink);
					}
				});
				observer.observe(link, {
					attributes: true,
					attributeFilter: ['aria-disabled', 'aria-current']
				});
				state._ariaObserver = observer;
			}
		}
	});

	onUnMount(() => {
		state._ariaObserver?.disconnect();
		state._ariaObserver = undefined;
	});

	return (
		<li
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-material={props.material ?? 'transparent'}
			data-adaptive-color={props.color}
			data-icon={props.iconLeading ?? props.icon}
			data-show-icon={
				getBooleanAsString(props.showIconLeading, 'showIconLeading') ||
				getBooleanAsString(props.showIcon, 'showIcon')
			}
			class={cls('db-breadcrumb-item', props.className)}
			data-no-text={getBooleanAsString(props.noText, 'noText')}>
			<Show when={props.text} else={props.children}>
				<a
					href={props.href}
					target={props.target}
					rel={props.rel}
					hrefLang={props.hreflang}
					referrerPolicy={
						props.referrerPolicy ?? props.referrerpolicy
					}
					aria-current={props.ariaCurrent}>
					{props.text}
				</a>
			</Show>

			<DBTooltip placement="bottom-start">{state._tooltipText}</DBTooltip>
		</li>
	);
}
