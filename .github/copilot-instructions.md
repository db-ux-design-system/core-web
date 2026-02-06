# DB UX Design System v3 Core Web

DB UX Design System v3 Core Web is a monorepo containing CSS/SCSS styles, components, and framework-specific implementations (Angular, React, Vue, Web Components) for the Deutsche Bahn design system.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Required Prerequisites

- **Node.js 24**: Check `.nvmrc` file. Use `node --version` to verify current version.
- **npm**: Package manager for dependency management and build scripts.

### Bootstrap and Setup

1. **CRITICAL**: Copy `.env.template` to `.env` and add your email:

    ```bash
    cp .env.template .env
    # Edit .env file: Set COMMIT_MAIL=your.email@example.com
    ```

2. **Install dependencies**:

    ```bash
    npm install --ignore-scripts
    ```

    **NOTE**: Use the `--ignore-scripts` flag because the chromedriver package attempts to download binaries during installation, which fails in restricted corporate networks (e.g., behind firewalls or proxies). This workaround prevents installation errors in such environments.

3. **Decode DB Theme assets** (optional for basic development):
    ```bash
    node node_modules/@db-ux/db-theme-fonts/build/scripts/index.js
    node node_modules/@db-ux/db-theme-icons/build/scripts/index.js
    node node_modules/@db-ux/db-theme-illustrative-icons/build/scripts/index.js
    ```
    **NOTE**: These will fail with placeholder credentials in `.env` but are not required for basic development.

### Build and Test

- **Build core packages**:

    ```bash
    npm run build
    ```

    **TIMING**: Takes ~30 seconds. NEVER CANCEL. Set timeout to 120+ seconds.

- **Build all framework outputs**:

    ```bash
    npm run build-outputs
    ```

    **TIMING**: Takes ~2 minutes. NEVER CANCEL. Set timeout to 300+ seconds.

- **Run tests**:
    ```bash
    npm run test
    ```
    **TIMING**: Takes ~10 seconds. NEVER CANCEL. Set timeout to 60+ seconds.

### Development

- **Start interactive development server**:

    ```bash
    npm run dev
    ```

    **Interactive**: Will prompt to select frameworks (plain-html, angular, react, vue, stencil, etc.). Default selection is plain-html.
    **TIMING**: Takes ~30 seconds to start. Runs on <http://localhost:5173/>

- **Start documentation site (Patternhub)**:
    ```bash
    npm run start
    ```
    **TIMING**: Takes ~2 minutes to start. NEVER CANCEL. Set timeout to 300+ seconds.
    **ACCESS**: Runs on <http://localhost:3000> - full design system documentation and examples.

## Validation

### Always Run These Commands Before Committing

```bash
npm run build         # Verify core packages build
npm run test          # Verify all tests pass
npm run lint          # NOTE: May fail if Nuxt showcase hasn't been run yet - this is known
npm run build-outputs # Verify framework outputs build
```

### Manual Validation Scenarios

**ALWAYS test actual functionality after making changes:**

1. **Component Development Validation**:
    - Run `npm run dev` and select `plain-html`
    - Open <http://localhost:5173/> in browser
    - Navigate to components and verify visual rendering
    - Test interactive components (buttons, forms, etc.)

2. **Documentation Site Validation**:
    - Run `npm run start`
    - Open <http://localhost:3000> in browser
    - Navigate through component documentation
    - Verify code examples render correctly

3. **Framework-Specific Validation**:
    - Run `npm run dev` and select target framework (react, vue, angular)
    - Test component integration in selected framework
    - Verify framework-specific showcase builds: `npm run build-showcases`

### Visual Regression Testing

**E2E testing with Playwright** (requires Docker):

```bash
# Generate/update screenshots:
npm run regenerate:screenshots
# Test visual regression:
docker-compose --file ./e2e/docker-compose.yml up
```

**TIMING**: Visual tests take 10+ minutes. NEVER CANCEL. Set timeout to 1800+ seconds.

## Common Tasks

### Working with Components

