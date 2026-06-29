import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../../angular-showcase/src/app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((error: unknown) => {
  console.error(error);
});
