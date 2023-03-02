import { DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/infotext';
import { DBInfotextProps } from '../../../../../output/react/src/components/infotext/model';

const getInfotext = ({ variant, size, icon }: DBInfotextProps) => (
	<DBInfotext variant={variant} size={size} icon={icon}>
		Infotext
	</DBInfotext>
);

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{ example: getInfotext({ icon: 'account' }) },
		{ example: getInfotext({ variant: 'critical' }) },
		{ example: getInfotext({ variant: 'information' }) },
		{ example: getInfotext({ variant: 'success' }) },
		{ example: getInfotext({ variant: 'warning' }) }
	],
	[{ example: getInfotext({}) }, { example: getInfotext({ size: 'small' }) }]
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
