import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVIGATION_ITEMS } from './utils/navigation-item';

const routes: any = NAVIGATION_ITEMS;

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule {}
