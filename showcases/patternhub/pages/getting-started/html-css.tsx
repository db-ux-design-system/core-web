import Link from 'next/link';
import { DBCard, DBLink, DBSection, DBNotification, DBTabs, DBTabItem } from '../../../../output/react/src';
import DefaultPage from '../../components/default-page';

const GettingStartedHtmlCss = () => {
	return (
		<DefaultPage>
			<h1>Getting Started with HTML & CSS</h1>
			<p>
				Learn how to use DB UX Design System with plain HTML and CSS for maximum compatibility and lightweight integration.
			</p>

			<DBSection>
				<h2>Installation</h2>
				<p>
					For HTML and CSS only usage, you just need the foundation and component styles:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`# Install via NPM
npm install @db-ux/core-foundations @db-ux/core-components

# Or use CDN (see CDN section below)`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Setup Methods</h2>
				
				<DBTabs>
					<DBTabItem name="cdn" label="CDN (Quickest)">
						<div style={{ padding: '1rem 0' }}>
							<h3>CDN Links</h3>
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
    <title>DB UX Design System</title>
    
    <!-- DB UX Foundation Styles -->
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css">
    
    <!-- DB UX Component Styles -->
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css">
    
    <!-- Your custom styles -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your content here -->
</body>
</html>`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="download" label="Download Files">
						<div style={{ padding: '1rem 0' }}>
							<h3>Download and Host</h3>
							<p>Download the CSS files and host them on your server:</p>
							<ol>
								<li>Download <DBLink href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css" target="_blank">db-ui-foundations.css</DBLink></li>
								<li>Download <DBLink href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css" target="_blank">db-ui-components.css</DBLink></li>
								<li>Place them in your project's CSS directory</li>
								<li>Link them in your HTML</li>
							</ol>
							
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Link to your local files -->
<link rel="stylesheet" href="css/db-ui-foundations.css">
<link rel="stylesheet" href="css/db-ui-components.css">
<link rel="stylesheet" href="css/styles.css">`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="npm-build" label="NPM + Build">
						<div style={{ padding: '1rem 0' }}>
							<h3>NPM with Build Process</h3>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`/* styles.css */
@import '@db-ux/core-foundations/build/styles/db-ui-foundations.css';
@import '@db-ux/core-components/build/styles/db-ui-components.css';

/* Your custom styles */
body {
    font-family: var(--db-base-font-family);
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Basic Component Usage</h2>
				<p>
					Use DB UX components with simple HTML and CSS classes:
				</p>

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
    <title>DB UX Demo</title>
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css">
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css">
</head>
<body>
    <div class="container" style="max-width: 800px; margin: 0 auto; padding: 2rem;">
        <h1>Welcome to DB UX Design System</h1>
        
        <!-- Buttons -->
        <section>
            <h2>Buttons</h2>
            <button class="db-button" data-variant="primary">Primary Button</button>
            <button class="db-button" data-variant="secondary">Secondary Button</button>
            <button class="db-button" data-variant="ghost">Ghost Button</button>
            <button class="db-button" disabled>Disabled Button</button>
        </section>
        
        <!-- Form Elements -->
        <section>
            <h2>Form Elements</h2>
            <div class="db-input">
                <label for="name" class="db-input__label">Your Name</label>
                <input type="text" id="name" class="db-input__input" placeholder="Enter your name">
            </div>
            
            <div class="db-select">
                <label for="role" class="db-select__label">Role</label>
                <select id="role" class="db-select__select">
                    <option value="">Choose a role</option>
                    <option value="admin">Administrator</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
            </div>
            
            <div class="db-textarea">
                <label for="message" class="db-textarea__label">Message</label>
                <textarea id="message" class="db-textarea__textarea" placeholder="Enter your message"></textarea>
            </div>
        </section>
        
        <!-- Cards -->
        <section>
            <h2>Cards</h2>
            <div class="db-card" data-elevation-level="2">
                <div style="padding: 1rem;">
                    <h3>Card Title</h3>
                    <p>This is a card component with elevation level 2.</p>
                    <button class="db-button" data-variant="primary" data-size="small">Action</button>
                </div>
            </div>
        </section>
        
        <!-- Notifications -->
        <section>
            <h2>Notifications</h2>
            <div class="db-notification" data-semantic="informational" data-behavior="inline">
                This is an informational notification.
            </div>
            
            <div class="db-notification" data-semantic="successful" data-behavior="inline">
                Success! Your action was completed.
            </div>
            
            <div class="db-notification" data-semantic="warning" data-behavior="inline">
                Warning: Please review your input.
            </div>
            
            <div class="db-notification" data-semantic="critical" data-behavior="inline">
                Error: Something went wrong.
            </div>
        </section>
        
        <!-- Badges -->
        <section>
            <h2>Badges</h2>
            <span class="db-badge">Default</span>
            <span class="db-badge" data-semantic="successful">Success</span>
            <span class="db-badge" data-semantic="warning">Warning</span>
            <span class="db-badge" data-semantic="critical">Error</span>
        </section>
    </div>
</body>
</html>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Adding Interactivity with JavaScript</h2>
				<p>
					Enhance your HTML components with JavaScript for dynamic behavior:
				</p>

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
    <title>Interactive DB UX Demo</title>
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css">
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css">
</head>
<body>
    <div class="container" style="max-width: 600px; margin: 0 auto; padding: 2rem;">
        <h1>Interactive Form Demo</h1>
        
        <form id="user-form">
            <!-- Name Input -->
            <div class="db-input">
                <label for="user-name" class="db-input__label">Name *</label>
                <input 
                    type="text" 
                    id="user-name" 
                    name="name"
                    class="db-input__input" 
                    placeholder="Enter your name"
                    required>
                <span class="db-input__message" id="name-error" style="display: none;"></span>
            </div>
            
            <!-- Email Input -->
            <div class="db-input">
                <label for="user-email" class="db-input__label">Email *</label>
                <input 
                    type="email" 
                    id="user-email" 
                    name="email"
                    class="db-input__input" 
                    placeholder="Enter your email"
                    required>
                <span class="db-input__message" id="email-error" style="display: none;"></span>
            </div>
            
            <!-- Role Select -->
            <div class="db-select">
                <label for="user-role" class="db-select__label">Role *</label>
                <select id="user-role" name="role" class="db-select__select" required>
                    <option value="">Choose a role</option>
                    <option value="admin">Administrator</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
                <span class="db-select__message" id="role-error" style="display: none;"></span>
            </div>
            
            <!-- Submit Button -->
            <button type="submit" class="db-button" data-variant="primary" id="submit-btn">
                Submit
            </button>
        </form>
        
        <!-- Success Message -->
        <div id="success-message" class="db-notification" data-semantic="successful" data-behavior="inline" style="display: none; margin-top: 1rem;">
            Form submitted successfully!
        </div>
        
        <!-- User Preview Card -->
        <div id="user-preview" class="db-card" data-elevation-level="2" style="margin-top: 2rem; display: none;">
            <div style="padding: 1rem;">
                <h3>User Preview</h3>
                <p><strong>Name:</strong> <span id="preview-name"></span></p>
                <p><strong>Email:</strong> <span id="preview-email"></span></p>
                <p><strong>Role:</strong> <span id="preview-role"></span></p>
            </div>
        </div>
    </div>

    <script>
        // Form handling
        const form = document.getElementById('user-form');
        const submitBtn = document.getElementById('submit-btn');
        const successMessage = document.getElementById('success-message');
        const userPreview = document.getElementById('user-preview');
        
        // Form validation
        const validateField = (field, errorElementId, validationFn) => {
            const errorElement = document.getElementById(errorElementId);
            const error = validationFn(field.value);
            
            if (error) {
                field.parentElement.setAttribute('data-invalid', '');
                errorElement.textContent = error;
                errorElement.style.display = 'block';
                return false;
            } else {
                field.parentElement.removeAttribute('data-invalid');
                errorElement.style.display = 'none';
                return true;
            }
        };
        
        // Validation rules
        const validators = {
            name: (value) => {
                if (!value.trim()) return 'Name is required';
                if (value.length < 2) return 'Name must be at least 2 characters';
                return null;
            },
            email: (value) => {
                if (!value) return 'Email is required';
                if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) return 'Invalid email format';
                return null;
            },
            role: (value) => {
                if (!value) return 'Please select a role';
                return null;
            }
        };
        
        // Add real-time validation
        Object.keys(validators).forEach(fieldName => {
            const field = form.querySelector(\`[name="\${fieldName}"]\`);
            const errorId = \`\${fieldName}-error\`;
            
            field.addEventListener('blur', () => {
                validateField(field, errorId, validators[fieldName]);
                updatePreview();
            });
            
            field.addEventListener('input', () => {
                // Clear error on input
                if (field.parentElement.hasAttribute('data-invalid')) {
                    field.parentElement.removeAttribute('data-invalid');
                    document.getElementById(errorId).style.display = 'none';
                }
                updatePreview();
            });
        });
        
        // Update live preview
        const updatePreview = () => {
            const nameField = form.querySelector('[name="name"]');
            const emailField = form.querySelector('[name="email"]');
            const roleField = form.querySelector('[name="role"]');
            
            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const role = roleField.value;
            
            if (name || email || role) {
                document.getElementById('preview-name').textContent = name || 'Not provided';
                document.getElementById('preview-email').textContent = email || 'Not provided';
                document.getElementById('preview-role').textContent = 
                    role ? roleField.options[roleField.selectedIndex].text : 'Not selected';
                userPreview.style.display = 'block';
            } else {
                userPreview.style.display = 'none';
            }
        };
        
        // Form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate all fields
            let isValid = true;
            Object.keys(validators).forEach(fieldName => {
                const field = form.querySelector(\`[name="\${fieldName}"]\`);
                const errorId = \`\${fieldName}-error\`;
                const fieldValid = validateField(field, errorId, validators[fieldName]);
                if (!fieldValid) isValid = false;
            });
            
            if (!isValid) return;
            
            // Show loading state
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success
                successMessage.style.display = 'block';
                
                // Reset form after delay
                setTimeout(() => {
                    form.reset();
                    userPreview.style.display = 'none';
                    successMessage.style.display = 'none';
                }, 3000);
                
            } catch (error) {
                console.error('Submission failed:', error);
            } finally {
                // Reset button
                submitBtn.textContent = 'Submit';
                submitBtn.disabled = false;
            }
        });
    </script>
</body>
</html>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Component Structure</h2>
				<p>
					Understanding the HTML structure of DB UX components:
				</p>

				<DBTabs>
					<DBTabItem name="buttons" label="Buttons">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Basic Button -->
<button class="db-button" data-variant="primary">
    Click me
</button>

<!-- Button with icon -->
<button class="db-button" data-variant="secondary" data-icon="user">
    Profile
</button>

<!-- Button sizes -->
<button class="db-button" data-variant="primary" data-size="small">Small</button>
<button class="db-button" data-variant="primary">Default</button>
<button class="db-button" data-variant="primary" data-size="large">Large</button>

<!-- Button states -->
<button class="db-button" data-variant="primary" disabled>Disabled</button>
<button class="db-button" data-variant="primary" data-loading="true">Loading</button>`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="inputs" label="Form Inputs">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Text Input -->
<div class="db-input">
    <label for="input-id" class="db-input__label">Label Text</label>
    <input type="text" id="input-id" class="db-input__input" placeholder="Placeholder">
    <span class="db-input__message">Helper text</span>
</div>

<!-- Input with validation state -->
<div class="db-input" data-invalid>
    <label for="error-input" class="db-input__label">Label Text</label>
    <input type="text" id="error-input" class="db-input__input" placeholder="Placeholder">
    <span class="db-input__message">Error message</span>
</div>

<!-- Input with icon -->
<div class="db-input" data-icon="search">
    <label for="search-input" class="db-input__label">Search</label>
    <input type="text" id="search-input" class="db-input__input" placeholder="Search...">
</div>

<!-- Select -->
<div class="db-select">
    <label for="select-id" class="db-select__label">Choose Option</label>
    <select id="select-id" class="db-select__select">
        <option value="">Please select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </select>
</div>

<!-- Textarea -->
<div class="db-textarea">
    <label for="textarea-id" class="db-textarea__label">Description</label>
    <textarea id="textarea-id" class="db-textarea__textarea" placeholder="Enter description"></textarea>
</div>`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="cards" label="Cards & Layout">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Basic Card -->
<div class="db-card" data-elevation-level="2">
    <div class="card-content">
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
    </div>
</div>

<!-- Interactive Card -->
<div class="db-card" data-elevation-level="2" data-behavior="interactive" role="button" tabindex="0">
    <div class="card-content">
        <h3>Clickable Card</h3>
        <p>This card is interactive.</p>
    </div>
</div>

<!-- Section Container -->
<section class="db-section">
    <div class="section-content">
        <h2>Section Title</h2>
        <p>Section content with proper spacing.</p>
    </div>
</section>

<!-- Grid Layout -->
<div class="db-grid" data-columns="3">
    <div class="db-card" data-elevation-level="1">
        <div class="card-content">Card 1</div>
    </div>
    <div class="db-card" data-elevation-level="1">
        <div class="card-content">Card 2</div>
    </div>
    <div class="db-card" data-elevation-level="1">
        <div class="card-content">Card 3</div>
    </div>
</div>`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="feedback" label="Feedback Components">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Notifications -->
<div class="db-notification" data-semantic="informational" data-behavior="inline">
    Information message
</div>

<div class="db-notification" data-semantic="successful" data-behavior="inline">
    Success message
</div>

<div class="db-notification" data-semantic="warning" data-behavior="inline">
    Warning message
</div>

<div class="db-notification" data-semantic="critical" data-behavior="inline">
    Error message
</div>

<!-- Badges -->
<span class="db-badge">Default Badge</span>
<span class="db-badge" data-semantic="successful">Success</span>
<span class="db-badge" data-semantic="warning">Warning</span>
<span class="db-badge" data-semantic="critical">Error</span>

<!-- Tags -->
<span class="db-tag">Removable Tag</span>
<span class="db-tag" data-behavior="interactive">
    Interactive Tag
    <button class="db-tag__close" aria-label="Remove tag">×</button>
</span>`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>CSS Custom Properties</h2>
				<p>
					Customize components using CSS custom properties (CSS variables):
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`/* Custom theme variables */
:root {
    /* Override default colors */
    --db-primary-color: #1976d2;
    --db-secondary-color: #424242;
    
    /* Custom spacing */
    --custom-spacing: 1.5rem;
    
    /* Component-specific overrides */
    --db-button-border-radius: 8px;
    --db-card-border-radius: 12px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    :root {
        --db-background-color: #121212;
        --db-text-color: #ffffff;
    }
}

/* Custom component styles */
.custom-hero-card {
    background: linear-gradient(135deg, var(--db-primary-color), var(--db-secondary-color));
    color: white;
    padding: var(--custom-spacing);
    border-radius: var(--db-card-border-radius);
}

.custom-button {
    --db-button-background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    --db-button-color: white;
}`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>HTML & CSS Features</h2>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🏎️ Lightweight</h4>
							<p>No JavaScript dependencies, just CSS for styling.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🌐 Universal Support</h4>
							<p>Works in any browser that supports CSS Grid and Custom Properties.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🎨 Highly Customizable</h4>
							<p>Use CSS custom properties to theme and customize components.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>📱 Responsive</h4>
							<p>Built-in responsive behavior and mobile-first design.</p>
						</div>
					</DBCard>
				</div>
			</DBSection>

			<DBSection>
				<h2>Best Practices</h2>
				<ul>
					<li><strong>Semantic HTML:</strong> Use proper HTML semantics with ARIA attributes</li>
					<li><strong>Progressive enhancement:</strong> Start with HTML, enhance with CSS and JavaScript</li>
					<li><strong>Responsive design:</strong> Use CSS Grid and Flexbox for layouts</li>
					<li><strong>Accessibility:</strong> Include proper labels, ARIA attributes, and keyboard navigation</li>
					<li><strong>Performance:</strong> Load only the CSS you need for better performance</li>
				</ul>
			</DBSection>

			<DBSection>
				<h2>Example Project</h2>
				<p>
					Check out a complete HTML/CSS example:
				</p>
				
				<DBCard elevationLevel="1">
					<div style={{ padding: '1rem' }}>
						<h4>Static Website Demo</h4>
						<p>A complete static website showcasing DB UX Design System with HTML, CSS, and minimal JavaScript.</p>
						<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
							<DBLink href="#" target="_blank">View Demo →</DBLink>
							<DBLink href="#" target="_blank">Download Template →</DBLink>
						</div>
					</div>
				</DBCard>
			</DBSection>

			<DBSection>
				<h2>Next Steps</h2>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
					<Link href="/getting-started/installation">
						<DBCard 
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>← Installation Guide</h4>
								<p>Go back to the general installation instructions</p>
							</div>
						</DBCard>
					</Link>

					<Link href="/foundations">
						<DBCard 
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>Explore Foundations →</h4>
								<p>Learn about design tokens, colors, and typography</p>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>
		</DefaultPage>
	);
};

export default GettingStartedHtmlCss;