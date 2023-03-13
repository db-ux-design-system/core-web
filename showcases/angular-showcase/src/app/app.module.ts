import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
	DBBrandModule,
	DBButtonModule,
	DBCardModule,
	DBDividerModule,
	DBHeaderModule,
	DBIconModule,
	DBInputModule,
	DBLinkModule,
	DBPageModule,
	DBCodeDocsModule
} from '../../../../output/angular/src';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { DefaultComponent } from './components/default.component';

@NgModule({
	declarations: [
		AppComponent,
		DefaultComponent,
		FormComponent,
		ButtonComponent,
		InputComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		DBButtonModule,
		DBIconModule,
		DBDividerModule,
		DBCardModule,
		DBInputModule,
		DBPageModule,
		DBHeaderModule,
		DBBrandModule,
		DBLinkModule,
		DBCodeDocsModule,
		FormsModule
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule {}
