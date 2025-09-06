import Link from 'next/link';
import { DBCard, DBLink, DBSection, DBNotification, DBTabs, DBTabItem } from '../../../../output/react/src';
import DefaultPage from '../../components/default-page';

const GettingStartedVue = () => {
	return (
		<DefaultPage>
			<h1>Getting Started with Vue</h1>
			<p>
				Learn how to integrate DB UX Design System components into your Vue 3 application.
			</p>

			<DBSection>
				<h2>Installation</h2>
				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`# Install the Vue components package
npm install @db-ux/v-core-components

# Install peer dependencies (if not already installed)
npm install vue@^3.0.0`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Plugin Registration</h2>
				<p>
					Register DB UX components as a Vue plugin in your main application file:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';

// Import DB UX Design System
import DBUIComponents from '@db-ux/v-core-components';
import '@db-ux/core-foundations/build/styles/db-ui-foundations.css';
import '@db-ux/core-components/build/styles/db-ui-components.css';

const app = createApp(App);

// Register DB UX components globally
app.use(DBUIComponents);

app.mount('#app');`}</code>
				</pre>

				<DBNotification semantic="informational" behavior="inline">
					You can also import individual components locally without registering the plugin globally.
				</DBNotification>
			</DBSection>

			<DBSection>
				<h2>Component Usage</h2>
				<p>
					Use DB UX components in your Vue templates:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`<!-- MyComponent.vue -->
<template>
  <div class="container">
    <h1>My Vue App</h1>
    
    <!-- DB Input with v-model -->
    <DBInput
      v-model="userName"
      label="Your name"
      placeholder="Enter your name"
      @input="handleInput"
    />
    
    <!-- DB Button with event handler -->
    <DBButton
      variant="primary"
      :disabled="!userName.trim()"
      @click="handleClick"
    >
      Greet me!
    </DBButton>
    
    <!-- Conditional notification -->
    <DBNotification
      v-if="showMessage"
      semantic="successful"
      behavior="inline"
    >
      Hello {{ userName }}! Welcome to DB UX Design System.
    </DBNotification>
    
    <!-- DB Card with content -->
    <DBCard elevation-level="2">
      <div class="card-content">
        <h3>About Vue Integration</h3>
        <p>This demonstrates Vue's reactive data binding with DB components.</p>
        <p v-if="userName">Current user: {{ userName }}</p>
      </div>
    </DBCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const userName = ref('');
const showMessage = ref(false);

const handleInput = (event) => {
  // Additional input handling if needed
  console.log('User typed:', event.target.value);
};

const handleClick = () => {
  showMessage.value = true;
  
  // Hide message after 3 seconds
  setTimeout(() => {
    showMessage.value = false;
  }, 3000);
};

// Computed property example
const greeting = computed(() => {
  return userName.value ? \`Hello \${userName.value}!\` : 'Hello there!';
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.card-content {
  padding: 1rem;
}
</style>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Composition API</h2>
				<p>
					DB UX components work perfectly with Vue 3's Composition API:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`<template>
  <DBCard elevation-level="2">
    <form @submit.prevent="handleSubmit" class="user-form">
      <h2>User Registration</h2>
      
      <DBInput
        v-model="form.name"
        label="Full Name"
        :invalid="!!errors.name"
        :message="errors.name"
        required
        @blur="validateField('name')"
      />
      
      <DBInput
        v-model="form.email"
        label="Email"
        type="email"
        :invalid="!!errors.email"
        :message="errors.email"
        required
        @blur="validateField('email')"
      />
      
      <DBSelect
        v-model="form.role"
        label="Role"
        :invalid="!!errors.role"
        :message="errors.role"
        required
        @change="validateField('role')"
      >
        <option value="">Choose a role...</option>
        <option value="admin">Administrator</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </DBSelect>
      
      <DBButton
        type="submit"
        variant="primary"
        :disabled="!isFormValid || isSubmitting"
        class="submit-button"
      >
        {{ isSubmitting ? 'Submitting...' : 'Register' }}
      </DBButton>
    </form>
  </DBCard>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue';

// Reactive form data
const form = reactive({
  name: '',
  email: '',
  role: ''
});

// Reactive errors object
const errors = reactive({});

// Loading state
const isSubmitting = ref(false);

// Validation rules
const validationRules = {
  name: (value) => {
    if (!value.trim()) return 'Name is required';
    if (value.length < 2) return 'Name must be at least 2 characters';
    return '';
  },
  email: (value) => {
    if (!value) return 'Email is required';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) return 'Invalid email format';
    return '';
  },
  role: (value) => {
    if (!value) return 'Please select a role';
    return '';
  }
};

// Computed property for form validity
const isFormValid = computed(() => {
  return Object.values(errors).every(error => !error) &&
         Object.values(form).every(value => value.trim());
});

// Validate individual field
const validateField = (fieldName) => {
  const rule = validationRules[fieldName];
  if (rule) {
    errors[fieldName] = rule(form[fieldName]);
  }
};

// Validate all fields
const validateForm = () => {
  Object.keys(validationRules).forEach(validateField);
  return isFormValid.value;
};

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', form);
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = '';
    });
    Object.keys(errors).forEach(key => {
      errors[key] = '';
    });
    
  } catch (error) {
    console.error('Submission failed:', error);
  } finally {
    isSubmitting.value = false;
  }
};

