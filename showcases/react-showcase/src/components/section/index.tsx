import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Full',
				style: { width: '100%' },
				example: (
					<DBSection className="db-bg-information">Content</DBSection>
				),
				code: '<DBSection>Content</DBSection>'
			},
			{
				name: 'Medium',
				style: { width: '100%' },
				example: (
					<DBSection className="db-bg-information" variant="medium">
						Content
					</DBSection>
				),
				code: '<DBSection variant="medium">Content</DBSection>'
			},
			{
				name: 'Large',
				style: { width: '100%' },
				example: (
					<DBSection className="db-bg-information" variant="large">
						Content
					</DBSection>
				),
				code: '<DBSection variant="large">Content</DBSection>'
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: '(Default) Medium',
				example: (
					<DBSection className="db-bg-information">Content</DBSection>
				),
				code: '<DBSection>Content</DBSection>'
			},
			{
				name: 'Large',
				example: (
					<DBSection className="db-bg-information" size="large">
						Content
					</DBSection>
				),
				code: '<DBSection size="medium">Content</DBSection>'
			},
			{
				name: 'Small',
				example: (
					<DBSection className="db-bg-information" size="small">
						Content
					</DBSection>
				),
				code: '<DBSection size="small">Content</DBSection>'
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
