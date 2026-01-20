import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Wrap',
	storybookNames: [
		'(Default) No Wrap: Column',
		'No Wrap: Row',
		'Wrap: Column',
		'Wrap: Row'
	],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackWrap() {
	return (
		<Fragment>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					width: '160px',
					height: '88px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					(Default) No Wrap: Column
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
					width: '160px',
					height: '88px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					No Wrap: Row
				</DBInfotext>
				<DBStack class="stack-container" direction="row">
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
					width: '160px',
					height: '120px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Wrap: Column
				</DBInfotext>
				<DBStack class="stack-container" wrap={true}>
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
					width: '180px',
					height: '100px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Wrap: Row
				</DBInfotext>
				<DBStack class="stack-container" direction="row" wrap={true}>
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
