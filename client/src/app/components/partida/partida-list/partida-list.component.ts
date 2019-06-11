import { Component, OnInit } from '@angular/core';
import { PartidasService } from './../../../services/partidas.service';
import { Partida } from '../../../models/Partida.models';


@Component({
  selector: 'app-partida-list',
  templateUrl: './partida-list.component.html',
  styleUrls: ['./partida-list.component.css']
})
export class PartidaListComponent implements OnInit {

  partidas: Partida[];

  constructor(
    private partidasServ: PartidasService
  ) { }

  ngOnInit() {
    this.getPartidas();
  }

  getPartidas() {
    this.partidasServ.getGames()
      .subscribe(
        (res: Partida[]) => {
          this.partidas = res;
        },
        err => console.error(err)
      );
  }

  savePartida() {

  }

}
