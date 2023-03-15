import { DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/infotext';
import { type DBInfotextProps } from '../../../../../output/react/src/components/infotext/model';
import { getVariants } from '../../utils';

const getInfotext = ({ variant, size, icon, children }: DBInfotextProps) => (
	<DBInfotext variant={variant} size={size} icon={icon}>
		{children}
	</DBInfotext>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getInfotext({ children: exampleName, icon: 'account' }),
			code: '<DBInfotext icon="account">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({
				children: exampleName,
				variant: 'critical'
			}),
			code: '<DBInfotext variant="critical">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({
				children: exampleName,
				variant: 'informational'
			}),
			code: '<DBInfotext variant="informational">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({
				children: exampleName,
				variant: 'successful'
			}),
			code: '<DBInfotext variant="successful">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({ children: exampleName, variant: 'warning' }),
			code: '<DBInfotext variant="warning">Infotext</DBInfotext>'
		}
	],
	[
		{
			example: getInfotext({ children: exampleName }),
			code: '<DBInfotext>Infotext</DBInfotext>'
		},
		{
			example: getInfotext({ children: exampleName, size: 'small' }),
			code: '<DBInfotext size="small">Infotext</DBInfotext>'
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
