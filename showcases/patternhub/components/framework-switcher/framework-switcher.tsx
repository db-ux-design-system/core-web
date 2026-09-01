import { DBSelect } from '../../../../output/react/src';
import { useFramework } from '../framework-context';
import { type Framework, FRAMEWORK_OPTIONS } from './data';

const FrameworkSwitcher = () => {
	const { framework, setFramework } = useFramework();

	return (
		<DBSelect
			className="framework-switcher"
			label="Framework"
			variant="floating"
			value={framework}
			onChange={(event) => {
				const { value } = event.target;
				if (['angular', 'html', 'react', 'vue'].includes(value)) {
					setFramework(value as Framework);
				}
			}}>
			{FRAMEWORK_OPTIONS.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</DBSelect>
	);
};

export default FrameworkSwitcher;
