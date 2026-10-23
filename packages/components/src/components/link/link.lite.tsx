import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ColorType, MaterialType } from '../../shared/model';
import { cls, getBooleanAsString } from '../../utils';
import { DBLinkProps, DBLinkState } from './model';

useMetadata({});

useDefaultProps<DBLinkProps>({});

export default function DBLink(props: DBLinkProps) {
	const _ref = useRef<HTMLAnchorElement | any>(null);

	const state = useStore<DBLinkState>({
		_getMaterial: (): MaterialType | undefined => {
			if (props.material) {
				return props.material;
			}

			if (props.variant === 'brand') {
				return 'origin';
			}

			return undefined;
		},
		_getColor: (): ColorType | undefined => {
			if (props.color) {
				return props.color;
			}

			if (props.variant === 'brand') {
				return 'brand';
			}

			return undefined;
		}
	});

	return (
		<a
			data-material={state._getMaterial()}
			data-color={state._getColor()}
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-link', props.className)}
			href={props.href}
			target={props.target}
			rel={props.rel}
			role={props.role}
			referrerPolicy={props.referrerpolicy ?? props.referrerPolicy}
			hrefLang={props.hreflang}
			aria-disabled={getBooleanAsString(props.disabled, 'disabled')}
			tabIndex={props.disabled ? -1 : 0}
			data-size={props.size}
			data-show-icon-trailing={getBooleanAsString(
				props.showIcon ?? true,
				'showIcon'
			)}
			data-variant={props.variant}
			data-content={props.content || 'internal'}
			data-wrap={getBooleanAsString(props.wrap, 'wrap')}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
		</a>
	);
}
