<#import "*/components/index.ftl" as DB/>

<#macro Default>
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>${title}</title>

		<style>
			@layer db-ux-components, db-ux-theme, hydrate;

			@import "@db-ux/core-components/build/styles/relative.css" layer(db-ux-components);

			@import "@db-ux/db-theme/build/styles/relative.css" layer(db-ux-theme);

			@import "freemarker/components/hydrate.css" layer(hydrate);
		</style>

		<script type="module">
			import { defineCustomElements } from "/@db-ux/wc-core-components/dist/loader/index.js";

			void defineCustomElements();
		</script>
	</head>
	<body>
	<@DB.Page ; slot>
		<#if !slot?has_content>
			<#nested/>
		</#if>
	</@DB.Page>
	</body>
	</html>
</#macro>
