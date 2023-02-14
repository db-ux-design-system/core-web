import { DBInfotext } from '../../../../../output/react/src';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive',
				example: <DBInfotext icon="account">Infotext</DBInfotext>
			},
			{
				name: 'Critical',
				example: <DBInfotext variant="critical">Infotext</DBInfotext>
			},
			{
				name: 'Information',
				example: <DBInfotext variant="information">Infotext</DBInfotext>
			},
			{
				name: 'Success',
				example: <DBInfotext variant="success">Infotext</DBInfotext>
			},
			{
				name: 'Warning',
				example: <DBInfotext variant="warning">Infotext</DBInfotext>
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: '(Default) Medium',
				example: <DBInfotext>Infotext</DBInfotext>
			},
			{
				name: 'Small',
				example: <DBInfotext size="small">Infotext</DBInfotext>
			}
		]
	}
];

const InfotextComponent = () => {
	return (
		<DefaultComponent
			title={'DBInfotext'}
			variants={variants}></DefaultComponent>
	);
};

export default InfotextComponent;
