import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import Sa11yLangEn from 'sa11y/dist/js/lang/en.js';
import { Lang, Sa11y } from 'sa11y/dist/js/sa11y.esm.js';
import { AppComponent } from './app/app.component';
import { getRoutes } from './app/utils/navigation-item';

if (isDevMode()) {
	Lang.addI18n(Sa11yLangEn.strings);
	const sa11y = new Sa11y({
		checkRoot: 'body'
	});
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrapApplication(AppComponent, {
	providers: [provideRouter(getRoutes(), withHashLocation())]
});
