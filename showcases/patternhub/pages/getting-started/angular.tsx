import Link from 'next/link';
import { DBCard, DBLink, DBSection, DBNotification, DBTabs, DBTabItem, DBButton } from '../../../../output/react/src';
import DefaultPage from '../../components/default-page';

const GettingStartedAngular = () => {
	return (
		<DefaultPage>
			<h1>Getting Started with Angular</h1>
			<p>
				Learn how to integrate DB UX Design System components into your Angular application.
			</p>

			<DBSection>
				<h2>Installation</h2>
				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`# Install the Angular components package
npm install @db-ux/ngx-core-components

# Install peer dependencies (if not already installed)
npm install @angular/common @angular/core`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Module Setup</h2>
				<p>
					Import the DB UX components module in your Angular module:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DBUIComponentsModule } from '@db-ux/ngx-core-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DBUIComponentsModule  // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`}</code>
				</pre>

				<DBNotification semantic="informational" behavior="inline">
					For Angular 17+ with standalone components, you can import individual components directly.
				</DBNotification>
			</DBSection>

			<DBSection>
				<h2>Styles Configuration</h2>
				<p>
					Add the CSS imports to your <code>angular.json</code> or import them in your global styles:
				</p>

				<DBTabs>
					<DBTabItem name="angular-json" label="angular.json">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// angular.json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@db-ux/core-foundations/build/styles/db-ui-foundations.css",
              "node_modules/@db-ux/core-components/build/styles/db-ui-components.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="styles-css" label="styles.css">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`/* styles.css */
@import '@db-ux/core-foundations/build/styles/db-ui-foundations.css';
@import '@db-ux/core-components/build/styles/db-ui-components.css';

/* Your global styles */`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Component Usage</h2>
				<p>
					Use DB UX components in your Angular templates:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`<!-- app.component.html -->
<div class="container">
  <h1>My Angular App</h1>
  
  <!-- DB Button -->
  <db-button 
    variant="primary" 
    (click)="handleClick()">
    Click me!
  </db-button>
  
  <!-- DB Input -->
  <db-input 
    label="Your name"
    placeholder="Enter your name"
    [(ngModel)]="userName">
  </db-input>
  
  <!-- DB Card -->
  <db-card elevation-level="2">
    <div class="card-content">
      <h3>Welcome {{ userName }}!</h3>
      <p>This is a DB UX Design System card.</p>
    </div>
  </db-card>
</div>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Component TypeScript</h2>
				<p>
					Handle component interactions in your TypeScript code:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  
  handleClick() {
    alert(\`Hello \${this.userName || 'World'}!\`);
  }
  
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userName = target.value;
  }
}`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Forms Integration</h2>
				<p>
					DB UX components work seamlessly with Angular Forms:
				</p>

				<DBTabs>
					<DBTabItem name="reactive-forms" label="Reactive Forms">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// Import ReactiveFormsModule in your module
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class MyFormComponent {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}

<!-- Template -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <db-input 
    label="Name"
    formControlName="name"
    [required]="true">
  </db-input>
  
  <db-input 
    label="Email"
    type="email"
    formControlName="email"
    [required]="true">
  </db-input>
  
  <db-textarea 
    label="Message"
    formControlName="message">
  </db-textarea>
  
  <db-button 
    type="submit"
    variant="primary"
    [disabled]="!userForm.valid">
    Submit
  </db-button>
</form>`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="template-forms" label="Template Forms">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`<!-- Import FormsModule in your module -->
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <db-input 
    label="Name"
    name="name"
    ngModel
    required
    #nameField="ngModel">
  </db-input>
  
  <db-notification 
    *ngIf="nameField.invalid && nameField.touched"
    semantic="critical"
    behavior="inline">
    Name is required
  </db-notification>
  
  <db-input 
    label="Email"
    name="email"
    type="email"
    ngModel
    required
    email
    #emailField="ngModel">
  </db-input>
  
  <db-button 
    type="submit"
    variant="primary"
    [disabled]="!userForm.valid">
    Submit
  </db-button>
</form>`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Angular-Specific Features</h2>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🔗 Two-way Data Binding</h4>
							<p>Full support for [(ngModel)] and reactive forms.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🎯 Event Handling</h4>
							<p>Angular event binding works with all component events.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>📝 Template Validation</h4>
							<p>Integration with Angular validation and error handling.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🔄 Change Detection</h4>
							<p>Optimized for Angular's change detection strategy.</p>
						</div>
					</DBCard>
				</div>
			</DBSection>

			<DBSection>
				<h2>Best Practices</h2>
				<ul>
					<li><strong>Import selectively:</strong> Only import the components you need in standalone applications</li>
					<li><strong>Use TypeScript:</strong> Take advantage of full type safety and IntelliSense</li>
					<li><strong>Handle errors:</strong> Implement proper error handling for form validation</li>
					<li><strong>Accessibility:</strong> Leverage Angular's built-in accessibility features with DB components</li>
				</ul>
			</DBSection>

			<DBSection>
				<h2>Example Project</h2>
				<p>
					Check out a complete Angular example:
				</p>
				
				<DBCard elevationLevel="1">
					<div style={{ padding: '1rem' }}>
						<h4>Angular Demo Application</h4>
						<p>A complete Angular app showcasing DB UX Design System integration with routing, forms, and state management.</p>
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
								<p>Explore all available Angular components</p>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>
		</DefaultPage>
	);
};

export default GettingStartedAngular;