import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/divider';
import type { DBDividerDefaultProps } from '../../../../../output/react/src/components/divider/model';
import { DBDivider } from '../../../../../output/react/src';
import { getVariants } from '../../utils';

const getDivider = ({ variant }: DBDividerDefaultProps) => (
	<DBDivider variant={variant} />
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getDivider({
				variant: 'horizontal'
			}),
			code: `<DBCard colorVariant="neutral-0" variant="interactive" spacing="small"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		},
		{
			example: getDivider({
				variant: 'vertical'
			}),
			code: `<DBCard colorVariant="${exampleName}" variant="interactive"><strong>Card</strong>
		<span>{colorVariant}</span></DBCard>`
		}
	]
];

const DividerComponent = () => {
	return (
		<DefaultComponent
			title={'DBCard'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default DividerComponent;
