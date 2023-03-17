import { useState } from 'react';
import { DBButton, DBDrawer } from '../../../../../output/react/src';
import type { DBDrawerProps } from '../../../../../output/react/src/components/drawer/model';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

type AdditionalDrawerProps = {
	buttonText: string;
	index: number;
	openDrawerIndex: number;
	setOpenDrawerIndex: (index: number) => void;
};
const getDrawer = ({
	width,
	rounded,
	noBackdrop,
	withCloseButton,
	size,
	buttonText,
	index,
	openDrawerIndex,
	setOpenDrawerIndex,
	direction
}: DBDrawerProps & AdditionalDrawerProps) => (
	<div>
		<DBDrawer
			noBackdrop={noBackdrop}
			withCloseButton={withCloseButton}
			rounded={rounded}
			width={width}
			size={size}
			direction={direction}
			open={openDrawerIndex === index}
			onClose={() => {
				setOpenDrawerIndex(-1);
			}}>
			{buttonText}
		</DBDrawer>
		<DBButton
			text={`Open: ${buttonText}`}
			onClick={() => {
				setOpenDrawerIndex(index);
			}}></DBButton>
	</div>
);

const getVariants = (
	openDrawerIndex: number,
	setOpenDrawerIndex: (index: number) => void
): DefaultComponentVariants[] => [
	{
		name: 'Width',
		examples: [
			{
				name: '(Default) With padding',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: '(Default) With padding',
					index: 0,
					withCloseButton: true
				})
			},
			{
				name: 'Full',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: 'Full',
					withCloseButton: true,
					index: 1,
					width: 'full'
				})
			}
		]
	},
	{
		name: 'Rounded',
		examples: [
			{
				name: '(Default) No rounding',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: '(Default) No rounding',
					index: 2,
					withCloseButton: true
				})
			},
			{
				name: 'Rounded',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					rounded: true,
					buttonText: 'Rounded',
					index: 3,
					withCloseButton: true
				})
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: '(Default) Medium',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: '(Default) Medium',
					index: 4,
					withCloseButton: true
				})
			},
			{
				name: 'Small',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: 'Small',
					size: 'small',
					index: 5,
					withCloseButton: true
				})
			}
		]
	},
	{
		name: 'Backdrop',
		examples: [
			{
				name: '(Default) With Backdrop',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: '(Default) With Backdrop',
					index: 6,
					withCloseButton: true
				})
			},
			{
				name: 'No Backdrop',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: 'No Backdrop',
					noBackdrop: true,
					index: 7,
					withCloseButton: true
				})
			}
		]
	},
	{
		name: 'Directions',
		examples: [
			{
				name: '(Default) Right',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: '(Default) Right',
					index: 8,
					withCloseButton: true
				})
			},
			{
				name: 'Left',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: 'Left',
					direction: 'left',
					index: 9,
					withCloseButton: true
				})
			},
			{
				name: 'Up',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: 'Up',
					direction: 'up',
					index: 10,
					withCloseButton: true
				})
			},
			{
				name: 'Down',
				example: getDrawer({
					openDrawerIndex,
					setOpenDrawerIndex,
					buttonText: 'Down',
					direction: 'down',
					index: 11,
					withCloseButton: true
				})
			}
		]
	}
];

const DrawerComponent = () => {
	const [openDrawerIndex, setOpenDrawerIndex] = useState<number>(-1);
	return (
		<DefaultComponent
			title={'DBDrawer'}
			variants={getVariants(
				openDrawerIndex,
				setOpenDrawerIndex
			)}></DefaultComponent>
	);
};

export default DrawerComponent;
