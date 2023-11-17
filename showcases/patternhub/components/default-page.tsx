import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
	DBBrand,
	DBButton,
	DBHeader,
	DBPage,
	DBSection
} from '../../../output/react/src';
import StaticContent from './static-content';
import Navigation from './navigation';
import VersionSwitcher from './version-switcher';

const DefaultPage = ({ children }: any) => {
	const [fullscreen, setFullscreen] = useState<boolean>(false);
	const [noH1, setNoH1] = useState<boolean>(false);
	const [properties, setProperties] = useState<boolean>(false);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		if (router.query) {
			setFullscreen(router.query.fullscreen === 'true');
			setNoH1(router.query.noh1 === 'true');
			setProperties(router.query.properties === 'true');
		}
	}, [router]);

	return (
		<StaticContent>
			{router.isReady && fullscreen && (
				<div
					className={`${noH1 ? 'noh1' : ''} ${
						properties ? 'is-properties' : ''
					}`}>
					{children}
				</div>
			)}
			{router.isReady && !fullscreen && (
				<DBPage
					className="db-bg-neutral-0"
					fadeIn
					type="fixedHeaderFooter"
					slotHeader={
						<DBHeader
							drawerOpen={drawerOpen}
							onToggle={setDrawerOpen}
							slotBrand={
								<DBBrand
									imgSrc="https://db-ui.github.io/images/db_logo.svg"
									title={process.env.NEXT_PUBLIC_APP_NAME}
									anchorChildren>
									{process.env.NEXT_PUBLIC_APP_NAME}
								</DBBrand>
							}
							slotMetaNavigation={<VersionSwitcher />}
							slotCallToAction={
								/* TODO: Use DBSearchBar in future */
								<DBButton icon="search" variant="text" noText>
									Search
								</DBButton>
							}
							slotActionBar={
								<>
									<DBButton
										icon="account"
										variant="text"
										noText>
										Profile
									</DBButton>
									<DBButton
										icon="alert"
										variant="text"
										noText>
										Notification
									</DBButton>
									<DBButton icon="help" variant="text" noText>
										Help
									</DBButton>
								</>
							}>
							<Navigation />
						</DBHeader>
					}>
					<DBSection size="none" variant="large">
						{children}
					</DBSection>
				</DBPage>
			)}
		</StaticContent>
	);
};

export default DefaultPage;
