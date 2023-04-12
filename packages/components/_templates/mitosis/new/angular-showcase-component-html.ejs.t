---
to: ../../showcases/angular-showcase/src/app/components/<%= name %>/<%= name %>.component.html
---
<app-default-component
	title="<%= h.changeCase.pascal(name) %>"
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



