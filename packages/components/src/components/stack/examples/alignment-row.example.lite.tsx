import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Alignment Row',
	storybookNames: ['(Default) Stretch', 'Start', 'Center', 'End'],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackAlignmentRow() {
	return (
		<Fragment>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					height: '100px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					(Default) Stretch
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					alignment="stretch"
					direction="row">
					<span className="dummy-component">
						<a href="#">Content 1</a>
					</span>

					<span className="dummy-component">Content 2</span>

					<span className="dummy-component">Content 3</span>
				</DBStack>
			</div>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					height: '100px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Start
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					alignment="start"
					direction="row">
					<span className="dummy-component">
						<a href="#">Content 1</a>
					</span>

					<span className="dummy-component">Content 2</span>

					<span className="dummy-component">Content 3</span>
				</DBStack>
			</div>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					height: '100px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Center
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					alignment="center"
					direction="row">
					<span className="dummy-component">
						<a href="#">Content 1</a>
					</span>

					<span className="dummy-component">Content 2</span>

					<span className="dummy-component">Content 3</span>
				</DBStack>
			</div>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					height: '100px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					End
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					alignment="end"
					direction="row">
					<span className="dummy-component">
						<a href="#">Content 1</a>
					</span>

					<span className="dummy-component">Content 2</span>

					<span className="dummy-component">Content 3</span>
				</DBStack>
			</div>
		</Fragment>
	);
}
