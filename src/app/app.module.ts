import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallApiComponent } from './call-api/call-api.component';
import { MeteoJourComponent } from './meteo-jour/meteo-jour.component';
import { MeteoSuivantComponent } from './meteo-suivant/meteo-suivant.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CallApiComponent,
    MeteoJourComponent,
    MeteoSuivantComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
