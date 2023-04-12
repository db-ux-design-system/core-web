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
		let-exampleName="exampleName"
		let-exampleIndex="exampleIndex"
		let-variantIndex="variantIndex"
	>
		<db-<%= name %> *ngIf="exampleIndex === 0">{{exampleName}}</db-<%= name %>>
	</ng-template>
</app-default-component>



