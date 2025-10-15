import {
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '@db-ux/react-core-components/src';
import FormComponent from '../form';
import FormCheckboxes from '../form/checkbox';
import FormCustomSelects from '../form/custom-select';
import FormInputs from '../form/input';
import FormRadios from '../form/radio';
import FormSelects from '../form/select';
import FormTextareas from '../form/textarea';

const Home = () => {
	return (
		<DBTabs data-testid="tabs">
			<DBTabList>
				<DBTabItem>All</DBTabItem>
				<DBTabItem data-testid="tab-inputs">Input</DBTabItem>
				<DBTabItem data-testid="tab-textareas">Textarea</DBTabItem>
				<DBTabItem data-testid="tab-selects">Select</DBTabItem>
				<DBTabItem data-testid="tab-checkboxes">Checkbox</DBTabItem>
				<DBTabItem data-testid="tab-radios">Radios</DBTabItem>
				<DBTabItem data-testid="tab-custom-selects">
					Custom Selects
				</DBTabItem>
			</DBTabList>
			<DBTabPanel>
				<FormComponent />
			</DBTabPanel>
			<DBTabPanel>
				<FormInputs />
			</DBTabPanel>
			<DBTabPanel>
				<FormTextareas />
			</DBTabPanel>
			<DBTabPanel>
				<FormSelects />
			</DBTabPanel>
			<DBTabPanel>
				<FormCheckboxes />
			</DBTabPanel>
			<DBTabPanel>
				<FormRadios />
			</DBTabPanel>
			<DBTabPanel>
				<FormCustomSelects />
			</DBTabPanel>
		</DBTabs>
	);
};

export default Home;
