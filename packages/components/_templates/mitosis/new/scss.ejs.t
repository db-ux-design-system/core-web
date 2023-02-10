---
to: src/components/<%= name %>/<%= name %>.scss
---
/* Add styles for component here */

@use "@db-ui/foundations/build/scss/helpers/shadow-dom" as *;

.db-<%= name %>{
	@extend %shadow-dom-extend;
}
