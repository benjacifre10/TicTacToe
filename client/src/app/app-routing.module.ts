import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartidaListComponent } from './components/partida/partida-list/partida-list.component';
import { PartidaFormComponent } from './components/partida/partida-form/partida-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tictactoe',
    pathMatch: 'full'
  },
  {
    path: 'tictactoe',
    component: PartidaListComponent
  },
  {
    path: 'tictactoe/add',
    component: PartidaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
