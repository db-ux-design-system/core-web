import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { defineCustomElements } from '../../../packages/wc-core-components/dist/loader';
import { AppComponent } from '../../angular-showcase/src/app/app.component';
import { getRoutes } from '../../angular-showcase/src/app/utils/navigation-item';

defineCustomElements(undefined, {
	// TODO: Fix issues with double slots to solve this issue
	exclude: ['db-header', 'db-navigation', 'db-navigation-item', 'db-page']
});

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrapApplication(AppComponent, {
	providers: [provideRouter(getRoutes(), withHashLocation())]
});
