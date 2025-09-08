import Link from 'next/link';
import { DBCard, DBLink, DBSection, DBNotification, DBTabs, DBTabItem } from '../../../../output/react/src';
import DefaultPage from '../../components/default-page';

const GettingStartedInstallation = () => {
	return (
		<DefaultPage>
			<h1>Installation Guide</h1>
			<p>
				Learn how to install and set up the DB UX Design System in your project. 
				Choose the approach that best fits your technology stack.
			</p>

			<DBSection>
				<h2>Prerequisites</h2>
				<DBCard elevationLevel="1">
					<div style={{ padding: '1rem' }}>
						<ul>
							<li><strong>Node.js 18+</strong> - Required for package management</li>
							<li><strong>Package Manager</strong> - npm, yarn, or pnpm</li>
							<li><strong>Modern Browser</strong> - Support for CSS Grid and Custom Properties</li>
						</ul>
					</div>
				</DBCard>
			</DBSection>

			<DBSection>
				<h2>Installation Methods</h2>
				
				<DBTabs>
					<DBTabItem name="npm-install" label="NPM Package">
						<div style={{ padding: '1rem 0' }}>
							<h3>Install via NPM (Recommended)</h3>
							<p>The easiest way to get started is by installing the packages you need:</p>
							
							<div style={{ marginBottom: '1rem' }}>
								<h4>Core Styles (Required)</h4>
								<pre style={{ 
									background: 'var(--db-adaptive-bg-basic-level-1-default)', 
									padding: '1rem', 
									borderRadius: '4px',
									overflow: 'auto'
								}}>
									<code>{`npm install @db-ux/core-foundations`}</code>
								</pre>
							</div>

							<div style={{ marginBottom: '1rem' }}>
								<h4>Components (Choose your framework)</h4>
								<pre style={{ 
									background: 'var(--db-adaptive-bg-basic-level-1-default)', 
									padding: '1rem', 
									borderRadius: '4px',
									overflow: 'auto'
								}}>
									<code>{`# For React
npm install @db-ux/react-core-components

# For Angular
npm install @db-ux/ngx-core-components

# For Vue
npm install @db-ux/v-core-components

# For Web Components
npm install @db-ux/wc-core-components`}</code>
								</pre>
							</div>

							<DBNotification semantic="informational" behavior="inline">
								All framework packages include the core foundations automatically.
							</DBNotification>
						</div>
					</DBTabItem>

					<DBTabItem name="cdn" label="CDN">
						<div style={{ padding: '1rem 0' }}>
							<h3>Use CDN Links</h3>
							<p>For quick prototyping or simple projects, you can use our CDN:</p>
							
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Core styles -->
<link rel="stylesheet" href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css">

<!-- Component styles -->
<link rel="stylesheet" href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css">

<!-- Web Components (optional) -->
<script type="module" src="https://unpkg.com/@db-ux/wc-core-components/dist/db-ui-elements.esm.js"></script>`}</code>
							</pre>

							<DBNotification semantic="warning" behavior="inline">
								CDN links are best for prototyping. For production, use package managers for better version control.
							</DBNotification>
						</div>
					</DBTabItem>

					<DBTabItem name="download" label="Download">
						<div style={{ padding: '1rem 0' }}>
							<h3>Download Files</h3>
							<p>You can download the compiled CSS and JS files directly:</p>
							
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
								<DBCard elevationLevel="2">
									<div style={{ padding: '1rem' }}>
										<h4>Foundations CSS</h4>
										<p>Contains design tokens, colors, typography, and layout utilities.</p>
										<DBLink href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css" target="_blank">
											Download CSS →
										</DBLink>
									</div>
								</DBCard>

								<DBCard elevationLevel="2">
									<div style={{ padding: '1rem' }}>
										<h4>Component CSS</h4>
										<p>Styles for all UI components like buttons, inputs, cards, etc.</p>
										<DBLink href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css" target="_blank">
											Download CSS →
										</DBLink>
									</div>
								</DBCard>
							</div>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Basic Setup</h2>
				<p>After installation, you need to include the CSS in your project:</p>

				<div style={{ marginBottom: '1rem' }}>
					<h4>In your HTML</h4>
					<pre style={{ 
						background: 'var(--db-adaptive-bg-basic-level-1-default)', 
						padding: '1rem', 
						borderRadius: '4px',
						overflow: 'auto'
					}}>
						<code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My DB App</title>
    
    <!-- DB UX Design System -->
    <link rel="stylesheet" href="path/to/db-ui-foundations.css">
    <link rel="stylesheet" href="path/to/db-ui-components.css">
</head>
<body>
    <!-- Your app content -->
</body>
</html>`}</code>
					</pre>
				</div>

				<div style={{ marginBottom: '1rem' }}>
					<h4>In your CSS/SCSS</h4>
					<pre style={{ 
						background: 'var(--db-adaptive-bg-basic-level-1-default)', 
						padding: '1rem', 
						borderRadius: '4px',
						overflow: 'auto'
					}}>
						<code>{`/* Import foundations first */
@import '@db-ux/core-foundations/build/styles/db-ui-foundations.css';

/* Then import components */
@import '@db-ux/core-components/build/styles/db-ui-components.css';

/* Your custom styles */`}</code>
					</pre>
				</div>
			</DBSection>

			<DBSection>
				<h2>Framework-Specific Setup</h2>
				<p>
					Each framework has specific setup requirements. Choose your framework for detailed instructions:
				</p>
				
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
					<Link href="/getting-started/angular">
						<DBCard 
							className="db-color-red"
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>Angular Setup</h4>
								<p>Module imports, dependency injection, and TypeScript configuration.</p>
								<DBLink>Setup Angular →</DBLink>
							</div>
						</DBCard>
					</Link>

					<Link href="/getting-started/react">
						<DBCard 
							className="db-color-blue"
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>React Setup</h4>
								<p>Component imports, hooks, and bundler configuration.</p>
								<DBLink>Setup React →</DBLink>
							</div>
						</DBCard>
					</Link>

					<Link href="/getting-started/vue">
						<DBCard 
							className="db-color-green"
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>Vue Setup</h4>
								<p>Plugin registration, composition API, and Vite configuration.</p>
								<DBLink>Setup Vue →</DBLink>
							</div>
						</DBCard>
					</Link>

					<Link href="/getting-started/web-components">
						<DBCard 
							className="db-color-yellow"
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>Web Components</h4>
								<p>Custom elements, polyfills, and vanilla JavaScript usage.</p>
								<DBLink>Setup Web Components →</DBLink>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>

			<DBSection>
				<h2>Verify Installation</h2>
				<p>
					Test your setup with a simple example:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`<button class="db-button" data-variant="primary">
    Hello DB UX Design System!
</button>`}</code>
				</pre>

				<p style={{ marginTop: '1rem' }}>
					If the button appears with DB styling, you're all set! If not, check:
				</p>
				<ul>
					<li>CSS files are properly linked</li>
					<li>No conflicting styles are overriding DB styles</li>
					<li>Browser developer tools for any error messages</li>
				</ul>
			</DBSection>

			<DBSection>
				<h2>Next Steps</h2>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
					<Link href="/getting-started/overview">
						<DBCard 
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>← Back to Overview</h4>
								<p>Return to the getting started overview</p>
							</div>
						</DBCard>
					</Link>

					<Link href="/components">
						<DBCard 
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>Explore Components →</h4>
								<p>Browse and learn about all available components</p>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>
		</DefaultPage>
	);
};

export default GettingStartedInstallation;