// Watch for form changes to clear errors
watch(form, (newForm, oldForm) => {
  Object.keys(newForm).forEach(key => {
    if (newForm[key] !== oldForm[key] && errors[key]) {
      errors[key] = '';
    }
  });
});
</script>

<style scoped>
.user-form {
  padding: 1rem;
  max-width: 400px;
}

.submit-button {
  margin-top: 1rem;
  width: 100%;
}
</style>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>Options API</h2>
				<p>
					For those preferring the Options API, DB UX components work seamlessly:
				</p>

				<pre style={{ 
					background: 'var(--db-adaptive-bg-basic-level-1-default)', 
					padding: '1rem', 
					borderRadius: '4px',
					overflow: 'auto'
				}}>
					<code>{`<template>
  <div>
    <DBInput
      v-model="searchTerm"
      label="Search"
      placeholder="Type to search..."
      @input="onSearchInput"
    />
    
    <DBSelect
      v-model="selectedCategory"
      label="Category"
      @change="onCategoryChange"
    >
      <option value="">All Categories</option>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </DBSelect>
    
    <div v-if="isLoading">
      <DBNotification behavior="inline">
        Loading results...
      </DBNotification>
    </div>
    
    <div v-else>
      <DBCard
        v-for="item in filteredItems"
        :key="item.id"
        elevation-level="1"
        class="result-item"
      >
        <div class="item-content">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <DBBadge>{{ getCategoryName(item.categoryId) }}</DBBadge>
        </div>
      </DBCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  
  data() {
    return {
      searchTerm: '',
      selectedCategory: '',
      isLoading: false,
      items: [],
      categories: [
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Design' },
        { id: 3, name: 'Business' }
      ]
    };
  },
  
  computed: {
    filteredItems() {
      let filtered = this.items;
      
      if (this.searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
      
      if (this.selectedCategory) {
        filtered = filtered.filter(item =>
          item.categoryId === parseInt(this.selectedCategory)
        );
      }
      
      return filtered;
    }
  },
  
  methods: {
    onSearchInput() {
      // Debounce search if needed
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.performSearch();
      }, 300);
    },
    
    onCategoryChange() {
      this.performSearch();
    },
    
    async performSearch() {
      this.isLoading = true;
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data
        this.items = [
          {
            id: 1,
            title: 'Sample Item 1',
            description: 'This is a sample description',
            categoryId: 1
          },
          // ... more items
        ];
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        this.isLoading = false;
      }
    },
    
    getCategoryName(categoryId) {
      const category = this.categories.find(c => c.id === categoryId);
      return category ? category.name : 'Unknown';
    }
  },
  
  mounted() {
    this.performSearch();
  }
};
</script>

<style scoped>
.result-item {
  margin-bottom: 1rem;
}

.item-content {
  padding: 1rem;
}
</style>`}</code>
				</pre>
			</DBSection>

			<DBSection>
				<h2>State Management</h2>
				<p>
					DB UX components integrate well with Pinia (recommended) and Vuex:
				</p>

				<DBTabs>
					<DBTabItem name="pinia" label="Pinia">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: null,
    preferences: {
      theme: 'light',
      language: 'en'
    },
    isLoading: false
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.profile,
    displayName: (state) => state.profile?.name || 'Guest'
  },
  
  actions: {
    async updateProfile(profileData) {
      this.isLoading = true;
      
      try {
        // API call
        const response = await api.updateProfile(profileData);
        this.profile = response.data;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    updatePreferences(newPreferences) {
      this.preferences = { ...this.preferences, ...newPreferences };
    }
  }
});

