---
to: src/components/<%= name %>/index.html
---
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>DB<%= h.changeCase.pascal(name) %></title>
		<link rel="stylesheet" href="/styles/db-ui-42.css" />
	</head>
	<body style="padding: var(--db-spacing-fixed-md)">
		<div class="db-<%= name %>">Test</div>
	</body>
</html>
