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
		<DB<%= h.changeCase.pascal(name) %> *ngIf="exampleIndex === 0">{{exampleName}}</DB<%= h.changeCase.pascal(name) %>>
	</ng-template>
</app-default-component>



