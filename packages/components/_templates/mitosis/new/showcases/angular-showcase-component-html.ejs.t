# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
to: "<%= showcases ? `../../showcases/angular-showcase/src/app/components/${name}/${name}.component.html` : null %>"
---
<app-default-component
	title="DB<%= h.changeCase.pascal(name) %>"
	[variants]="variants"
	[exampleTemplate]="exampleTemplate"
>
	<ng-template
		#exampleTemplate
		let-exampleProps="exampleProps"
		let-exampleName="exampleName"
		let-exampleIndex="exampleIndex"
		let-variantIndex="variantIndex"
	>
		<db-<%= name %>>{{exampleName}}</db-<%= name %>>
	</ng-template>
</app-default-component>



