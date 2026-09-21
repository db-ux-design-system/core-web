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
	const _tooltipRef = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBBreadcrumbItemState>({
		_ariaObserver: undefined,
		// A disabled link or the current page (aria-current="page") must not be
		// focusable. Keep tabindex in sync without clobbering a consumer set one.
		_syncLinkTabindex: (link: HTMLAnchorElement) => {
			const isDisabled = link.getAttribute('aria-disabled') === 'true';
			const isCurrentPage = link.getAttribute('aria-current') === 'page';

			if (isDisabled || isCurrentPage) {
				link.setAttribute('tabindex', '-1');
			} else {
				link.removeAttribute('tabindex');
			}

			if (_tooltipRef) {
				(_tooltipRef as HTMLElement).innerHTML = link.textContent;
			}
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		const link = (_ref as HTMLElement)?.querySelector('a');

		if (link) {
			link.ariaDisabled = getBooleanAsString(props.disabled, 'disabled');
		}
	}, [props.disabled, _ref]);

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
					hreflang={props.hreflang}
					referrerPolicy={props.referrerPolicy}
					aria-current={props.ariaCurrent}>
					{props.text}
				</a>
			</Show>

			<DBTooltip placement="bottom-start" ref={_tooltipRef}>
				{props.text}
			</DBTooltip>
		</li>
	);
}
