import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Justify Content Row',
	storybookNames: ['(Default) Start', 'Center', 'End', 'Space-Between'],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackJustifyContentRow() {
	return (
		<Fragment>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					width: '300px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					(Default) Start
				</DBInfotext>
				<DBStack
					class="stack-container stack-show-alignment"
					justifyContent="start"
					direction="row">
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
					width: '300px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Center
				</DBInfotext>
				<DBStack
					class="stack-container stack-show-alignment"
					justifyContent="center"
					direction="row">
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
					width: '300px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					End
				</DBInfotext>
				<DBStack
					class="stack-container stack-show-alignment"
					justifyContent="end"
					direction="row">
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
					width: '300px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Space-Between
				</DBInfotext>
				<DBStack
					class="stack-container stack-show-alignment"
					justifyContent="space-between"
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