- **Generate new component**: `npm run generate:component`
- **Component build location**: `packages/components/build/`
- **Framework outputs**: `packages/react-core-components/`, `packages/v-core-components/`, `packages/ngx-core-components/`, `packages/wc-core-components/`

### Working with Styles

- **Foundation styles**: `packages/foundations/`
- **Component styles**: `packages/components/src/styles/`
- **Build artifacts**: `packages/foundations/build/` and `packages/components/build/`

### Key Repository Locations

```text
├── packages/
│   ├── foundations/        # Base CSS/SCSS styles and design tokens
│   ├── components/         # Component CSS and build definitions
│   ├── migration/          # Migration utilities between versions
│   ├── stylelint/          # DB UX Design System Stylelint plugin for QS
│   ├── ngx-core-components/  # Angular components (@db-ux/ngx-core-components)
│   ├── react-core-components/ # React components (@db-ux/react-core-components)
│   ├── v-core-components/    # Vue 3 components (@db-ux/v-core-components)
│   └── wc-core-components/   # Web Components (@db-ux/wc-core-components)
├── showcases/              # Example applications for each framework
├── e2e/                    # End-to-end testing with Playwright
└── docs/                   # Documentation files
```

### Package Scripts Reference

```bash
# Development
npm run dev                 # Interactive dev server (framework selection)
npm run start              # Start Patternhub documentation site

# Building
npm run build              # Build core packages (~30 seconds)
npm run build-outputs      # Build all framework outputs (~2 minutes)
npm run build-showcases    # Build example applications

# Testing & Quality
npm run test               # Run test suite (~10 seconds)
npm run lint               # Run all linters (known issue: may fail if Nuxt showcase hasn't been run yet; see "Known Issues and Workarounds" below)
npm run regenerate:screenshots  # Update visual regression tests material

# Utilities
npm run clean              # Clean build artifacts
npm run generate:component # Generate new component scaffolding
```

## Known Issues and Workarounds

### Installation Issues

- **chromedriver fails**: Use `npm install --ignore-scripts` - this is expected in restricted network environments
- **Font decoding fails**: Expected with placeholder credentials - does not affect basic development

### Build Issues

- **Nuxt-related linting failures**: May fail if Nuxt showcase hasn't been run yet (requires `showcases/nuxt-showcase/.nuxt/tsconfig.json` to be generated)
- **Stencil warnings**: Component prop name conflicts are expected and documented

### Git hook issues

**Husky blocking git commit**: To prevent Husky blocking commits due to missing `COMMIT_MAIL` within `.env` file, just add `--no-verify` to your `git commit` command:

```bash
git commit -m "Your commit message" --no-verify
```

### Network Restrictions

- **Docker registry access**: E2E testing requires Docker and may need proxy configuration
- **Asset downloads**: DB Theme assets require valid credentials from Deutsche Bahn Marketing Portal

## Development Workflows

If possible, start by writing a test that you could use to verify your solution, as well as we could use for ongoing regression testing throughout the product's development.

### Adding a New Component

1. `npm run generate:component` - Follow interactive prompts
2. Implement component in `packages/components/src/components/[name]/`
3. Build and test: `npm run build && npm run test`
4. Generate framework outputs: `npm run build-outputs`
5. Test in development server: `npm run dev`

### Modifying Existing Components

1. Make changes in `packages/components/src/components/[name]/`
2. Adapt those changes into the `showcases/vue-showcase`, `showcases/angular-showcase` and `showcases/react-showcase` folders.
3. **Always run**: `npm run build && npm run dev`
4. **Manual validation**: Test component behavior in browser
5. **Before committing**: `npm run test && npm run build-outputs`

### Debugging Build Issues

1. **Check Node.js version**: Must be v24 (see `.nvmrc`)
2. **Clean rebuild**: `npm run clean && npm run build`
3. **Check dependencies**: `npm install --ignore-scripts`
4. **Isolate issue**: Build individual packages using workspace commands

Remember: This is a design system used by Deutsche Bahn applications. Always ensure changes maintain accessibility, consistency, and brand compliance.
