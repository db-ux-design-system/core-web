import { DBAccordion } from '../../../../../output/react/src';
import DefaultComponent, { DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Test',
		examples: [
			{
				name: 'Test',
				example: <DBAccordion summary="test">Test</DBAccordion>
			}
		]
	}
];

const AccordionComponent = () => {
	return (
		<DefaultComponent
			title={'DBAccordion'}
			variants={variants}></DefaultComponent>
	);
};

export default AccordionComponent;
