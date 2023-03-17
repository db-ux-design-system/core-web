---
to: ../../output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.scss
force: true
---
/* probably use another CDN instead of GitHub in the future */
@use "@db-ui/foundations/build/scss/default.assets-paths" with (
	$icons-path: "https://raw.githubusercontent.com/db-ui/mono/main/packages/foundations/assets/icons/",
	$images-path: "https://raw.githubusercontent.com/db-ui/mono/main/packages/foundations/assets/images/",
	$fonts-path: "https://raw.githubusercontent.com/db-ui/mono/main/packages/foundations/assets/fonts/"
);
<% if(typeof includeIcon !== 'undefined' && includeIcon){   -%>
@use "@db-ui/foundations/build/scss/icon/icons" as *;
<% } -%>

@use "@db-ui/foundations/build/scss/db-ui-foundations" as *;
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/foundations/build/scss/color-placeholder" as *;

@use "./<%= name %>.scss" as *;

:root {
	@extend %db-ui-regular;
	@extend %db-bg-neutral-0;
}

.db-<%= name %> {
	box-sizing: border-box;

	input {
		box-sizing: border-box;
	}
}


