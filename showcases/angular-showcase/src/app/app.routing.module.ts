import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
	{ path: 'form', component: FormComponent },
	{ path: '', component: FormComponent, pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule {}
