---
inject: true
to: ../vite-plugin/src/detector.ts
after: const VALID_COMPONENTS = [
skip_if: '<%= name %>'
---
	'<%= name %>',
