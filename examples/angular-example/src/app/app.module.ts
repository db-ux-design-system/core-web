import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DBButtonModule } from '@db-ui/ngx-components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DBButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
