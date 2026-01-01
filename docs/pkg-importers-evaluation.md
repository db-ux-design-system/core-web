# Sass `pkg:` Importers Evaluation

## Overview

This document evaluates the adoption of Sass `pkg:` importers in the DB UX Design System, following the announcement from the Sass team: <https://sass-lang.com/blog/announcing-pkg-importers/>

## Current State Analysis

### Current Sass Setup

- **Sass Version**: 1.85.0 (pkg: importers supported since 1.71.0 ✅)
- **Import Syntax**: Modern `@use` and `@forward` (already compatible ✅)
- **Load Path Configuration**: `--load-path=node_modules/` and `--load-path=../../node_modules/`

### Current Import Patterns

Users currently import foundation styles like this:

```scss
// SCSS files
@use "@db-ux/core-foundations/build/styles/variables";
@forward "@db-ux/core-foundations/build/styles/relative";

// In showcases
@forward "@db-ux/core-components/build/styles/webpack";
@forward "@db-ux/db-theme/build/styles/webpack";
```

Build configuration includes load paths:

```bash
sass --load-path=node_modules/ --load-path=../../node_modules/ build/styles
```

## Pkg: Importers Benefits

### 1. Simplified Configuration

- **Before**: Requires `--load-path` configuration in build tools
- **After**: No load path configuration needed - works out of the box

### 2. Explicit Package Intent

- **Before**: `@use "@db-ux/core-foundations/build/styles/variables"`
- **After**: `@use "pkg:@db-ux/core-foundations/build/styles/variables"`

The `pkg:` prefix makes it clear that this is a package import, not a relative file.

### 3. Better Error Messages

- Sass can provide more specific error messages when pkg: imports fail
- Clearer distinction between package imports and file imports

### 4. Future-Proof

- Aligns with Sass's direction to simplify package imports
- Reduces reliance on build tool configuration

## Backwards Compatibility Assessment

### ✅ Fully Compatible

- Sass 1.85.0 supports both old and new syntax simultaneously
- No breaking changes for existing imports
- Current `@use`/`@forward` syntax works with pkg: importers

### ⚠️ Considerations

- **Build Tools**: Some build tools may need updates to support pkg: importers
- **Documentation**: Need to update examples and documentation
- **Team Education**: Developers need to learn the new syntax

## Migration Path Recommendations

### Phase 1: Enable Support (Low Risk)

1. Update build configurations to use pkg: importers where beneficial
2. Test pkg: imports in development environments
3. Ensure all build tools (Vite, Webpack, etc.) support pkg: importers

### Phase 2: Documentation Updates (Medium Risk)

1. Update README files with pkg: import examples
2. Update showcases to demonstrate both syntaxes
3. Add migration guide for users

### Phase 3: Gradual Adoption (Optional)

1. Use pkg: imports in new code
2. Gradually migrate existing imports (optional)
3. Consider making pkg: imports the recommended approach

## Technical Implementation

### Testing Results ✅

**Test Setup**: Created test environment with Sass 1.85.0 and @db-ux/core-foundations

**Traditional Imports** (Current):

```scss
@use "@db-ux/core-foundations/build/styles/variables";
```

```bash
sass --load-path=node_modules input.scss output.css
```

**Result**: ✅ Works as expected

**Pkg: Importers** (New):

```scss
@use "pkg:@db-ux/core-foundations/build/styles/variables";
```

```bash
sass --pkg-importer=node input.scss output.css
```

**Result**: ✅ Works perfectly, produces identical output

### Build Configuration Updates

Current:

```bash
sass --load-path=node_modules/ --load-path=../../node_modules/ build/styles
```

With pkg: importers:

```bash
sass --pkg-importer=node build/styles
```

### Key Findings

1. **Requires `--pkg-importer=node` flag** for Sass CLI
2. **Identical output** to traditional imports
3. **Backwards compatible** - both can coexist
4. **Complex imports work** - @forward, @use combinations tested
5. **Package exports configured** - Added `exports` field to package.json for pkg: importer compatibility

### Package.json Configuration

To support pkg: importers, the package.json files have been updated with an `exports` field:

**@db-ux/core-foundations:**

```json
{
	"exports": {
		".": {
			"types": "./build/index.d.ts",
			"default": "./build/index.js"
		},
		"./build/styles/*.scss": "./build/styles/*.scss",
		"./build/styles/*": "./build/styles/*"
	}
}
```

**@db-ux/core-components:**

```json
{
	"exports": {
		"./build/styles/*.scss": "./build/styles/*.scss",
		"./build/styles/*": "./build/styles/*"
	}
}
```

This configuration allows the Node.js pkg: importer to correctly resolve Sass file imports according to the [Sass pkg: importers specification](https://sass-lang.com/blog/announcing-pkg-importers/).

## Recommendations

### 1. Immediate Actions

- [x] Test pkg: importers with current packages
- [x] Add exports field to package.json files
- [ ] Update build configurations to support both syntaxes
- [ ] Create example showcasing pkg: imports

### 2. Documentation Updates

- [ ] Add pkg: import examples to README files
- [ ] Update getting started documentation
- [ ] Create migration guide

### 3. Long-term Strategy

- **Recommendation**: Support both syntaxes
- **Rationale**: Allows gradual adoption without breaking existing users
- **Future**: Consider pkg: imports as the recommended approach for new projects

## Conclusion

Pkg: importers offer significant benefits for simplifying package imports and reducing build configuration complexity. The DB UX Design System is well-positioned to adopt this feature:

- ✅ Compatible Sass version (1.85.0)
- ✅ Modern syntax already in use
- ✅ No breaking changes required
- ✅ Can be adopted gradually
- ✅ Package exports field configured for pkg: importer compatibility

**Next Steps**: Implement testing and documentation updates to support pkg: importers while maintaining backwards compatibility.
