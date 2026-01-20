import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDivider from '../../divider/divider.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Simple', 'Divider'],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackVariant() {
	return (
		<Fragment>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					width: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					(Default) Simple
				</DBInfotext>
				<DBStack class="stack-container">
					<span class="dummy-component">
						<a href="#">Content 1</a>
					</span>

					<span class="dummy-component">Content 2</span>

					<span class="dummy-component">Content 3</span>
				</DBStack>
			</div>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					width: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Divider
				</DBInfotext>
				<DBStack class="stack-container" variant="divider">
					<span class="dummy-component">
						<a href="#">Content 1</a>
					</span>
					<DBDivider />

					<span class="dummy-component">Content 2</span>
					<DBDivider />

					<span class="dummy-component">Content 3</span>
				</DBStack>
			</div>
		</Fragment>
	);
}
