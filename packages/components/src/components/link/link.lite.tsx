import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBLinkProps } from './model';

useMetadata({});

useDefaultProps<DBLinkProps>({});

export default function DBLink(props: DBLinkProps) {
	const _ref = useRef<HTMLAnchorElement | any>(null);

	return (
		<a
			ref={_ref}
			id={props.id}
			class={cls('db-link', props.className)}
			href={props.href}
			target={props.target}
			rel={props.rel}
			role={props.role}
			data-material={props.material}
			hrefLang={props.hreflang}
			aria-disabled={getBooleanAsString(props.disabled)}
			tabIndex={props.disabled ? -1 : 0}
			data-size={props.size}
			data-show-icon-trailing={getBooleanAsString(props.showIcon ?? true)}
			data-variant={props.variant}
			data-content={props.content || 'internal'}
			data-wrap={getBooleanAsString(props.wrap)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</a>
	);
}
