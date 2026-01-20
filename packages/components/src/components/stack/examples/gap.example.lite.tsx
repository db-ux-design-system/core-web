import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Gap',
	storybookNames: [
		'none',
		'3x-small',
		'2x-small',
		'x-small',
		'(Default) small',
		'medium',
		'large',
		'x-large',
		'2x-large',
		'3x-large'
	],
	storybookArgTypes: StorybookStackArgTypes
});

export default function StackGap() {
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
					none
				</DBInfotext>
				<DBStack class="stack-container" gap="none">
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
					3x-small
				</DBInfotext>
				<DBStack class="stack-container" gap="3x-small">
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
					2x-small
				</DBInfotext>
				<DBStack class="stack-container" gap="2x-small">
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
					x-small
				</DBInfotext>
				<DBStack class="stack-container" gap="x-small">
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
					(Default) small
				</DBInfotext>
				<DBStack class="stack-container" gap="small">
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
					medium
				</DBInfotext>
				<DBStack class="stack-container" gap="medium">
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
					large
				</DBInfotext>
				<DBStack class="stack-container" gap="large">
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
					x-large
				</DBInfotext>
				<DBStack class="stack-container" gap="x-large">
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
					2x-large
				</DBInfotext>
				<DBStack class="stack-container" gap="2x-large">
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
					3x-large
				</DBInfotext>
				<DBStack class="stack-container" gap="3x-large">
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
