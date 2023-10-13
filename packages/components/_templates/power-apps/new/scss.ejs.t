---
to: ../../output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/index.scss
force: true
---
/* probably use another CDN instead of GitHub in the future */
@use "@db-ui/foundations/build/scss/default.assets-paths" with (
	$icons-path: "https://ppassets.azureedge.net/assets/icons/",
	$images-path: "https://ppassets.azureedge.net/assets/images/",
	$fonts-path: "https://ppassets.azureedge.net/assets/fonts/"
);
<% if(typeof includeIcon !== 'undefined' && includeIcon){   -%>
@use "@db-ui/foundations/build/scss/icons/include" as *;
<% } -%>

@forward "@db-ui/foundations/build/scss/db-ui-foundations";

@forward "./<%= name %>.scss";

.db-<%= name %> {
	box-sizing: border-box;

	input {
		box-sizing: border-box;
	}
}


