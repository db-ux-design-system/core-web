import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app';

bootstrapApplication(App, { providers: [] }).catch((error) => {
	console.error(error);
});
