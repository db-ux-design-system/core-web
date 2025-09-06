import Link from 'next/link';
import { DBCard, DBLink, DBSection, DBNotification, DBTabs, DBTabItem } from '../../../../output/react/src';
import DefaultPage from '../../components/default-page';

const GettingStartedWebComponents = () => {
	return (
		<DefaultPage>
			<h1>Getting Started with Web Components</h1>
			<p>
				Learn how to use DB UX Design System as standard Web Components that work with any framework or vanilla JavaScript.
			</p>

			<DBSection>
				<h2>Installation</h2>
				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`# Install the Web Components package
npm install @db-ux/wc-core-components

# Or use CDN for quick setup
# See CDN section below`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Setup Methods</h2>
				
				<DBTabs>
					<DBTabItem name="npm-module" label="NPM + Module">
						<div style={{ padding: '1rem 0' }}>
							<h3>ES Modules (Recommended)</h3>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// main.js or app.js
import '@db-ux/core-foundations/build/styles/db-ui-foundations.css';
import '@db-ux/core-components/build/styles/db-ui-components.css';

// Import all components
import '@db-ux/wc-core-components/dist/db-ui-elements/db-ui-elements.esm.js';

// Or import individual components
import '@db-ux/wc-core-components/dist/components/db-button';
import '@db-ux/wc-core-components/dist/components/db-input';`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="cdn" label="CDN">
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
    <title>DB UX Web Components</title>
    
    <!-- CSS -->
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css">
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css">
</head>
<body>
    <!-- Your content here -->
    
    <!-- Web Components Script -->
    <script type="module" src="https://unpkg.com/@db-ux/wc-core-components/dist/db-ui-elements/db-ui-elements.esm.js"></script>
</body>
</html>`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="script-tag" label="Script Tag">
						<div style={{ padding: '1rem 0' }}>
							<h3>Traditional Script Tags</h3>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- For browsers that don't support ES modules -->
<script nomodule src="https://unpkg.com/@db-ux/wc-core-components/dist/db-ui-elements/db-ui-elements.js"></script>

<!-- Polyfills for older browsers -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Basic Usage</h2>
				<p>
					Once loaded, use DB UX components as standard HTML elements:
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
    <title>My App</title>
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-foundations/build/styles/db-ui-foundations.css">
    <link rel="stylesheet" href="https://unpkg.com/@db-ux/core-components/build/styles/db-ui-components.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to DB UX Design System</h1>
        
        <!-- DB Button -->
        <db-button variant="primary" onclick="handleClick()">
            Click me!
        </db-button>
        
        <!-- DB Input -->
        <db-input 
            label="Your name" 
            placeholder="Enter your name"
            id="name-input">
        </db-input>
        
        <!-- DB Card -->
        <db-card elevation-level="2">
            <div style="padding: 1rem;">
                <h3>Card Title</h3>
                <p>This is content inside a DB Card component.</p>
            </div>
        </db-card>
        
        <!-- DB Notification -->
        <db-notification 
            semantic="informational" 
            behavior="inline" 
            id="welcome-message" 
            style="display: none;">
            Welcome! You've successfully set up DB UX Web Components.
        </db-notification>
    </div>

    <script type="module" src="https://unpkg.com/@db-ux/wc-core-components/dist/db-ui-elements/db-ui-elements.esm.js"></script>
    
    <script>
        function handleClick() {
            const nameInput = document.getElementById('name-input');
            const notification = document.getElementById('welcome-message');
            const name = nameInput.value || 'there';
            
            notification.textContent = \`Hello \${name}! Welcome to DB UX Design System.\`;
            notification.style.display = 'block';
            
            // Hide after 3 seconds
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
        
        // Listen for custom events
        document.addEventListener('DOMContentLoaded', () => {
            const nameInput = document.getElementById('name-input');
            
            nameInput.addEventListener('input', (event) => {
                console.log('User typed:', event.target.value);
            });
        });
    </script>
</body>
</html>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>JavaScript Integration</h2>
				<p>
					Web Components integrate seamlessly with modern JavaScript:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`// app.js
class UserForm {
    constructor() {
        this.form = document.getElementById('user-form');
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Handle form submission
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        
        // Listen for input changes
        const inputs = this.form.querySelectorAll('db-input');
        inputs.forEach(input => {
            input.addEventListener('input', this.handleInputChange.bind(this));
            input.addEventListener('blur', this.validateField.bind(this));
        });
        
        // Listen for select changes
        const selects = this.form.querySelectorAll('db-select');
        selects.forEach(select => {
            select.addEventListener('change', this.handleSelectChange.bind(this));
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        if (this.validateForm()) {
            const formData = this.getFormData();
            this.submitForm(formData);
        }
    }
    
    handleInputChange(event) {
        const field = event.target;
        
        // Clear validation error when user starts typing
        if (field.hasAttribute('invalid')) {
            field.removeAttribute('invalid');
            field.removeAttribute('message');
        }
    }
    
    validateField(event) {
        const field = event.target;
        const value = field.value;
        const fieldName = field.getAttribute('name');
        
        let error = '';
        
        switch (fieldName) {
            case 'email':
                if (!value.includes('@')) {
                    error = 'Please enter a valid email address';
                }
                break;
            case 'name':
                if (value.length < 2) {
                    error = 'Name must be at least 2 characters';
                }
                break;
        }
        
        if (error) {
            field.setAttribute('invalid', '');
            field.setAttribute('message', error);
        }
    }
    
    validateForm() {
        const requiredFields = this.form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.setAttribute('invalid', '');
                field.setAttribute('message', 'This field is required');
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    getFormData() {
        const formData = {};
        const inputs = this.form.querySelectorAll('db-input, db-select, db-textarea');
        
        inputs.forEach(input => {
            const name = input.getAttribute('name');
            if (name) {
                formData[name] = input.value;
            }
        });
        
        return formData;
    }
    
    async submitForm(data) {
        const submitButton = this.form.querySelector('db-button[type="submit"]');
        const notification = document.getElementById('form-notification');
        
        // Show loading state
        submitButton.setAttribute('disabled', '');
        submitButton.textContent = 'Submitting...';
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            notification.setAttribute('semantic', 'successful');
            notification.textContent = 'Form submitted successfully!';
            notification.style.display = 'block';
            
            // Reset form
            this.form.reset();
            
        } catch (error) {
            // Show error message
            notification.setAttribute('semantic', 'critical');
            notification.textContent = 'Submission failed. Please try again.';
            notification.style.display = 'block';
            
        } finally {
            // Reset button
            submitButton.removeAttribute('disabled');
            submitButton.textContent = 'Submit';
            
            // Hide notification after 5 seconds
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new UserForm();
});`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Framework Integration</h2>
				<p>
					Web Components work with any framework or library:
				</p>

				<DBTabs>
					<DBTabItem name="vanilla" label="Vanilla JS">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// Create elements dynamically
const createUserCard = (user) => {
    const card = document.createElement('db-card');
    card.setAttribute('elevation-level', '2');
    
    card.innerHTML = \`
        <div style="padding: 1rem;">
            <h3>\${user.name}</h3>
            <p>\${user.email}</p>
            <db-badge semantic="informational">\${user.role}</db-badge>
            <div style="margin-top: 1rem;">
                <db-button variant="secondary" size="small" onclick="editUser('\${user.id}')">
                    Edit
                </db-button>
                <db-button variant="critical" size="small" onclick="deleteUser('\${user.id}')">
                    Delete
                </db-button>
            </div>
        </div>
    \`;
    
    return card;
};

// Append to container
const userList = document.getElementById('user-list');
users.forEach(user => {
    userList.appendChild(createUserCard(user));
});`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="jquery" label="jQuery">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// jQuery integration
$(document).ready(function() {
    // Create components
    const $button = $('<db-button variant="primary">Click me!</db-button>');
    const $input = $('<db-input label="Search" placeholder="Type to search..."></db-input>');
    
    // Append to DOM
    $('#app').append($input, $button);
    
    // Event handling
    $button.on('click', function() {
        const searchValue = $input[0].value;
        console.log('Search for:', searchValue);
    });
    
    // Listen for custom events
    $input.on('input', function() {
        const value = this.value;
        if (value.length > 2) {
            performSearch(value);
        }
    });
    
    // Programmatic updates
    $button.attr('disabled', true);
    $input.val('Initial value');
});`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="alpine" label="Alpine.js">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Alpine.js integration -->
<div x-data="{ 
    name: '', 
    showMessage: false,
    isLoading: false
}">
    <db-input 
        x-model="name"
        label="Your name" 
        placeholder="Enter your name">
    </db-input>
    
    <db-button 
        variant="primary"
        x-bind:disabled="!name.trim() || isLoading"
        @click="async () => {
            isLoading = true;
            await new Promise(r => setTimeout(r, 1000));
            showMessage = true;
            isLoading = false;
            setTimeout(() => showMessage = false, 3000);
        }">
        <span x-text="isLoading ? 'Loading...' : 'Greet me!'"></span>
    </db-button>
    
    <db-notification 
        x-show="showMessage"
        semantic="successful"
        behavior="inline"
        x-text="'Hello ' + name + '! Welcome to DB UX Design System.'">
    </db-notification>
    
    <db-card 
        elevation-level="2" 
        x-show="name.length > 0">
        <div style="padding: 1rem;">
            <h3>Live Preview</h3>
            <p x-text="'Hello ' + name + '!'"></p>
        </div>
    </db-card>
</div>`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Custom Events</h2>
				<p>
					DB UX Web Components emit custom events that you can listen to:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`// Listen for component events
const input = document.querySelector('db-input');
const select = document.querySelector('db-select');
const button = document.querySelector('db-button');

// Input events
input.addEventListener('input', (event) => {
    console.log('Input changed:', event.target.value);
});

input.addEventListener('blur', (event) => {
    console.log('Input lost focus');
});

input.addEventListener('focus', (event) => {
    console.log('Input gained focus');
});

// Select events
select.addEventListener('change', (event) => {
    console.log('Selection changed:', event.target.value);
});

// Button events
button.addEventListener('click', (event) => {
    console.log('Button clicked');
});

// Component-specific events
const drawer = document.querySelector('db-drawer');
drawer.addEventListener('db-drawer-toggle', (event) => {
    console.log('Drawer toggled:', event.detail.isOpen);
});

const tabs = document.querySelector('db-tabs');
tabs.addEventListener('db-tab-change', (event) => {
    console.log('Tab changed to:', event.detail.activeTab);
});`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Web Components Features</h2>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🌐 Universal Compatibility</h4>
							<p>Works with any framework, library, or vanilla JavaScript.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>📦 Self-Contained</h4>
							<p>Encapsulated styles and behavior using Shadow DOM.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🔧 Standard APIs</h4>
							<p>Uses standard DOM APIs and HTML attributes.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>⚡ Progressive Enhancement</h4>
							<p>Graceful degradation for unsupported browsers.</p>
						</div>
					</DBCard>
				</div>
			</DBSection>

			<DBSection>
				<h2>Browser Support</h2>
				<p>
					DB UX Web Components support modern browsers with polyfills for older ones:
				</p>

				<ul>
					<li><strong>Modern browsers:</strong> Chrome 67+, Firefox 63+, Safari 13.1+, Edge 79+</li>
					<li><strong>With polyfills:</strong> Internet Explorer 11+, older browsers</li>
				</ul>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`<!-- Polyfills for older browsers -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>

<!-- Your content -->
<db-button variant="primary">Works everywhere!</db-button>

<!-- Load components after polyfills -->
<script type="module" src="https://unpkg.com/@db-ux/wc-core-components/dist/db-ui-elements/db-ui-elements.esm.js"></script>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Best Practices</h2>
				<ul>
					<li><strong>Load polyfills first:</strong> Include WebComponents polyfills before your components</li>
					<li><strong>Use semantic HTML:</strong> Web Components are still HTML elements</li>
					<li><strong>Handle loading states:</strong> Components may take time to load and upgrade</li>
					<li><strong>Progressive enhancement:</strong> Provide fallbacks for critical functionality</li>
					<li><strong>Event delegation:</strong> Use event delegation for dynamically created components</li>
				</ul>
			</DBSection>

			<DBSection>
				<h2>Example Project</h2>
				<p>
					Check out a complete Web Components example:
				</p>
				
				<DBCard elevationLevel="1">
					<div style={{ padding: '1rem' }}>
						<h4>Web Components Demo</h4>
						<p>A complete vanilla JavaScript app showcasing DB UX Design System Web Components with modern build tools.</p>
						<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
							<DBLink href="#" target="_blank">View Demo →</DBLink>
							<DBLink href="#" target="_blank">GitHub Repository →</DBLink>
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

					<Link href="/components">
						<DBCard 
							elevationLevel="2" 
							role="button"
							behavior="interactive">
							<div style={{ padding: '1rem' }}>
								<h4>Browse Components →</h4>
								<p>Explore all available Web Components</p>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>
		</DefaultPage>
	);
};

export default GettingStartedWebComponents;