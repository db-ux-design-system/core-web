import { useRouter } from 'next/router';
import DefaultPage from '../../components/default-page';
import { DBCard } from '../../components/card';

const ShowcasesPage = () => {
	const router = useRouter();

	const consoleLog = () => {
		console.log('Angular');
	};

	return (
		<DefaultPage>
			<h1>Showcases</h1>
			<div>
				<DBCard variant="ia" onClick={consoleLog}>
					Angular
				</DBCard>
				<button onClick={consoleLog}>test</button>
			</div>
		</DefaultPage>
	);
};

export default ShowcasesPage;
