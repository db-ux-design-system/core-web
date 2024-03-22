import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import {
	DBBrand,
	DBButton,
	DBHeader,
	DBPage,
	DBSection
} from '../../../output/react/src';
import Navigation from './navigation';
import VersionSwitcher from './version-switcher';

const DefaultPage = ({ children }: any) => {
	const [fullscreen, setFullscreen] = useState<boolean>(false);
	const [noH1, setNoH1] = useState<boolean>(false);
	const [properties, setProperties] = useState<boolean>(false);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [lastScroll, setLastScroll] = useState<string>();
	const router = useRouter();

	useEffect(() => {
		hljs.highlightAll();
	}, []);

	useEffect(() => {
		if (router.query) {
			if (router.query.fullscreen) {
				setFullscreen(router.query.fullscreen === 'true');
			}

			if (router.query.noh1) {
				setNoH1(router.query.noh1 === 'true');
			}

			if (router.query.properties) {
				setProperties(router.query.properties === 'true');
			}

			if (router.query.current) {
				const current: string = Array.isArray(router.query.current)
					? router.query.current[0]
					: router.query.current;
				if (lastScroll !== current) {
					setLastScroll(current);
					document
						.querySelector(`#${current}`)
						?.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}
	}, [router]);

	return (
		<>
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
							slotCallToAction={
								<DBButton icon="search" variant="text" noText>
									Search
								</DBButton>
							}
							slotActionBar={<VersionSwitcher />}>
							<Navigation />
						</DBHeader>
					}>
					<DBSection size="none" variant="large">
						{children}
					</DBSection>
				</DBPage>
			)}
		</>
	);
};

export default dynamic(async () => DefaultPage, {
	ssr: false
});
