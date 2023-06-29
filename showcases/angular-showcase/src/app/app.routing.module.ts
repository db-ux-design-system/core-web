import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getRoutes } from './utils/navigation-item';

const routes: any = getRoutes();

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule {}
