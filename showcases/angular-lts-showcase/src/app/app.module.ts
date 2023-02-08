import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
	DBButtonModule,
	DBIconModule,
	DBCardModule,
	DBDividerModule,
	DBInputModule,
	DBInfotextModule
} from '../../../../output/angular/src';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		DBButtonModule,
		DBIconModule,
		DBDividerModule,
		DBCardModule,
		DBInputModule,
		DBInfotextModule
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule {}
