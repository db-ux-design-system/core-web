import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
	DBButtonModule,
	DBIconModule,
	DBTabBarModule
} from '../../../../packages/components/output/angular/src';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, DBButtonModule, DBIconModule, DBTabBarModule],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule {}
