import WelcomeCard from './WelcomeCard';
import Offers from './Offers';
import Services from './Services';

const Main = () => (
	<main className="flex flex-col gap-res-md px-fix-md">
		<WelcomeCard />
		<Offers />
		<Services />
	</main>
);

export default Main;
