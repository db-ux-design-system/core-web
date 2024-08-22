import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSectionState, DBSectionProps } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBSection(props: DBSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBSectionState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'section-' + uuid();
	});
	// jscpd:ignore-end

	return (
		<section
			ref={ref}
			id={state._id}
			className={cls('db-section', props.className)}
			data-spacing={props.spacing || 'medium'}>
			{/* TODO: We need to reevaluate whether we could get rid of this tag */}
			<div data-width={props.width}>{props.children}</div>
		</section>
	);
}
