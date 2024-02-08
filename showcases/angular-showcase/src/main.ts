import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { getRoutes } from './app/utils/navigation-item';

if (environment.production) {
	enableProdMode();
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrapApplication(AppComponent, {
	providers: [provideRouter(getRoutes(), withHashLocation())]
});
