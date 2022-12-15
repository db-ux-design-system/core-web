import Header from './sections/Header';
import Main from './sections/Main';
import Search from './sections/Search';
import Footer from './sections/Footer';

function App() {
	return (
		<div className="root flex flex-col gap-res-md">
			<div
				className="flex flex-col gap-res-md mx-auto max-w-[640px]
			 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
				<Header />

				<h1 className="mx-auto text-white text-center px-fix-xl">
					Klimaschutz kann auch
					<br /> einfach sein:
				</h1>

				<Search />

				<Main />
			</div>

			<Footer />
		</div>
	);
}

export default App;
