import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Alignment Column',
	storybookNames: ['(Default) Stretch', 'Start', 'Center', 'End'],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackAlignmentColumn() {
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
					(Default) Stretch
				</DBInfotext>
				<DBStack
					style={{
						padding: 'var(--db-spacing-fixed-xs)',
						border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
					}}
					alignment="stretch">
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
					width: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Start
				</DBInfotext>
				<DBStack
					style={{
						padding: 'var(--db-spacing-fixed-xs)',
						border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
					}}
					alignment="start">
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
					width: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Center
				</DBInfotext>
				<DBStack
					style={{
						padding: 'var(--db-spacing-fixed-xs)',
						border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
					}}
					alignment="center">
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
					width: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					End
				</DBInfotext>
				<DBStack
					style={{
						padding: 'var(--db-spacing-fixed-xs)',
						border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
					}}
					alignment="end">
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
