import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidaFormComponent } from './components/partida/partida-form/partida-form.component';
import { PartidaListComponent } from './components/partida/partida-list/partida-list.component';

import { PartidasService } from './services/partidas.service';

@NgModule({
  declarations: [
    AppComponent,
    PartidaFormComponent,
    PartidaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PartidasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
