import { DBCodeDocs } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [];

const CodeDocsComponent = () => {
	return (
		<DefaultComponent
			title={'DBCodeDocs'}
			variants={variants}></DefaultComponent>
	);
};

export default CodeDocsComponent;
