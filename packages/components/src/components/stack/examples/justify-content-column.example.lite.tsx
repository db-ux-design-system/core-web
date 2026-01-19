import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Justify Content Column',
	storybookNames: ['(Default) Start', 'Center', 'End', 'Space-Between'],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackJustifyContentColumn() {
	return (
		<Fragment>
			<div
				style={{
					alignItems: 'flex-start',
					display: 'flex',
					flexDirection: 'column',
					gap: 'var(--db-spacing-fixed-sm)',
					width: '200px',
					height: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					(Default) Start
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					justifyContent="start">
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
					width: '200px',
					height: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Center
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					justifyContent="center">
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
					width: '200px',
					height: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					End
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					justifyContent="end">
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
					width: '200px',
					height: '200px'
				}}>
				<DBInfotext size="small" icon="none" semantic="informational">
					Space-Between
				</DBInfotext>
				<DBStack
					className="stack-container stack-show-alignment"
					justifyContent="space-between">
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
