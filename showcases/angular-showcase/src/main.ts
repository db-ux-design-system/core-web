import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { getRoutes } from './app/utils/navigation-item';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrapApplication(AppComponent, {
	providers: [provideRouter(getRoutes(), withHashLocation())]
});
