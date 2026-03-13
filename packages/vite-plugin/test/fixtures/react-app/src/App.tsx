import { DBButton, DBInput } from '@components';
import './index.css';

function App() {
	return (
		<div data-color="cyan" data-density="expressive" className="p-fix-md">
			<DBButton icon="person" variant="brand">
				Click me
			</DBButton>
			<DBInput type="text" />
		</div>
	);
}

export default App;