// Component using Pinia
<template>
  <div>
    <h1>Welcome {{ userStore.displayName }}!</h1>
    
    <DBInput
      v-model="name"
      label="Name"
      :disabled="userStore.isLoading"
    />
    
    <DBSelect
      v-model="theme"
      label="Theme"
      @change="updateTheme"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </DBSelect>
    
    <DBButton
      @click="saveProfile"
      :disabled="userStore.isLoading"
      variant="primary"
    >
      {{ userStore.isLoading ? 'Saving...' : 'Save' }}
    </DBButton>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const name = ref(userStore.profile?.name || '');
const theme = computed({
  get: () => userStore.preferences.theme,
  set: (value) => userStore.updatePreferences({ theme: value })
});

const updateTheme = (event) => {
  userStore.updatePreferences({ theme: event.target.value });
};

const saveProfile = async () => {
  try {
    await userStore.updateProfile({ name: name.value });
  } catch (error) {
    console.error('Failed to save profile:', error);
  }
};
</script>`}</code>
							</pre>
						</div>
					</DBTabItem>

					<DBTabItem name="vuex" label="Vuex">
						<div style={{ padding: '1rem 0' }}>
							<pre style={{ 
								background: 'var(--db-adaptive-bg-basic-level-1-default)', 
								padding: '1rem', 
								borderRadius: '4px',
								overflow: 'auto'
							}}>
								<code>{`// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      profile: null,
      preferences: {
        theme: 'light'
      }
    }
  },
  
  mutations: {
    SET_PROFILE(state, profile) {
      state.user.profile = profile;
    },
    
    UPDATE_PREFERENCES(state, preferences) {
      state.user.preferences = { ...state.user.preferences, ...preferences };
    }
  },
  
  actions: {
    async updateProfile({ commit }, profileData) {
      try {
        const response = await api.updateProfile(profileData);
        commit('SET_PROFILE', response.data);
      } catch (error) {
        throw error;
      }
    }
  },
  
  getters: {
    isLoggedIn: state => !!state.user.profile,
    userTheme: state => state.user.preferences.theme
  }
});

// Component using Vuex
<template>
  <div>
    <DBSelect
      :value="$store.getters.userTheme"
      label="Theme"
      @change="updateTheme"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </DBSelect>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userTheme'])
  },
  
  methods: {
    updateTheme(event) {
      this.$store.commit('UPDATE_PREFERENCES', { 
        theme: event.target.value 
      });
    }
  }
};
</script>`}</code>
							</pre>
						</div>
					</DBTabItem>
				</DBTabs>
			</DBSection>

			<DBSection>
				<h2>Vue-Specific Features</h2>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🔄 v-model Support</h4>
							<p>Two-way data binding with all form components using v-model.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>🎯 Event Handling</h4>
							<p>Standard Vue event handling with native DOM events.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>📦 Scoped Slots</h4>
							<p>Support for Vue's scoped slots in applicable components.</p>
						</div>
					</DBCard>

					<DBCard elevationLevel="2">
						<div style={{ padding: '1rem' }}>
							<h4>⚡ Composition API</h4>
							<p>Full compatibility with Vue 3's Composition API.</p>
						</div>
					</DBCard>
				</div>
			</DBSection>

			<DBSection>
				<h2>Best Practices</h2>
				<ul>
					<li><strong>Use Composition API:</strong> Leverage Vue 3's Composition API for better code organization</li>
					<li><strong>Import selectively:</strong> Import only the components you need for better tree-shaking</li>
					<li><strong>Reactive data:</strong> Use reactive/ref for component state management</li>
					<li><strong>Prop validation:</strong> Define prop types and validation for better development experience</li>
					<li><strong>Scoped styles:</strong> Use scoped styles to avoid CSS conflicts</li>
				</ul>
			</DBSection>

			<DBSection>
				<h2>Example Project</h2>
				<p>
					Check out a complete Vue example:
				</p>
				
				<DBCard elevationLevel="1">
					<div style={{ padding: '1rem' }}>
						<h4>Vue Demo Application</h4>
						<p>A complete Vue 3 app showcasing DB UX Design System integration with Vue Router, Pinia, and Composition API.</p>
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
								<p>Explore all available Vue components</p>
							</div>
						</DBCard>
					</Link>
				</div>
			</DBSection>
		</DefaultPage>
	);
};

export default GettingStartedVue;