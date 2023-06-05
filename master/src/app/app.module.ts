import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignatedPersonComponent } from './designated-person/designated-person.component';
import { ComplianceOfficerListComponent } from './compliance-officer-list/compliance-officer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignatedPersonComponent,
    ComplianceOfficerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
