import Link from 'next/link';
import { DBCard, DBLink, DBSection, DBNotification, DBTabs, DBTabItem } from '../../../../output/react/src';
import DefaultPage from '../../components/default-page';

const GettingStartedReact = () => {
	return (
		<DefaultPage>
			<h1>Getting Started with React</h1>
			<p>
				Learn how to integrate DB UX Design System components into your React application.
			</p>

			<DBSection>
				<h2>Installation</h2>
				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`# Install the React components package
npm install @db-ux/react-core-components

# Install peer dependencies (if not already installed)
npm install react react-dom`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Import Components</h2>
				<p>
					Import DB UX components in your React components:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`// Import individual components
import { DBButton, DBInput, DBCard } from '@db-ux/react-core-components';

// Or import all components
import * as DB from '@db-ux/react-core-components';`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Styles Setup</h2>
				<p>
					Add the CSS imports to your main React application file:
				</p>

				<DBTabs>
					<DBTabItem name="app-js" label="App.js/App.tsx">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// App.js or App.tsx
import '@db-ux/core-foundations/build/styles/db-ui-foundations.css';
import '@db-ux/core-components/build/styles/db-ui-components.css';
import './App.css'; // Your custom styles

function App() {
  return (
    <div className="App">
      {/* Your app content */}
    </div>
  );
}

export default App;`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="index-css" label="index.css">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`/* index.css */
@import '@db-ux/core-foundations/build/styles/db-ui-foundations.css';
@import '@db-ux/core-components/build/styles/db-ui-components.css';

/* Your global styles */
body {
  margin: 0;
  font-family: var(--db-base-font-family);
}`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Basic Component Usage</h2>
				<p>
					Use DB UX components in your JSX:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`import React, { useState } from 'react';
import { DBButton, DBInput, DBCard, DBNotification } from '@db-ux/react-core-components';

function MyComponent() {
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div>
      <h1>Welcome to my React App</h1>
      
      {/* DB Input with state */}
      <DBInput
        label="Your name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      {/* DB Button with event handler */}
      <DBButton 
        variant="primary" 
        onClick={handleSubmit}
        disabled={!name.trim()}
      >
        Greet me!
      </DBButton>
      
      {/* Conditional notification */}
      {showMessage && (
        <DBNotification 
          semantic="successful"
          behavior="inline"
        >
          Hello {name}! Welcome to DB UX Design System.
        </DBNotification>
      )}
      
      {/* DB Card with content */}
      <DBCard elevationLevel="2">
        <div style={{ padding: '1rem' }}>
          <h3>About DB UX Design System</h3>
          <p>
            This card demonstrates how easy it is to use DB components in React.
          </p>
        </div>
      </DBCard>
    </div>
  );
}

export default MyComponent;`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Hooks Integration</h2>
				<p>
					DB UX components work perfectly with React Hooks:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`import React, { useState, useEffect, useCallback } from 'react';
import { DBInput, DBSelect, DBButton, DBCard } from '@db-ux/react-core-components';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom validation hook
  const validateForm = useCallback(() => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Valid email is required';
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select a role';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({ name: '', email: '', role: '' });
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update form data
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <DBCard elevationLevel="2">
      <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
        <h2>User Registration</h2>
        
        <DBInput
          label="Full Name"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          invalid={!!errors.name}
          message={errors.name}
          required
        />
        
        <DBInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          invalid={!!errors.email}
          message={errors.email}
          required
        />
        
        <DBSelect
          label="Role"
          value={formData.role}
          onChange={(e) => updateField('role', e.target.value)}
          invalid={!!errors.role}
          message={errors.role}
          required
        >
          <option value="">Choose a role...</option>
          <option value="admin">Administrator</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </DBSelect>
        
        <DBButton
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          style={{ marginTop: '1rem' }}
        >
          {isSubmitting ? 'Submitting...' : 'Register'}
        </DBButton>
      </form>
    </DBCard>
  );
}`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>State Management</h2>
				<p>
					DB UX components integrate seamlessly with popular state management solutions:
				</p>

				<DBTabs>
					<DBTabItem name="context" label="React Context">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    theme: 'light'
  });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

// Component using context
import { DBButton, DBSelect } from '@db-ux/react-core-components';
import { useUser } from './UserContext';

function ThemeSelector() {
  const { state, dispatch } = useUser();

  const handleThemeChange = (e) => {
    dispatch({ type: 'SET_THEME', payload: e.target.value });
  };

  return (
    <div>
      <DBSelect
        label="Theme"
        value={state.theme}
        onChange={handleThemeChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </DBSelect>
    </div>
  );
}`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="redux" label="Redux Toolkit">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    preferences: {
      theme: 'light',
      language: 'en'
    }
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    }
  }
});

export const { setProfile, updatePreferences } = userSlice.actions;
export default userSlice.reducer;

// Component using Redux
import { useSelector, useDispatch } from 'react-redux';
import { DBInput, DBButton } from '@db-ux/react-core-components';
import { setProfile } from './store/userSlice';

function UserProfile() {
  const user = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.name || '');

  const handleSave = () => {
    dispatch(setProfile({ ...user, name }));
  };

  return (
    <div>
      <DBInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DBButton onClick={handleSave} variant="primary">
        Save Profile
      </DBButton>
    </div>
  );
}`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>React-Specific Features</h2>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>⚡ Hooks Support</h4>
							<p>Full compatibility with useState, useEffect, and custom hooks.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🔄 Event Handling</h4>
							<p>Standard React event handling with synthetic events.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>📦 Code Splitting</h4>
							<p>Import only the components you need for optimal bundle size.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🎯 TypeScript</h4>
							<p>Full TypeScript support with comprehensive type definitions.</p>
						</div>
					</DBCard>
				</div>
			</DBSection>

			<DBSection>
				<h2>Best Practices</h2>
				<ul>
					<li><strong>Destructure imports:</strong> Import only the components you need</li>
					<li><strong>Use controlled components:</strong> Manage form state with React state</li>
					<li><strong>Handle events properly:</strong> Use React's synthetic event system</li>
					<li><strong>Optimize re-renders:</strong> Use React.memo and useMemo when appropriate</li>
					<li><strong>Error boundaries:</strong> Implement error boundaries for better UX</li>
				</ul>
			</DBSection>

			<DBSection>
				<h2>Common Patterns</h2>
				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`// Custom hook for form validation
import { useState, useCallback } from 'react';

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = useCallback((fieldName, value) => {
    const rule = validationRules[fieldName];
    if (rule) {
      const error = rule(value);
      setErrors(prev => ({ ...prev, [fieldName]: error }));
      return !error;
    }
    return true;
  }, [validationRules]);

  const setValue = (fieldName, value) => {
    setValues(prev => ({ ...prev, [fieldName]: value }));
    if (touched[fieldName]) {
      validate(fieldName, value);
    }
  };

  const setTouched = (fieldName) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    validate(fieldName, values[fieldName]);
  };

  return {
    values,
    errors,
    touched,
    setValue,
    setTouched,
    isValid: Object.values(errors).every(error => !error)
  };
};`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Example Project</h2>
				<p>
					Check out a complete React example:
				</p>
				
				<DBCard elevationLevel="1">
					<div style={{ padding: '1rem' }}>
						<h4>React Demo Application</h4>
						<p>A complete React app showcasing DB UX Design System integration with React Router, hooks, and modern patterns.</p>
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
								<p>Explore all available React components</p>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>
		</DefaultPage>
	);
};

export default GettingStartedReact;