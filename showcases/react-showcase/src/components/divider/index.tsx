import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/divider';
import type { DBDividerDefaultProps } from '../../../../../output/react/src/components/divider/model';
import { DBDivider } from '../../../../../output/react/src';
import { getVariants } from '../../utils';

export type HeadlineProps = {
	exampleName: string;
};

export type ExtendedProps = DBDividerDefaultProps & HeadlineProps;

const getDivider = ({ variant, exampleName }: ExtendedProps) => (
	<>
		<h6>{exampleName}</h6>
		<DBDivider variant={variant} />
	</>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getDivider({
				variant: 'horizontal',
				exampleName
			}),
			code: `<DBCard colorVariant="neutral-0" variant="interactive" spacing="small"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getDivider({
				variant: 'vertical',
				exampleName
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		}
	]
];

const DividerComponent = () => {
	return (
		<DefaultComponent
			title={'DBDivider'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default DividerComponent;
