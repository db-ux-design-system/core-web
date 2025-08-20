import { useRouter } from 'next/router';
import { DBSelect } from '../../../../output/react/src';
import { FRAMEWORK_OPTIONS, type Framework } from './data';
import { useFramework } from '../framework-context';

const FrameworkSwitcher = () => {
	const { framework, setFramework } = useFramework();

	return (
		<DBSelect
			className="framework-switcher"
			label="Framework"
			variant="floating"
			value={framework}
			onChange={(event) => {
				setFramework(event.target.value as Framework);
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