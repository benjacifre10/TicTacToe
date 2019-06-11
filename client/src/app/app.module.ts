import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidaFormComponent } from './components/partida/partida-form/partida-form.component';
import { PartidaListComponent } from './components/partida/partida-list/partida-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PartidaFormComponent,
    PartidaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
