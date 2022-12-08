---
to: output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.scss
force: true
---
@use "@db-ui/foundations/build/scss/webpack.assets-paths" as *;
<% if(typeof includeIcon !== 'undefined' && includeIcon){   -%>
@use "@db-ui/foundations/build/scss/icon/icons" as *;
<% } -%>
/* TODO: how do we handle tonality */
@use "@db-ui/foundations/build/scss/tonality" as *;

:root {
	@extend %db-ui-regular;
}


