import Link from 'next/link';
import { ArcherContainer, ArcherElement } from 'react-archer';
import { 
	DBButton, 
	DBCard, 
	DBLink, 
	DBSection, 
	DBBadge,
	DBInput,
	DBSelect,
	DBNotification 
} from '../../../../output/react/src';
import DefaultPage from '../../components/default-page';

const GettingStartedOverview = () => {
	return (
		<DefaultPage>
			<h1>Getting Started with DB UX Design System</h1>
			<p>
				Welcome to the DB UX Design System! This guide will help you understand 
				the key features and how to integrate our design system into your project.
			</p>

			<DBSection>
				<h2>What is the DB UX Design System?</h2>
				<p>
					The DB UX Design System is a comprehensive collection of reusable components, 
					design tokens, and guidelines that help you build consistent, accessible, 
					and beautiful user interfaces for Deutsche Bahn applications.
				</p>

				<div className="grid-3-columns" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h3>🎨 Design Tokens</h3>
							<p>Consistent colors, typography, spacing, and more across all platforms.</p>
							<Link href="/foundations/colors">
								<DBLink>Explore Colors →</DBLink>
							</Link>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h3>🧩 Components</h3>
							<p>Pre-built, accessible UI components for faster development.</p>
							<Link href="/components">
								<DBLink>Browse Components →</DBLink>
							</Link>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h3>🚀 Framework Support</h3>
							<p>Available for Angular, React, Vue, and Web Components.</p>
							<Link href="/getting-started/installation">
								<DBLink>Get Started →</DBLink>
							</Link>
						</div>
					</DBCard>
				</div>
			</DBSection>

			<DBSection>
				<h2>Quick Start Decision Tree</h2>
				<p>
					Choose your path based on your technology stack and requirements.
				</p>
				
				<ArcherContainer
					strokeColor="var(--db-adaptive-on-bg-basic-emphasis-60-default)"
					endMarker={true}
					endShape={{ arrow: { arrowLength: 5, arrowThickness: 5 } }}>
					<div className="decision-tree" data-density="functional">
						<div className="decision-tree-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
							<ArcherElement
								id="start"
								relations={[
									{
										targetId: 'framework-choice',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<DBCard elevationLevel="2">
									<div style={{ padding: '1rem', textAlign: 'center' }}>
										<p><strong>What technology are you using?</strong></p>
									</div>
								</DBCard>
							</ArcherElement>
						</div>

						<div className="decision-tree-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
							<ArcherElement
								id="framework-choice"
								relations={[
									{
										targetId: 'angular-path',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									},
									{
										targetId: 'react-path',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									},
									{
										targetId: 'vue-path',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									},
									{
										targetId: 'other-path',
										sourceAnchor: 'bottom',
										targetAnchor: 'top'
									}
								]}>
								<div></div>
							</ArcherElement>
						</div>

						<div className="decision-tree-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem' }}>
							<ArcherElement id="angular-path">
								<Link href="/getting-started/angular">
									<DBCard 
										className="db-color-red" 
										role="button"
										elevationLevel="3"
										behavior="interactive">
										<div style={{ padding: '1rem', textAlign: 'center' }}>
											<h4>Angular</h4>
											<p>TypeScript components with full Angular integration</p>
											<DBLink>Get Started →</DBLink>
										</div>
									</DBCard>
								</Link>
							</ArcherElement>

							<ArcherElement id="react-path">
								<Link href="/getting-started/react">
									<DBCard 
										className="db-color-blue" 
										role="button"
										elevationLevel="3"
										behavior="interactive">
										<div style={{ padding: '1rem', textAlign: 'center' }}>
											<h4>React</h4>
											<p>JSX components with hooks support</p>
											<DBLink>Get Started →</DBLink>
										</div>
									</DBCard>
								</Link>
							</ArcherElement>

							<ArcherElement id="vue-path">
								<Link href="/getting-started/vue">
									<DBCard 
										className="db-color-green" 
										role="button"
										elevationLevel="3"
										behavior="interactive">
										<div style={{ padding: '1rem', textAlign: 'center' }}>
											<h4>Vue</h4>
											<p>Vue 3 components with Composition API</p>
											<DBLink>Get Started →</DBLink>
										</div>
									</DBCard>
								</Link>
							</ArcherElement>

							<ArcherElement id="other-path">
								<Link href="/getting-started/web-components">
									<DBCard 
										className="db-color-yellow" 
										role="button"
										elevationLevel="3"
										behavior="interactive">
										<div style={{ padding: '1rem', textAlign: 'center' }}>
											<h4>Other / Vanilla</h4>
											<p>Web Components or HTML/CSS only</p>
											<DBLink>Get Started →</DBLink>
										</div>
									</DBCard>
								</Link>
							</ArcherElement>
						</div>
					</div>
				</ArcherContainer>
			</DBSection>

			<DBSection>
				<h2>Live Component Preview</h2>
				<p>
					Here's a quick preview of some components in action. Try interacting with them!
				</p>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
					<DBCard elevationLevel="1">
						<div style={{ padding: '1rem' }}>
							<h4>Buttons</h4>
							<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
								<DBButton variant="primary">Primary</DBButton>
								<DBButton variant="secondary">Secondary</DBButton>
								<DBButton variant="ghost">Ghost</DBButton>
								<DBButton disabled>Disabled</DBButton>
							</div>
						</div>
					</DBCard>

					<DBCard elevationLevel="1">
						<div style={{ padding: '1rem' }}>
							<h4>Form Elements</h4>
							<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
								<DBInput placeholder="Enter your name" label="Name" />
								<DBSelect>
									<option value="">Choose an option</option>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
								</DBSelect>
							</div>
						</div>
					</DBCard>
				</div>

				<div style={{ marginTop: '1rem' }}>
					<DBCard elevationLevel="1">
						<div style={{ padding: '1rem' }}>
							<h4>Notifications & Badges</h4>
							<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
								<div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
									<span>Status badges:</span>
									<DBBadge>New</DBBadge>
									<DBBadge semantic="successful">Success</DBBadge>
									<DBBadge semantic="warning">Warning</DBBadge>
									<DBBadge semantic="critical">Error</DBBadge>
								</div>
								<DBNotification 
									semantic="informational" 
									behavior="inline">
									This is an informational notification showing how components work together.
								</DBNotification>
							</div>
						</div>
					</DBCard>
				</div>
			</DBSection>

			<DBSection>
				<h2>Next Steps</h2>
				<p>
					Ready to start building? Choose your framework and follow the installation guide.
				</p>
				
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
					<Link href="/getting-started/installation">
						<DBCard 
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>📦 Installation Guide</h4>
								<p>Learn how to install and configure the design system in your project.</p>
								<DBLink>Start Installing →</DBLink>
							</div>
						</DBCard>
					</Link>

					<Link href="/components">
						<DBCard 
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>🔍 Explore Components</h4>
								<p>Browse all available components with examples and documentation.</p>
								<DBLink>Browse Library →</DBLink>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>
		</DefaultPage>
	);
};

export default GettingStartedOverview;