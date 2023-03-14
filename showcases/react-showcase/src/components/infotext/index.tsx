import { DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/infotext';
import { type DBInfotextProps } from '../../../../../output/react/src/components/infotext/model';

const getInfotext = ({ variant, size, icon }: DBInfotextProps) => (
	<DBInfotext variant={variant} size={size} icon={icon}>
		Infotext
	</DBInfotext>
);

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{
			example: getInfotext({ icon: 'account' }),
			code: '<DBInfotext icon="account">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({ variant: 'critical' }),
			code: '<DBInfotext variant="critical">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({ variant: 'informational' }),
			code: '<DBInfotext variant="informational">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({ variant: 'successful' }),
			code: '<DBInfotext variant="successful">Infotext</DBInfotext>'
		},
		{
			example: getInfotext({ variant: 'warning' }),
			code: '<DBInfotext variant="warning">Infotext</DBInfotext>'
		}
	],
	[
		{
			example: getInfotext({}),
			code: '<DBInfotext>Infotext</DBInfotext>'
		},
		{
			example: getInfotext({ size: 'small' }),
			code: '<DBInfotext size="small">Infotext</DBInfotext>'
		}
	]
];

const variants = defaultComponentVariants.map((variant, index) => ({
	...variant,
	examples: variant.examples.map((example, exampleIndex) => ({
		...example,
		...exampleMatrix[index][exampleIndex]
	}))
}));

const InfotextComponent = () => {
	return (
		<DefaultComponent
			title={'DBInfotext'}
			variants={variants}></DefaultComponent>
	);
};

export default InfotextComponent;
