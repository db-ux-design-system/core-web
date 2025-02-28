import {
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '@db-ux/react-core-components/src';
import FormInputs from '../form/input';
import FormComponent from '../form';
import FormTextareas from '../form/textarea';
import FormSelects from '../form/select';
import FormCheckboxes from '../form/checkbox';
import FormRadios from '../form/radio';

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
		</DBTabs>
	);
};

export default Home;
