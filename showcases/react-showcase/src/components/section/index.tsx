import { DBSection } from '../../../../../output/react/src';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Full',
				style: { width: '100%' },
				example: (
					<DBSection className="db-bg-information-light">
						Content
					</DBSection>
				)
			},
			{
				name: 'Medium',
				style: { width: '100%' },
				example: (
					<DBSection
						className="db-bg-information-light"
						variant="medium">
						Content
					</DBSection>
				)
			},
			{
				name: 'Large',
				style: { width: '100%' },
				example: (
					<DBSection
						className="db-bg-information-light"
						variant="large">
						Content
					</DBSection>
				)
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: '(Default) Medium',
				example: (
					<DBSection className="db-bg-information-light">
						Content
					</DBSection>
				)
			},
			{
				name: 'Large',
				example: (
					<DBSection className="db-bg-information-light" size="large">
						Content
					</DBSection>
				)
			},
			{
				name: 'Small',
				example: (
					<DBSection className="db-bg-information-light" size="small">
						Content
					</DBSection>
				)
			}
		]
	}
];

const SectionComponent = () => {
	return (
		<DefaultComponent
			title={'DBSection'}
			variants={variants}></DefaultComponent>
	);
};

export default SectionComponent;
