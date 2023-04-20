import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
	DBButtonModule,
	DBCardModule,
	DBDividerModule,
	DBIconModule,
	DBInputModule,
	DBPageModule,
	DBHeaderModule,
	DBBrandModule,
	DBLinkModule,
	DBRadioModule,
	DBCodeDocsModule,
	DBAlertModule,
	DBSectionModule,
	DBInfotextModule
} from '../../../../output/angular/src';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { InputComponent } from './components/input/input.component';
import { AlertComponent } from './components/alert/alert.component';
import { RadioComponent } from './components/radio/radio.component';
import { InfotextComponent } from './components/infotext/infotext.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';
import { DefaultComponent } from './components/default.component';

@NgModule({
	declarations: [
		AppComponent,
		DefaultComponent,
		FormComponent,
		ButtonComponent,
		InputComponent,
		LinkComponent,
		AlertComponent,
		RadioComponent,
		InfotextComponent,
		SectionComponent,
		CardComponent
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
		DBAlertModule,
		DBSectionModule,
		DBInfotextModule,
		FormsModule,
		DBRadioModule
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule {}
