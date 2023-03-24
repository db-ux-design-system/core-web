import { DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/infotext.json';
import { type DBInfotextProps } from '../../../../../output/react/src/components/infotext/model';
import { getVariants } from '../data';

const getInfotext = ({ variant, size, icon, children }: DBInfotextProps) => (
	<DBInfotext variant={variant} size={size} icon={icon}>
		{children}
	</DBInfotext>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getInfotext({ children: exampleName, icon: 'account' })
		},
		{
			example: getInfotext({
				children: exampleName,
				variant: 'critical'
			})
		},
		{
			example: getInfotext({
				children: exampleName,
				variant: 'informational'
			})
		},
		{
			example: getInfotext({
				children: exampleName,
				variant: 'successful'
			})
		},
		{
			example: getInfotext({ children: exampleName, variant: 'warning' })
		}
	],
	[
		{
			example: getInfotext({ children: exampleName })
		},
		{
			example: getInfotext({ children: exampleName, size: 'small' })
		}
	]
];

const InfotextComponent = () => {
	return (
		<DefaultComponent
			title={'DBInfotext'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default InfotextComponent;
