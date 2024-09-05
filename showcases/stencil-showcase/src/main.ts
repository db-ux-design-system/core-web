import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from '../../angular-showcase/src/app/app.component';
import { getRoutes } from '../../angular-showcase/src/app/utils/navigation-item';
import { defineCustomElements } from '../../../output/stencil/loader';

defineCustomElements();


// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrapApplication(AppComponent, {
	providers: [provideRouter(getRoutes(), withHashLocation())]
});
