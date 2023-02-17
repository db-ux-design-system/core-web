import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
	DBButtonModule,
	DBIconModule,
	DBCardModule,
	DBDividerModule,
	DBInputModule,
	DBPageModule,
	DBHeaderModule,
	DBBrandModule,
	DBLinkModule
} from '../../../../output/angular/src';
import { ActionBarDirective } from '../../../../output/angular/src/components/header/action-bar.directive';
import { NavigationDirective } from '../../../../output/angular/src/components/header/navigation.directive';
import { MetaNavigationDirective } from '../../../../output/angular/src/components/header/meta-navigation.directive';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
		ButtonComponent,
		InputComponent,
		ActionBarDirective,
		NavigationDirective,
		MetaNavigationDirective
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
		FormsModule
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule {}
