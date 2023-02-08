import { DBSection } from '../../../output/react/src';
import Header from './sections/Header';
import Main from './sections/Main';
import Search from './sections/Search';
import Footer from './sections/Footer';

function App() {
	return (
		<div className="root flex flex-col gap-res-md">
			<div className="w-full m:hidden">
				<Header />
			</div>
			<DBSection variant="medium" size="none">
				<div className="flex flex-col gap-res-md">
					<div className="w-full hidden m:block">
						<Header />
					</div>

					<h1 className="mx-auto text-white text-center px-fix-xl">
						Klimaschutz kann auch
						<br /> einfach sein:
					</h1>

					<Search />

					<Main />
				</div>
			</DBSection>

			<Footer />
		</div>
	);
}

export default App;
