---
to: output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.scss
force: true
---
@use "@db-ui/foundations/build/scss/webpack.assets-paths" as *;
<% if(typeof includeIcon !== 'undefined' && includeIcon){   -%>
@use "@db-ui/foundations/build/scss/icon/icons" as *;
<% } -%>

@use "@db-ui/foundations/build/scss/db-ui-foundations" as *;
@use "@db-ui/foundations/build/scss/variables.global" as *;

:root {
	@extend %db-ui-regular;
}


