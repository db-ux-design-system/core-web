import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Direction',
	storybookNames: ['(Default) Column', 'Row'],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackDirection() {
	return (
		<Fragment>
			<div
				style={{
					alignItems: 'flex-start',
					alignSelf: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					width: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					(Default) Column
				</DBInfotext>
				<DBStack style={{ padding: 'var(--db-spacing-fixed-xs)' }}>
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
					alignSelf: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					height: '100px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Row
				</DBInfotext>
				<DBStack
					style={{ padding: 'var(--db-spacing-fixed-xs)' }}
					direction="row">
					<span class="dummy-component">
						<a href="#">Content 1</a>
					</span>

					<span class="dummy-component">Content 2</span>

					<span class="dummy-component">Content 3</span>
				</DBStack>
			</div>
		</Fragment>
	);
}
