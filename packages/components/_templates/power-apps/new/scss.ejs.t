---
to: output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.scss
force: true
---
@use "@db-ui/base/build/scss/webpack.assets-paths" as *;
<% if(typeof includeIcon !== 'undefined' && includeIcon){   -%>
@use "@db-ui/base/build/scss/icon/icons" as *;
<% } -%>
/* TODO: how do we handle tonality */
@use "@db-ui/base/build/scss/tonality" as *;

:root {
	@extend %db-ui-normal;
}


